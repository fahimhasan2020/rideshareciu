<?php

namespace App\Jobs;

use App\Mail\VerifyOtpMail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Mail;
use DB;
use SoapClient;

class VerifyOtp implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    private $contact;
    private $type;
    private $user;
    private $email;
    private $phone;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($contact,$type,$user,$email,$phone)
    {
        $this->contact = $contact;
        $this->type = $type;
        $this->user = $user;
        $this->email = $email;
        $this->phone = $phone;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    
    public function handle()
    {
        $number = rand(256984,999999);
        if ($this->type === 'phone'){
               \App\Model\VerifyOtp::create(['user_id'=>$this->user,'type'=>'phone','phone_number'=>$this->contact,'verification_code'=>$number]);
                Mail::to($this->email)->send(new VerifyOtpMail($number));

        }else if($this->type === 'email'){
            \App\Model\VerifyOtp::create(['user_id'=>$this->user,'type'=>'email','email'=>$this->contact,'verification_code'=>$number]);
            $message = 'Your OTP code is '.$number;
            try{
                $soapClient = new SoapClient("https://api2.onnorokomSMS.com/sendSMS.asmx?wsdl");
                $paramArray = array(
                    'apiKey' => "e137e9a0-0b65-41b0-b076-64b2efcc49ef",
                    'messageText' => $message,
                    'numberList' => $this->phone,
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
