<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Coupons extends Model
{
    protected $fillable = ['user_id','type','code','used','expire_date','amount'];
    protected $table = 'coupons';
}
