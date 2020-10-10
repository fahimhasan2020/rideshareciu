<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\SavedPlaces;
use App\Model\Subscribers\Subscriber;
use Image;
use App\Model\Coupons;
use Storage;
use Illuminate\Support\Str;
use App\Model\UserDevices;
use App\Model\Ride;
use App\Model\Rider;
use App\Events\UserCheckRider;

class HomeController extends Controller
{
    public function addLocation(Request $request)
    {
        $request->validate([
            'name'=>'required',
            'email'=>'required',
            'formattedAddress'=>'required',
            'lat'=>'required',
            'lng'=>'required'
        ]);

        $user = Subscriber::where('email',$request->email)->first();

        try{
           SavedPlaces::create([
            'user_id'=>$user->id,
            'name'=>$request->name,
            'lat'=>$request->lat,
            'lng'=>$request->lng,
            'formatted_address'=>$request->formattedAddress
        ]);
        return response()->json(['Success'=>'Added']); 
        }catch(error $e){
            return response()->json($e);
        }
        
    }

    public function locationUpdate(Request $request){
        $request->validate([
            'email'=>'required',
            'latitude'=>'required',
            'longitude'=>'required'
        ]);
        $user = Subscriber::where('email',$request->email)->first();
        $use = Subscriber::find($user->id);
        $use->latitude = $request->latitude;
        $use->longitude = $request->longitude;
        $use->update();
    }

    public function getInfo(Request $request)
    {
        $request->validate([
            'email'=>'required',
        ]);
        $user = Subscriber::where('email',$request->email)->first();
        return response()->json($user);
    }

    public function saveInfo(Request $request)
    {
        $request->validate([
            'email'=>'required',
        ]);
        $user = Subscriber::where('email',$request->email)->first();
        $id = Subscriber::find($user->id);
        if(isset($request->firstName)){
            $id->first_name = $request->firstName;
        }
        if(isset($request->lastName)){
            $id->last_name = $request->lastName;
        }
        if(isset($request->dob)){
            $id->date_of_birth = $request->dob;
        }
        if(isset($request->phone)){
            $id->phone_number = $request->phone;
        }
        $id->update();
        return response()->json(['Success'=>'Added']); 
    }

    public function updateDp(Request $request)
    {
        $request->validate([
            'email'=>'required',
            'image'=>'required'
        ]);
        $rider = Subscriber::where('email',$request->email)->first();
        $rideDriver = Subscriber::find($rider->id);
        $image_64 = $request['image']; //your base64 encoded data
        $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];
        $replace = substr($image_64, 0, strpos($image_64, ',')+1); 
        $image = str_replace($replace, '', $image_64); 
        $image = str_replace(' ', '+', $image); 
        $imageName = time().Str::random(10).'.'.$extension;
        Storage::disk('local')->put($imageName, base64_decode($image));
        $rideDriver->profile_picture = $imageName;
        $rideDriver->update();
        return response()->json(['Success'=>'Pic uploaded']);
    }


    public function savedLocations(Request $request)
    {
        $request->validate([
            'email'=>'required',
        ]);
        $user = Subscriber::where('email',$request->email)->first();
        $locations = SavedPlaces::where('User_id',$user->id)->get();
        return $locations;
    }

    public function couponList(Request $request)
    {
        $request->validate([
            'email'=>'required'
        ]);
        $user = Subscriber::where('email',$request->email)->first();
        $coupons = Coupons::where(['user_id'=>$user->id,'used'=>0])->get();
        return $coupons;
    }

    public function checkCoupon(Request $request)
    {
       $request->validate([
           'email'=>'required',
           'code'=>'required|min:8',
           'amount'=>'required'
       ]);
       $user = Subscriber::where('email',$request->email)->first();
       $coupon = Coupons::where(['code'=>$request->code,'used'=>0,'user_id'=>$user->id])->get();
       if(count($coupon) < 1){
            return response()->json(['error'=>'Invalid coupon code']);
       }
       if($request->amount < 100){
            return response()->json(['error'=>'No discount available below 100 taka']);
       }
       $coup = Coupons::find($coupon[0]->id);
       $coup->used = 1;
       $coup->update();
       if($coupon[0]->type == 'ratio'){
           $remains = ($request->amount*intval($coupon[0]->amount))/100;
           $discounted = $request->amount - $remains;
           return response()->json(['sucs'=>'You have some discount','amount'=>$discounted,'discounted'=>$remains]);
       }else{
           if($request->amount < $coupon[0]->amount){
            $coup->used = 0;
            $coup->update();
            return response()->json(['error'=>'Insufficient fund']);
           }
            $remains = ($request->amount - $coupon[0]->amount);
            return response()->json(['success','Hurreh! you have some discount','amount'=>$remains,'discounted'=>$coupon[0]->amount]);
       }
    }

    public function updateDeviceToken(Request $request)
    {
     $request->validate([
         'email'=>'required',
         'token'=>'required'
     ]);
     $use = Subscriber::where('email',$request->email)->first();
     $user = UserDevices::where(['user_id'=>$use->id,'token'=>$request->token])->get();
     if(!count($user)>0){
         UserDevices::create(['user_id'=>$use->id,'token'=>$request->token]);
     }
    }

    public function postRide(Request $request)
     {
        $request->validate([
            'email'=>'required',
            'rent'=>'required',
            'starting_cordinate'=>'required',
            'ending_cordinate'=>'required'
        ]);
        $user = Subscriber::where('email',$request->email)->first();
        if($user){
            $ride = Ride::create([ 
                'user_id'=>$user->id,
                'rent'=>$request->rent,
                'starting_cordinate'=>$request->starting_cordinate,
                'ending_cordinate'=>$request->ending_cordinate,
            ]);
            event(new \App\Events\RiderCall($ride->id,$request->rent,$request->starting_cordinate,$request->ending_cordinate,$user->id,$request->type));
        }
     }

     public function riderAccepted(Request $request)
     {
         $request->validate(['email'=>'required',
         'type'=>'required','ride'=>'required','duration'=>'required']);
         $rider = Rider::where('email',$request->email)->first();
         if($request->type === 'ride'){
             $ride = Ride::find($request->ride);
             if(!$ride->rider_id){
                 $ride->rider_id = $rider->id;
                 $ride->update();
                 event(new UserCheckRider($ride->user_id,$request->duration,$rider->id));
                 return response()->json(['success'=>'Ride started']);
             }else{
                 return response()->json(['errorV'=>'Request received by another driver']);
             }
         }
     }

     public function viewRider(Request $request)
     {
         $request->validate(['id'=>'required']);
         $rider = Rider::find($request->id);
         return $rider;
     }
}
