<?php

namespace App\Console\Commands;

use App\Events\AdminNotifications;
use App\Notifications\NewContactMailFteched;
use App\User;
use Illuminate\Console\Command;
use Webklex\IMAP\Facades\Client;
use DB;

class FetchMailCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'mail:fetch';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fetch admin mailbox in every 5 minutes';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $oClient = Client::account('default');
        $oClient->connect();
        $oFolder = $oClient->getFolder('INBOX');
        $oMessage = $oFolder->messages()->unseen()->count();
        if ($oMessage > 0){
            $users = User::all();
            $oMessage = $oFolder->messages()->unseen()->get();
            foreach ($oMessage as $a){
                foreach ($users as $user){
                    $user->notify(new NewContactMailFteched($a->getFrom()[0]->mail,$user->id));
                    $data = 'New Mail from '.$a->getFrom()[0]->mail;
                    $link = '/admins/mail';
                    event(new AdminNotifications($data,$link,$user->id));
                }
                DB::table('admin_mailbox')->insert(
                    [
                        'sender' => $a->getFrom()[0]->mail,
                        'subject' => $a->getSubject(),
                        'body' => $a->getHTMLBody(true),
                        'created_at' =>  \Carbon\Carbon::now(),
                        'updated_at' => \Carbon\Carbon::now(),
                        ]
                );
                $a->moveToFolder('INBOX.read');
            }
        }
    }
}
