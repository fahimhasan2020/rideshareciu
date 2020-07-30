<?php

namespace App\Jobs;


use App\Mail\AdminResetPasswordMail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\URL;
use Mail;

class AdminResetPassword implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    private $user;
    private $code;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($user,$code)
    {
        $this->user = $user;
        $this->code = $code;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $url = URL::temporarySignedRoute(
            'admin.reset', now()->addMinutes(30), ['email' => $this->user,'code'=>$this->code]
        );
        Mail::to($this->user)->send(new AdminResetPasswordMail($url));
    }
}
