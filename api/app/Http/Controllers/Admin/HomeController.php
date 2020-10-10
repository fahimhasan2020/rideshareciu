<?php

namespace App\Http\Controllers\Admin;

use App\Events\AdminChatMessage;
use App\Http\Controllers\Controller;
use App\Model\VerifyOtp;
use App\Model\VisitorCounter;
use Illuminate\Support\Facades\Http;
use App\Model\Subscribers\Subscriber;
use App\User;
use App\Model\Rider;
use App\Model\AdminChat;
use Illuminate\Http\Request;
use Inertia\Inertia;
use DB;
use App\Model\Coupons;
use Sentinel;
use Carbon\Carbon;
use Cache;
use App\Model\UserDevices;

class HomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin',['except'=>['lockScreen']]);
    }
    public function dashboard(){
        return Inertia::render('Dashboard');
    }
    public function lockScreen(){
        if (Sentinel::check()){
            return Inertia::render('LockScreen');
        }else{
            return redirect()->route('admin.login')->with('fault','Login first');
        }
    }
    public function profile(){
        return Inertia::render('Profile/Profile');
    }
    public function editProfile(){
        return Inertia::render('Profile/EditProfile');
    }
    public function notifications(){
        $id = Sentinel::getUser()->id;
        $user = User::find($id);
        $notifications = $user->notifications;
        return Inertia::render('Profile/Notifications',['notifications'=>$notifications]);
    }
    public function messages(){
        $contacts = DB::table('users')
            ->join('admin_chat', 'users.id', '=', 'admin_chat.to')
            ->select('users.id AS uid',DB::raw('COUNT(admin_chat.message) as unreads'))
            ->where('users.id',Sentinel::getUser()->id)
            ->groupBy('users.id')
            ->get();
        return Inertia::render('Profile/Messages',[
            'users'=>$contacts
        ]);
    }
    public function settings(){
        return Inertia::render('Profile/AccountSettings');
    }
    public function saveName(Request $request){
        $request->validate([
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
        ]);
        $user = Sentinel::getUser()->id;
        $use = User::findOrFail($user);
        $use->first_name = $request->first_name;
        $use->last_name = $request->last_name;
        $use->save();
        return redirect()->back()->with('success','Name updated');
    }
    public function verifyOtp(Request $request){
        $request->validate([
            'type' => 'required',
        ]);
        $user = Sentinel::getUser()->id;
        $email = Sentinel::getUser()->email;
        $phone = Sentinel::getUser()->phone_number;
        $checkPrevious = VerifyOtp::where(['user_id'=>$user,'verified'=>0])->count();
        if ($checkPrevious>0){
            return redirect()->back()->with('fault','Otp code has almost sent');
        }else{
            if ($request->type === 'phone'){
                $request->validate([
                    'number' => 'required',
                ]);
                $number = str_replace("-","",$request->number);
                dispatch(new \App\Jobs\VerifyOtp($number,'phone',$user,$email,$phone));
                return redirect()->back()->with('success','OTP code has been sent to your email');
            }else if ($request->type === 'email'){
                $request->validate([
                    'email' => 'required',
                    'password' => 'required',
                ]);
                if($phone === null || $phone === ''){
                    return redirect()->back()->with('fault','Setup phone number first');
                }
                $auth = [
                    'email'=>Sentinel::getUser()->email,
                    'password'=>$request->password
                ];
                if (Sentinel::authenticate($auth)){
                    dispatch(new \App\Jobs\VerifyOtp($request->email,'email',$user,$email,$phone));
                    return redirect()->back()->with('success','OTP code has been sent to your mobile number');
                }else{
                    return redirect()->back()->with('fault','Wrong credential');
                }
            }
        }
    }
    public function verifyOtpSubmit(Request $request){
        $request->validate([
            'code' => 'required',
        ]);
        $id = Sentinel::getUser()->id;
        $email = Sentinel::getUser()->email;
        $phoneNumber = Sentinel::getUser()->phone_number;
        $code = VerifyOtp::where(['user_id'=>$id,'verified'=>0])->first();
        if ($request->code == $code->verification_code){
            $user = User::find($id);
            if ($code->email != null && $code->email != $email){
                $user->email = $code->email;
            }
            if ($code->phone_number != null && $code->phone_number != $phoneNumber){
                $user->phone_number = $code->phone_number;
            }
            $user->update();
            $completed = VerifyOtp::find($code->id);
            $completed->verified = true;
            $completed->update();
            return redirect()->back()->with('success','Contact updated');
        }
        return redirect()->back()->with('fault','Contact update failed');
    }
    public function adminList(){
        $permissions = DB::table('admin_permissions')->paginate(10);
        $roles = DB::table('roles')->paginate(10);
        $admins = DB::table('users')->where(['hold'=>0,'suspended'=>0])->paginate(10);
        $adminsDisabled = DB::table('users')->where(['hold'=>1,'suspended'=>0])->paginate(10);
        return Inertia::render('Users/Admin/AdminList',[
            'permissions' => $permissions,
            'roles'=>$roles,
            'admins'=>$admins,
            'adminDisabled'=>$adminsDisabled
        ]);}
    public function userList(){
        $subscribers = DB::table('subscriber')->paginate(10);
        return Inertia::render('Users/User/UserList',[
            'permissions'=>$subscribers,
        ]);
    }
    public function riderList(){
        $riders = DB::table('rider')->paginate(10);
        return Inertia::render('Users/Riders/Index',[
            'permissions'=>$riders,
        ]);
    }
    public function updateDP(Request $request){
        $request->validate([
            'profilePicture'=>'required'
        ]);
        $id = Sentinel::getUser()->id;
        $user = User::find($id);
        $user->profile_picture = $request->profilePicture;
        $user->update();
        return redirect()->back()->with('success','User avater updated');
    }
    public function savePassword(Request $request){
        $request->validate([
            'old_password'=>'required',
            'new_password'=>'required|min:8|regex:/^.*(?=.{3,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\X])(?=.*[!$#%]).*$/',
            'confirm_new_password'=>'required|same:new_password'
        ]);
        $auth = [
            'email'=>Sentinel::getUser()->email,
            'password'=>$request->old_password,
        ];
        if (Sentinel::authenticate($auth)){
            if($request->old_password === $request->new_password){
                return redirect()->back()->with('fault','Same password');
            }
            $user = Sentinel::getUser();
            Sentinel::update($user, array('password' => $request->new_password));
            if ($request->relog === true){
                $resetId = Sentinel::getUser()->id;
                $persistenses = DB::table('persistences')
                    ->where('user_id',$resetId)
                    ->delete();
                return redirect()->back()->with('success','Password changed Login with new password');
            }
            return redirect()->back()->with('success','Password changed');
        }else{
            return redirect()->back()->with('fault','Wrong password');
        }

    }
    public function saveSocialLinks(Request $request){
        $id = Sentinel::getUser()->id;
        $user = User::find($id);
        $user->facebook_link = $request->facebook_link;
        $user->twitter_link = $request->twitter_link;
        $user->linkdin_link = $request->linkdin_link;
        $user->update();
        return redirect()->back()->with('success','Social link updated');
    }
    public function saveBio(Request $request){
        $id = Sentinel::getUser()->id;
        $user = User::find($id);
        $user->bio = $request->bio;
        $user->save();
        return redirect()->back()->with('success','Bio updated');
    }
    public function deactivate(){
        $id = Sentinel::getUser()->id;
        $user = User::find($id);
        $user->deactivated = true;
        $user->update();
        Sentinel::logout();
        return redirect()->route('admin.login')->with('success','Account deactivated');
    }
    public function postMessages(Request $request){
        $request->validate([
            'from'=>'required',
            'to'=>'required'
        ]);
        $toUser = User::where('id',$request->to)->first();
        if ($toUser->deactivated == 1){
            return redirect()->back()->with('fault','Account deactivated');
        }
        $messages = AdminChat::create([
            'from'=>Sentinel::getUser()->id,
            'to'=>$request->to,
            'message'=>$request->message
        ]);
        broadcast(new AdminChatMessage($messages));
        return $messages;
    }
    public function getMessages($usersId){
        $myId = Sentinel::getUser()->id;
        $messages = \App\Model\AdminChat::where(function ($query) use ($usersId,$myId){
            $query->where('from',$myId)->where('to',$usersId);
        })->orWhere(function ($query) use ($usersId,$myId){
            $query->where('from',$usersId)->where('to',$myId);
        })->paginate(20);
        return $messages;
    }
    public function setLocale($language){
        Session()->put('locale', $language);
        return redirect()->back();
    }
    public function newMessages(){
        $contacts = User::where('id', '!=', Sentinel::getUser()->id)->get();
        $unreadIds = AdminChat::select(DB::raw('`from` as sender_id, count(`from`) as messages_count'))
            ->where('to', Sentinel::getUser()->id)
            ->where('is_read', false)
            ->groupBy('from')
            ->get();
        $contacts = $contacts->map(function($contact) use ($unreadIds) {
            $contactUnread = $unreadIds->where('sender_id', $contact->id)->first();

            $contact->unread = $contactUnread ? $contactUnread->messages_count : 0;

            return $contact;
        });

        return $contacts;
    }
    public function getNotifications(){
        $id = Sentinel::getUser()->id;
        $user = User::find($id);
        $notifications = $user->unreadNotifications;
        $counter = count($notifications);
        return ['notifications'=>$notifications,'counter'=>$counter];
    }
    public function markAsReadNotifications(){
        $id = Sentinel::getUser()->id;
        $user = User::find($id);
        return $user->unreadNotifications->markAsRead();
    }
    public function todaysVisitors(){
        $seconds = 86400;
        $value = Cache::remember('visitor_counters', $seconds, function () {
            return DB::table('visitor_counters')->where('type','visitor')->whereDate('created_at',Carbon::today())->count();
        });
        return $value;
    }
    public function yesterdayVisitors(){
        $seconds = 86400;
        $value = Cache::remember('yesterday_visitors', $seconds, function () {
            return DB::table('visitor_counters')->where('type','visitor')->whereDate('created_at',Carbon::yesterday())->count();
        });
        return $value;
    }
    public function weeklyVisitors(){
        $seconds = 86400;
        $value = Cache::remember('weekly_visitors', $seconds, function () {
            return DB::table('visitor_counters')->whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])->count();
        });
        return $value;
    }
    public function lastWeeklyVisitors(){
        $seconds = 345600;
        $value = Cache::remember('last_weekly_visitors', $seconds, function () {
            $currentDate = \Carbon\Carbon::now();
            $agoDate = $currentDate->subDays($currentDate->dayOfWeek)->subWeek();
            $nowDate = $currentDate->subDays($currentDate->dayOfWeek + 1);
            return DB::table('visitor_counters')->whereBetween('created_at', [$agoDate,$nowDate])->count();
        });
        return $value;
    }
    public function monthlyVisitors(){
        $seconds = 864000;
        $value = Cache::remember('current_month_visitors', $seconds, function () {
            return DB::table('visitor_counters')->where('type','visitor')->whereMonth('created_at',Carbon::now()->month)->count();
        });
        return $value;
    }
    public function lastMonthVisitors(){
        $seconds = 2592000;
        $value = Cache::remember('last_month_visitors', $seconds, function () {
            return DB::table('visitor_counters')->where('type','visitor')->whereMonth('created_at', '=', Carbon::now()->subMonth()->month
            )->count();
        });
        return $value;

    }
    public function newRegistered(){
        $seconds = 86400;
        $value = Cache::remember('register_counters', $seconds, function () {
            return DB::table('visitor_counters')->where('type','register')->whereDate('created_at',Carbon::today())->count();
        });
        return $value;
    }
    public function yesterdayRegistered(){
        $seconds = 86400;
        $value = Cache::remember('yesterday_register_counters', $seconds, function () {
            return DB::table('visitor_counters')->where('type','register')->whereDate('created_at',Carbon::yesterday())->count();
        });
        return $value;
    }
    public function newlySubscribed(){
        $seconds = 86400;
        $value = Cache::remember('subscribed_counters', $seconds, function () {
            return DB::table('visitor_counters')->where('type','subscribed')->whereDate('created_at',Carbon::today())->count();
        });
        return $value;
    }
    public function yesterdaySubscribed(){
        $seconds = 86400;
        $value = Cache::remember('yesterday_subscribed_counters', $seconds, function () {
            return DB::table('visitor_counters')->where('type','subscribed')->whereDate('created_at',Carbon::yesterday())->count();
        });
        return $value;
    }
    public function newlySubscriptionCanceled(){
        $seconds = 86400;
        $value = Cache::remember('unsubscribed_counters', $seconds, function () {
            return DB::table('visitor_counters')->where('type','unsubscribed')->whereDate('created_at',Carbon::today())->count();
        });
        return $value;
    }
    public function yesterdaySubscriptionCanceled(){
        $seconds = 86400;
        $value = Cache::remember('yesterday_unsubscribed_counters', $seconds, function () {
            return DB::table('visitor_counters')->where('type','unsubscribed')->whereDate('created_at',Carbon::yesterday())->count();
        });
        return $value;
    }
    public function visitorMarkers(){
        $seconds = 86400;
        $value = Cache::remember('visitor_get', $seconds, function () {
            return DB::table('visitor_counters')->where('type','visitor')->whereDate('created_at',Carbon::today())->get();
        });
        return $value;
    }
    public function weeklyVisitorMarkers(){
        $seconds = 86400;
        $value = Cache::remember('weekly_visitor-markers', $seconds, function () {
            return DB::table('visitor_counters')->whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])->get();
        });
        return $value;
    }
    public function monthlyVisitorMarkers(){
        $seconds = 864000;
        $value = Cache::remember('current_month_visitor-markers', $seconds, function () {
            return DB::table('visitor_counters')->where('type','visitor')->whereMonth('created_at',Carbon::now()->month)->get();
        });
        return $value;
    }
    public function visitorsPagesList(){
        $seconds = 86400;
        $value = Cache::remember('most-visited-pages', $seconds, function () {
            return DB::table('visitor_counters')
                ->where('type','visitor')
                ->whereDate('created_at',Carbon::today())
                ->select('page_title',DB::raw("COUNT(page_title) as count"))
                ->groupBy('page_title')
                ->take(10)
                ->get();
        });
        return $value;
    }
    public function visitorsWeeklyPagesList(){
        $seconds = 86400;
        $value = Cache::remember('most-visited-pages-weekly', $seconds, function () {
            return DB::table('visitor_counters')
                ->where('type','visitor')
                ->whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])
                ->select('page_title',DB::raw("COUNT(page_title) as count"))
                ->groupBy('page_title')
                ->take(10)
                ->get();
        });
        return $value;
    }
    public function visitorsMonthlyPagesList(){
        $seconds = 86400;
        $value = Cache::remember('most-visited-pages-weekly', $seconds, function () {
            return DB::table('visitor_counters')
                ->where('type','visitor')
                ->whereMonth('created_at',Carbon::now()->month)
                ->select('page_title',DB::raw("COUNT(page_title) as count"))
                ->groupBy('page_title')
                ->take(10)
                ->get();
        });
        return $value;
    }
    public function mostVisitorCountry($id){
        if ($id==='today'){
            $seconds = 86400;
            $value = Cache::remember('most-visited-countries-today', $seconds, function () {
                return DB::table('visitor_counters')
                    ->where('type','visitor')
                    ->whereDate('created_at',Carbon::today())
                    ->select('country_code',DB::raw("COUNT(country_code) as count"))
                    ->groupBy('country_code')
                    ->take(10)
                    ->get();
            });
            return $value;
        }elseif ($id==='weekly'){
            $seconds = 86400;
            $value = Cache::remember('most-visited-countries-weekly', $seconds, function () {
                return DB::table('visitor_counters')
                    ->where('type','visitor')
                    ->whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])
                    ->select('country_code',DB::raw("COUNT(country_code) as count"))
                    ->groupBy('country_code')
                    ->take(10)
                    ->get();
            });
            return $value;
        }elseif ($id==='monthly'){
            $seconds = 86400;
            $value = Cache::remember('most-visited-country-weekly', $seconds, function () {
                return DB::table('visitor_counters')
                    ->where('type','visitor')
                    ->whereMonth('created_at',Carbon::now()->month)
                    ->select('country_code',DB::raw("COUNT(country_code) as count"))
                    ->groupBy('country_code')
                    ->take(10)
                    ->get();
            });
            return $value;
        }
    }
    public function subscriberMonthlist(){
        $seconds = 86400;
        $value = Cache::remember('subscribed_this_month', $seconds, function () {
            return DB::table('visitor_counters')
                ->where('type','subscribed')
                ->whereMonth('created_at',Carbon::now()->month)
                ->select(DB::raw('DATE(created_at) as date'), DB::raw('count(*) as views'))
                ->groupBy('date')
                ->get();
        });
        return $value;
    }
    public function enableTrustedBrowser($id){
        $user = Sentinel::getUser()->id;
        $u = User::find($user);
        if ($id === 'enable'){
            $u->browser = 1;
            $u->update();
            return redirect()->back()->with('success','Trusted browser enabled');
        }elseif ($id === 'disable'){
            $u->browser = 0;
            $u->update();
            return redirect()->back()->with('success','Trusted browser disabled');
        }

    }
    public function permissionCheck($permission){
        if (Sentinel::hasAnyAccess(['all', $permission])){
            return true;
        }else{
            return false;
        }
    }

    public function riderActivate($id)
    {
        $rider = Rider::find($id);
        $rider->deactivated = 1;
        $rider->update();
        return redirect()->back();
    }

    public function riderDeactivate($id){
        $rider = Rider::find($id);
        $rider->deactivated = 0;
        $rider->update();
        return redirect()->back();
    }

    public function riderSetVehicle(Request $request){
        $request->validate([
            "id"=>'required',
            "vehicle"=>'required'
        ]);
        $rider = Rider::find($request->id);
        $rider->vehicle_type = $request->vehicle;
        $rider->update();
        return redirect()->back();

    }

    public function couponsList()
    {
        $coupons = Coupons::where('used',0)->get();
        return Inertia::render('Coupons',['coupons'=>$coupons]);
    }

    public function couponsPost(Request $request)
    {
        $request->validate([
            'date'=>'required',
            'type'=>'required',
            'amount'=>'required'
        ]);
        $user = Subscriber::all();
        if(count($user)>0){
             foreach ($user as $u) {
            $code = $u->id.time();
            $device = UserDevices::where('user_id',$u->id)->get();
            Coupons::create([
                'user_id'=>$u->id,
                'type'=>$request->type,
                'code'=>$code,
                'expire_date'=>$request->date,
                'amount'=>$request->amount
            ]);
            foreach($device as $d){
                $response = Http::withHeaders([
                    'Accept'=> 'application/json',
                    'Accept-encoding'=> 'gzip, deflate',
                    'Content-Type'=> 'application/json',
                ])->post('https://exp.host/--/api/v2/push/send', [
                    'to'=> $d->token,
                    'sound'=> 'default',
                    'title'=> 'Got new coupon',
                    'body'=> 'You have got new coupon',
                ]);
            }

        }
        }
        return redirect()->back();
    }
}
