<?php

namespace App\Http\Controllers\NonUsers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\BirdCount;

class VisitorViewController extends Controller
{
    public function index(){
        return view('welcome');
    }

    public function samreena(){
        $x = 40;
        return view('samreena',['x'=>$x]);
    }

    public function birds(){
        $birds = BirdCount::all();
        return $birds;
    }
}
