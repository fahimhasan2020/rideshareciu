<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class UserDevices extends Model
{
    protected $fillable = ['user_id','token'];
    protected $table = 'user_devices';
}
