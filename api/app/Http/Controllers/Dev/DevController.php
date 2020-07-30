<?php

namespace App\Http\Controllers\Dev;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Artisan;

class DevController extends Controller
{
    public function index(){
        return view('dev.index');
    }
    public function up(){
        Artisan::call('up');
        return redirect()->back();
    }
    public function down(){
        Artisan::call('down');
        return redirect()->back();
    }
    public function cacheClear(){
         Artisan::call('cache:clear');
        return redirect()->back()->with('success','All cache cleared');
    }
    public function configCache(){
        Artisan::call('config:cache');
        return redirect()->back()->with('success','All config cached');
    }
    public function configClear(){
        $result = Artisan::call('config:clear');
        return redirect()->back()->with('success','All config cleared');
    }
    public function routeCache(){
        $result = Artisan::call('route:cache');
        return redirect()->back()->with('success','All route cached');
    }
    public function routeClear(){
        $result = Artisan::call('route:clear');
        return redirect()->back()->with('success','All route cleared');
    }
    public function viewCache(){
        $result = Artisan::call('view:cache');
        return redirect()->back()->with('success','All view cached');
    }
    public function viewClear(){
        $result = Artisan::call('view:clear');
        return redirect()->back()->with('success','All view clear');
    }
    public function optimize(){
        $result = Artisan::call('optimize');
        return redirect()->back()->with('success','Optimized');
    }
    public function optimizeClear(){
        $result = Artisan::call('optimize:clear');
        return redirect()->back()->with('success','All optimization cleared');
    }
    public function debugbarClear(){
        $result = Artisan::call('debugbar:clear');
        return redirect()->back()->with('success','Debugbar Storage clear');
    }
    public function migrateFresh(){
        $result = Artisan::call('migrate:fresh');
        return redirect()->back()->with('success','Migration done');
    }
    public function migrateSeed(){
        $result = Artisan::call('migrate:fresh --seed');
        return redirect()->back()->with('success','Migration done');
    }
}
