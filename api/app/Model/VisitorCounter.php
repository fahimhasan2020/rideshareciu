<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class VisitorCounter extends Model
{
    protected $table = 'visitor_counters';
    protected $fillable = ['id','ip','lat','lng','type','country_code','page_title','token'];
}
