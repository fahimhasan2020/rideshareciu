<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class KnownBrowser extends Model
{
    protected $fillable = ['user_id','browser','os','verified','otp'];
    protected $table = 'known_browser';
}
