<?php

namespace App\Imports;

use App\Model\AdminPermission;
use Maatwebsite\Excel\Concerns\ToModel;

class AdminPermissionImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new AdminPermission([
            'name'     => $row[1],
            'type'    => $row[2],
            'custom' => $row[3],
        ]);
    }
}
