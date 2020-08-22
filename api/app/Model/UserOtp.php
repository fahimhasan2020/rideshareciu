<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class UserOtp extends Model
{
    protected $fillable = ['user_id','otp'];
    protected $table = 'user_otp';
}
