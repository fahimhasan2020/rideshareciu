<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\SavedPlaces;
use App\Model\Subscribers\Subscriber;
use Image;

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
        $id->update();
        return response()->json(['Success'=>'Added']); 
    }

    public function updateDp(Request $request)
    {
        return response($request->all());
        // if ($request->hasFile('image')) {
        //     return response()->json(['Success'=>'Image found'],200);
        // }else{
        //     return response()->json(['Success'=>'Image not found'],500);
        // }
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
}
