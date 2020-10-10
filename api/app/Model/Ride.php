<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Ride extends Model
{
    protected $fillable = ['id','user_id','rider_id','starting_cordinate','ending_cordinate','rent','ratings','completed'];
    protected $table = 'ride';
}
