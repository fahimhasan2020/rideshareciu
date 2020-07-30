<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $fillable = ['id','name','slug','permissions'];
    protected $table = 'roles';
    protected $appends = ['custom_permission'];

    /**
     * Get the administrator flag for the user.
     *
     * @return array
     */
    public function getCustomPermissionAttribute()
    {
        $permissions = json_decode($this->permissions,true);
        $getArray = array_keys($permissions,true);
        return $getArray;
    }


}
