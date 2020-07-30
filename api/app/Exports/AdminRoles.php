<?php

namespace App\Exports;

use App\Model\Role;
use Maatwebsite\Excel\Concerns\FromCollection;

class AdminRoles implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Role::all();
    }
}
