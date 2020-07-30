<?php

use Illuminate\Database\Seeder;
use Cartalyst\Sentinel\Laravel\Facades\Sentinel;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            [
                "first_name"=>"Fahim","last_name"=>"Hasan","email" =>'fahim@bizbrainers.com',"password"=>'FahimHasan26!'
            ],
            [
                "first_name"=>"Amena","last_name"=>"Begum","email" =>'fahimhasan202020@gmail.com',"password"=>'FahimHasan26!'
            ],
            [
                "first_name"=>"Sokina","last_name"=>"Begum","email" =>'dreamtechnology2050@gmail.com',"password"=>'FahimHasan26!'
            ]

        ];

        foreach ($items as $item) {
          $user = Sentinel::registerAndActivate($item);
          $role = Sentinel::findRoleBySlug('developper');
          $role->users()->attach($user);
        }
    }
}
