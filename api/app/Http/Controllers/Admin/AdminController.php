<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Jobs\AdminResetPassword;
use App\Jobs\UnknownBrowser;
use App\Model\AdminInvited;
use App\Model\AdminPermission;
use App\Model\KnownBrowser;
use App\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use DB;
use Sentinel;
use Reminder;
use Activation;
use Browser;

class AdminController extends Controller
{
    public function index(){if (Sentinel::check()){
        return redirect()->route('admin.dashboard');
    }else{
        return redirect()->route('admin.login');
    }}
    public function postVerifyTrustedBrowser(Request $request){
        $request->validate([
            'otp'=>'required|min:6|max:6'
        ]);
        $otp = DB::table('known_browser')->where(['user_id'=>Sentinel::getUser()->id,'verified'=>0])->orderBy('created_at', 'desc')->first();
        if ($request->otp === $otp->otp){
            $op = KnownBrowser::find($otp->id);
            $op->verified = 1;
            $op->update();
            return redirect()->route('admin.dashboard');
        }
        return redirect()->back()->with('fault','Wrong otp');
    }
    public function verifyTrustedBrowser(Request $request){
        if (Sentinel::check()){
            $id = Sentinel::getUser()->id;
            $email = Sentinel::getUser()->email;
            $phone = Sentinel::getUser()->phone;
            $os = Browser::platformFamily();
            $browser = Browser::browserName();
            dispatch(new UnknownBrowser($id,$browser,$os,$request->via,$email,$phone));
        }
    }
    public function login(){return Inertia::render('Login');}
    public function register(Request $request){
        if (! $request->hasValidSignature()) {
            abort(401);
        }
        $id = decrypt($request->id);
        $invited = AdminInvited::findOrFail($id);
        return Inertia::render('Register',[
            'slug'=>$invited->slug,
            'email'=>$invited->email
        ]);
    }
    public function forget(){return Inertia::render('Forget');}
    public function postForget(Request $request){
        $user = User::where('email',$request->email)->count();
        if ($user == 0){
            return redirect()->back()->with('fault','This email does not exist');
        }
        $use = User::where('email',$request->email)->first();
        $users = Sentinel::findById($use->id);
        $reminder = Reminder::exists($users)?:Reminder::create($users);
        try {
            $this->dispatch(new AdminResetPassword($request->email,$reminder->code));
            return redirect()->back()->with('success','Mail has been sent to your account');
        }catch (\Exception $e){
            return redirect()->back()->with('fault','Account recovery failed');
        }


    }
    public function postReset(Request $request){
        $request->validate([
            'password' => 'required|min:8|regex:/^.*(?=.{3,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\X])(?=.*[!$#%]).*$/',
            'password_confirmation' => 'required|same:password',
            'code'=>  'required',
            'email'=> 'required'
        ]);
        $user = User::where('email',$request->email)->count();
        if ($user == 0){
            return redirect()->route('admin.login')->with('fault','Password reset failed');
        }
        $use = User::where('email',$request->email)->first();
        $sentinelUser = Sentinel::findById($use->id);
        if ($reminder = Reminder::exists($sentinelUser)){
            if ($reminders = Reminder::complete($sentinelUser, $request->code, $request->password))
            {
                return redirect()->route('admin.login')->with('success','Password reset successful. Login with new password');
            }
            else
            {
                return redirect()->route('admin.login')->with('fault','Password reset failed');
            }
        }else{
            return redirect()->route('admin.forget')->with('fault','Password reset failed');
        }

    }
    public function activate(Request $request){
        if (! $request->hasValidSignature()) {
            abort(401);
        }
        $count = User::where('email',$request->email)->count();
        if ($count === 0){
            return redirect()->route('admin.login')->with('fault','Login first');
        }
        $use = User::where('email',$request->email)->first();
        $sentinelUser = Sentinel::findById($use->id);
        if ($activation = Activation::exists($sentinelUser)){
            if ($completed = Activation::completed($sentinelUser)){
                return redirect()->route('admin.login')->with('fault','Your account almost being activated. Login now');
            }else{
                if ($activations = Activation::complete($sentinelUser, $request->code)){
                    return redirect()->route('admin.login')->with('success','Account has been activated . Login now');
                }
            }
        }else{
            return redirect()->route('admin.login')->with('fault','Your account almost being activated. Login now');
        }
    }
    public function browserDetect(){
        return Inertia::render('BrowserDetect');
    }
    public function reset(Request $request){
        if (! $request->hasValidSignature()) {
            abort(401);
        }
        $user = User::where('email',$request->email)->count();
        if ($user == 0){
            return redirect()->back()->with('fault','Password reset failed');
        }
        $use = User::where('email',$request->email)->first();
        $sentinelUser = Sentinel::findById($use->id);
        if ($reminder = Reminder::exists($sentinelUser)){
                return Inertia::render('Reset',['code'=>$request->code,'email'=>$request->email]);
        }else{
            return redirect()->route('admin.forget')->with('fault','Password reset failed');
        }

        }

}
