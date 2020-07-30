<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class AdminChat extends Model
{
    protected $fillable = ['id','from','to','message','is_read'];
    protected $table = 'admin_chat';
}
