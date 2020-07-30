<?php

namespace App\Http\Middleware;

use App\Model\KnownBrowser;
use Carbon\Carbon;
use Closure;
use Cartalyst\Sentinel\Laravel\Facades\Sentinel;
use Cache;
use Browser;
use DB;

class AdminMiddleWare
{
    public function handle($request, Closure $next)
    {
        if (Sentinel::check()){
            if (Sentinel::getUser()->locked){
                return redirect()->route('admin.lock.screen');
            }
            if (Sentinel::getUser()->hold){
                return redirect()->route('admin.blocked');
            }
            if (Sentinel::getUser()->suspended){
                return redirect()->route('admin.login')->with('fault','Account suspended! Try different account');
            }
            if(Sentinel::getUser()->browser){
                $new = DB::table('known_browser')->where(['user_id'=>Sentinel::getUser()->id,'os'=>Browser::platformFamily(),'browser'=>Browser::browserName()])->count();
                if ($new === 0){
                    return redirect()->route('admin.browser-detect');
                }
            }
            $expiresAt = Carbon::now()->addMinute(5);
            Cache::put('user_is_online'.Sentinel::getUser()->id,true,$expiresAt);
            return $next($request);
        }
        return redirect()->route('admin.login')->with('fault','Login first');
    }
}
