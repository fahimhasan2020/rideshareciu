<?php

namespace App\Http\Controllers\NonUsers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Subscribers\Subscriber;
use App\BirdCount;
use App\Model\Coupons;
use Illuminate\Support\Facades\Http;
use App\Model\UserInvited;
use App\Model\UserDevices;

class VisitorViewController extends Controller
{
    public function index(){
        return view('welcome');
    }

    public function birds(){
        $birds = BirdCount::all();
        return $birds;
    }

    public function addLocation(Request $request){
        
    }

    public function checkNotification()
    {
        $response = Http::withHeaders([
            'Accept'=> 'application/json',
            'Accept-encoding'=> 'gzip, deflate',
            'Content-Type'=> 'application/json',
        ])->post('https://exp.host/--/api/v2/push/send', [
            'to'=> 'ExponentPushToken[X5iHh2DtO31fOJml1UIEu-]',
            'sound'=> 'default',
            'title'=> 'Original Title',
            'body'=> 'And here is the body!',
        ]);
    }

    public function appShare($id)
    {

        $user = UserInvited::where('user_id',$id)->get();
        if(count($user) < 2){
            UserInvited::create(['user_id'=>$id]);
            return view('samreena');
        }else{
            UserInvited::where('user_id',$id)->delete();
            $code = $id.time();
            Coupons::create([
                'user_id'=>$id,
                'type'=>'ratio',
                'code'=>$code,
                'expire_date'=>new \DateTime('tomorrow + 2day'),
                'amount'=>10
            ]);
            $device = UserDevices::where('user_id',$id)->get();
            foreach($device as $d){
                $response = Http::withHeaders([
                    'Accept'=> 'application/json',
                    'Accept-encoding'=> 'gzip, deflate',
                    'Content-Type'=> 'application/json',
                ])->post('https://exp.host/--/api/v2/push/send', [
                    'to'=> $d->token,
                    'sound'=> 'default',
                    'title'=> 'Invitation Code Received',
                    'body'=> 'You have got 10% discount over user invitation',
                ]);
            }
            return view('samreena');
        }
        
    }
}
