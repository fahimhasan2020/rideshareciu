<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Pole extends Model
{
    protected $fillable = ['rider_id','total_rent','starting_cordinate','completed','ending_cordinate'];
    protected $table = 'pole';
}
