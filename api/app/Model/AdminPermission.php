<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class AdminPermission extends Model
{
    protected $fillable = ['name', 'type', 'custom', 'active'];
    protected $table = 'admin_permissions';
}
