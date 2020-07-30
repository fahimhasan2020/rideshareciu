<?php

namespace App\Jobs;

use App\Mail\AdminAccountActivationMail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\URL;
use Mail;

class AdminAccountActivation implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    private $email;
    private $code;
    private $password;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($email,$code,$password)
    {
        $this->email = $email;
        $this->code = $code;
        $this->password = $password;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $url = URL::signedRoute('admin.get-activate', ['email' => $this->email,'code'=>$this->code]);
        Mail::to($this->email)->send(new AdminAccountActivationMail($this->email,$url,$this->password));
    }
}
