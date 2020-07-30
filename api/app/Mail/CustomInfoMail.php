<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class CustomInfoMail extends Mailable
{
    use Queueable, SerializesModels;
    public $contents;
    public $subject;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($contents,$subject)
    {
        $this->contents = $contents;
        $this->subject = $subject;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject($this->subject)
        ->view('vendor.maileclipse.templates.basicinfomail',[ 'contents'=>$this->contents]);
    }
}
