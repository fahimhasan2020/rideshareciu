<?php

namespace App\Http\Controllers\Rider;

use App\Http\Controllers\Controller;
use App\Model\Rider;
use App\Model\Subscribers\Subscriber;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Hash;
use Mail;
use DB;

class RiderAuthentication extends Controller
{
    public function register(Request $request){
        $request->validate([
            'email'=>'required|email|unique:rider',
            'password'=>'required|min:8|confirmed',
        ]);
        $user = Rider::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'nid' => $request->nid,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        if ($user){
            $response = ['user'=>$user];
            return response($response,201);
        }else{
            return response()->json(['fault'=>'Something went wrong. Try again later'],500);
        }
    }
    public function login(Request $request)
    {
        $this->validate($request, [
            'username' => 'required',
            'password' => 'required|min:8',
            'device_name' => 'required'
        ]);
        $user = Rider::where('email', $request->username)->first();
        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }else if($user->deactivated === 0){
            throw ValidationException::withMessages([
                'email' => ['Account under verification'],
            ]);

        }
        $code= rand(0000,9999);
        $otp = \App\Model\RiderOtp::create(['user_id'=>$user->id,'otp'=>$code]);
        Mail::to($user->email)->queue(new \App\Mail\UserLoginOtp($code));
        $token = $user->createToken($request->device_name)->plainTextToken;
        $response = [
            'user'=>$user,
            'token'=>$token
        ];
        return response($response,201);
    }

    public function verifyUserOtp(Request $request)
    {
        $this->validate($request, [
            'username'=>'required'
        ]);
        $user = Rider::where('email', $request->username)->first();
        if($user){
            $code= rand(0000,9999);
            $otp = \App\Model\RiderOtp::create(['user_id'=>$user->id,'otp'=>$code]);
            Mail::to($user->email)->queue(new \App\Mail\UserLoginOtp($code));
            return response()->json(['success'=>'Success']);
        }
        return response()->json(['fault'=>"Otp not sent"]);
    }

    public function resetPasswordString(Request $request){
        $this->validate($request, [
            'email'=>'required',
            'password'=>'required'
        ]);
        $user = Rider::where('email', $request->email)->first();
        if($user){
            $u = Rider::find($user->id);
        $u->password = Hash::make($request->password);
        $u->update();
        return response()->json(['success'=>'Success']);
        }
        return response()->json(['fault'=>'Error loading subscriber']);
        
    }

    public function verifyOtp(Request $request){
        $this->validate($request, [
            'otp' => 'required',
            'email'=>'required'
        ]);
        $id = Rider::where('email', $request->email)->first();
        $last = DB::table('rider_otp')->where('user_id',$id->id)->orderBy('id', 'DESC')->first();
        if($request->otp == $last->otp){
            return response()->json(['success'=>'Success']);;
        }else{
            return response()->json(['fault'=>$last->otp]);
        }


    }
}
