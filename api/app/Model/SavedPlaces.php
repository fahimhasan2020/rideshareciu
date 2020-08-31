<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class SavedPlaces extends Model
{
    protected $fillable = ['name','formatted_address','user_id','lat','lng'];
    protected $table = 'saved_places';
}
