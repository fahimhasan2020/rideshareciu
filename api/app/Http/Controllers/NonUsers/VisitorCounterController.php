<?php

namespace App\Http\Controllers\NonUsers;

use App\Http\Controllers\Controller;
use App\Model\VisitorCounter;
use Illuminate\Http\Request;
use GeoIP;
use Carbon\Carbon;

class VisitorCounterController extends Controller
{
    public function visit(Request $request){
        if ($request->type === 'visitor'){
            $geoip = $_SERVER['REMOTE_ADDR'];
            $this->generalVisitor($geoip,$request->title);
        }elseif ($request->type === 'register'){
            $this->loggedIn($request->ip);
        }else{
            $this->subscribed($request->ip);
        }
    }

    private function generalVisitor($ip,$title){
        $dataGet = VisitorCounter::where('ip',$ip)
            ->whereDate('created_at',Carbon::today())
            ->count();
        if ($dataGet > 0){
            return 'visitor';
        }
        $address = GeoIP::getLocation($ip);
        $result = VisitorCounter::create([
            'ip'=>$ip,
            'lat'=>$address->lat,
            'lng'=>$address->lon,
            'type'=>'visitor',
            'page_title'=>$title,
            'country_code'=>$address->iso_code
        ]);
        return $result;
    }

    private function loggedIn($ip){

    }

    private function subscribed($ip){

    }
}
