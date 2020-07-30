<?php

namespace App\Http\Controllers\NonUsers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class VisitorViewController extends Controller
{
    public function index(){
        return view('welcome');
    }

    public function samreena(){
        $x = 40;
        return view('samreena',['x'=>$x]);
    }
}
