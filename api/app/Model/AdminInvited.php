<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class AdminInvited extends Model
{
    protected $table = 'admin_invited';
    protected $fillable = ['id','email','slug'];
}
