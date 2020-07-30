<?php

namespace App\Jobs;

use App\Mail\TrustedBrowser;
use App\Model\KnownBrowser;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Mail;
use SoapClient;

class UnknownBrowser implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    private $user;
    private $browser;
    private $os;
    private $type;
    private $email;
    private $phoneNumber;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($user,$browser,$os,$type,$email,$phoneNumber)
    {
        $this->user = $user;
        $this->browser = $browser;
        $this->os = $os;
        $this->type = $type;
        $this->email = $email;
        $this->phoneNumber = $phoneNumber;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $number = rand(256984,999999);
        if ($this->type === 'email'){
            KnownBrowser::create(['user_id'=>$this->user,'os'=>$this->os,'browser'=>$this->browser,'otp'=>$number]);
            Mail::to($this->email)->send(new TrustedBrowser($number));
        }
        else if($this->type === 'phone') {
            KnownBrowser::create(['user_id'=>$this->user,'os'=>$this->os,'browser'=>$this->browser,'otp'=>$number]);
            $message = 'Your OTP code is ' . $number;
            try {
                $soapClient = new SoapClient("https://api2.onnorokomSMS.com/sendSMS.asmx?wsdl");
                $paramArray = array(
                    'apiKey' => "8ff519ad-2eda-4482-aaa3-30c5bbe8db59",
                    'messageText' => $message,
                    'numberList' => $this->phoneNumber,
                    'smsType' => "TEXT",
                    'maskName' => '',
                    'campaignName' => '',
                );
                $value = $soapClient->__call("NumberSms", array($paramArray));
            } catch (Exception $e) {
                //
            }
        }
    }
}
