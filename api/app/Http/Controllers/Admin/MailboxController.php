<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Mail\CustomInfoMail;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Mail;
use DB;


class MailboxController extends Controller
{
    public function  __construct()
    {
        $this->middleware('admin');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $newMails = DB::table('admin_mailbox')->where('type','inbox')->paginate(10);
        return Inertia::render('Mail/Inbox',['mails'=>$newMails]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $request->validate(['to'=>'required','message'=>'required|max:255']);
        try {
            $mail = Mail::to($request->to);
            if ($request->cc != '' || $request->cc != null){
                $mail->cc($request->cc);
            }
            if ($request->bcc != '' || $request->bcc != null){
                $mail->bcc($request->bcc);
            }
            $mail->queue(new CustomInfoMail($request->message,$request->subject));
            return  redirect()->back()->with('success','Mail sent');
        }catch (\Exception $e){
            return  redirect()->back()->with('fault','Mail not sent');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Inertia\Response
     */
    public function show($id)
    {
        $mail = DB::table('admin_mailbox')->where('id',$id)->first();
        return  Inertia::render('Mail/SingleInfoMail',['mail'=>$mail]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * trash list.
     *
     * @return \Inertia\Response
     */
    public function trashed(){
        return Inertia::render('Mail/Trash');
    }

    public function sent(){
        return Inertia::render('Mail/Sent');
    }

    public function draft(){
        return Inertia::render('Mail/Draft');
    }

    /**
     * trash list.
     *
     * @return \Inertia\Response
     */
    public function spam(){
        return Inertia::render('Mail/Spam');
    }

    /**
     * trash list.
     *
     * @return \Inertia\Response
     */
    public function support(){
        return Inertia::render('Mail/Support');
    }

    /**
     * trash list.
     *
     * @return \Inertia\Response
     */
    public function contact(){
        return Inertia::render('Mail/Contacts');
    }

    public function  compose(){
        return Inertia::render('Mail/Compose');
    }
}
