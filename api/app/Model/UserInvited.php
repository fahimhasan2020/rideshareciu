<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class UserInvited extends Model
{
    protected $fillable = ['user_id'];
    protected $table = 'user_invited';
}
