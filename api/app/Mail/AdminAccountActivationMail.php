<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class AdminAccountActivationMail extends Mailable
{
    use Queueable, SerializesModels;
    public $email;
    public $url;
    public $password;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($email,$url,$password)
    {
        $this->email = $email;
        $this->password = $password;
        $this->url = $url;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('admin.mailes.admin-activation',[
            'email'=>$this->email,
            'password'=>$this->password,
            'url'=>$this->url
        ]);
    }
}
