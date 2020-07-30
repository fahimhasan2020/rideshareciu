<?php

namespace App\Exports;

use App\Model\AdminPermission;
use Maatwebsite\Excel\Concerns\FromCollection;

class AdminPermissionExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return AdminPermission::all();
    }
}
