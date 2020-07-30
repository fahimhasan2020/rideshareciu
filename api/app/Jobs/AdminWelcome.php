<?php

namespace App\Jobs;

use App\Mail\AdminInvitationMail;
use App\Model\AdminInvited;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Mail;
use \Illuminate\Support\Facades\URL;

class AdminWelcome implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    private $email;
    private $slug;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($email,$slug)
    {
        $this->email = $email;
        $this->slug = $slug;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $slug = implode(" ",$this->slug);
        $createInvitation = AdminInvited::create([
            'email'=>$this->email,
            'slug'=>$slug
        ]);
        $url = URL::temporarySignedRoute(
            'admin.register', now()->addHours(24), ['id' => encrypt($createInvitation->id)]
        );
        Mail::to($this->email)->send(new AdminInvitationMail($url));
    }
}
