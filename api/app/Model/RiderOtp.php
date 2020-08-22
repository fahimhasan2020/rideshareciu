<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class RiderOtp extends Model
{
    protected $fillable = ['user_id','otp'];
    protected $table = "rider_otp";
}
