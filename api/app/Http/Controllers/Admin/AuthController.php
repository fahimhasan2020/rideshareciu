<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Sentinel;
use Cartalyst\Sentinel\Checkpoints\ThrottlingException;
use Cartalyst\Sentinel\Checkpoints\NotActivatedException;

class AuthController extends Controller
{
    public function __construct()
    {
       $this->middleware('admin', ['only' => ['logout']]);
    }
    public function login(Request $request){
        $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);
        try {
            if (Sentinel::authenticate($request->all(),$request->remember)){
                if (Sentinel::getUser()->deactivated == 1){
                    $id = Sentinel::getUser()->id;
                    $user = User::find($id);
                    $user->deactivated= false;
                    $user->update();
                }
                if (Sentinel::getUser()->locked == 1){
                    $id = Sentinel::getUser()->id;
                    $user = User::find($id);
                    $user->locked= false;
                    $user->update();
                }
                return redirect()->route('admin.dashboard')->with('success',trans('welcomeToDashboard'));
            }
            return redirect()->route('admin.login')->with('fault',trans('wrongEmailPasswordMessage'));
        }catch (ThrottlingException $e){
            $delay = $e->getDelay();
            return redirect()->route('admin.login')->with('fault',trans('youAreBannedFor').' '.$delay.' '.trans('seconds'));
        }catch (NotActivatedException $e){
            return redirect()->route('admin.login')->with('fault',trans('notActivatedError'));
        }
    }
    public function logout(){
        Sentinel::logout();
        return redirect()->route('admin.login');
    }
    public function logoutLock(){
        if (!Sentinel::check()){
            return redirect()->route('admin.login')->with('fault',trans('loginFirstError'));
        }
        $id = Sentinel::getUser()->id;
        $user = User::find($id);
        $user->locked = false;
        $user->update();
        Sentinel::logout();
        return redirect()->route('admin.login');
    }
    public function lock(){
        $id = Sentinel::getUser()->id;
        $user = User::find($id);
        $user->locked = true;
        $user->update();
        return redirect()->route('admin.lock.screen');
    }
    public function unlock(Request $request){
        $request->validate([
            'password' => 'required',
        ]);
        $email = Sentinel::getUser()->email;
        $credential = [
            'email'=>$email,
            'password'=>$request->password
        ];
        try {
            if (Sentinel::authenticate($credential)){
                $id = Sentinel::getUser()->id;

                $user = User::find($id);
                $user->locked = false;
                $user->update();
                return redirect()->route('admin.dashboard')->with('success','Welcome to dashboard');
            }
            return redirect()->route('admin.lock.screen')->with('fault','Wrong password');
        }catch (ThrottlingException $e){
            $this->logoutLock();
        }

    }
    public function blocked(){
        if(Sentinel::check()){
            return Inertia::render('HoldScreen');
        }else{
            return redirect()->route('admin.login');
        }
    }
}
