<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class VerifyOtp extends Model
{
    protected $fillable = ['id','user_id','type','email','phone_number','verification_code','verified'];
    protected $table = 'admin_contact_verification';
}
