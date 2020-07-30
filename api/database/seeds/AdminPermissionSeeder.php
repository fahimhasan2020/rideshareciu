<?php

use Illuminate\Database\Seeder;


class AdminPermissionSeeder extends Seeder
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
                "id" => 1,
                "name" => "all",
                "type" => "single",
                "custom" => null,
            ],
            [
                "id" => 2,
                "name" => "admin",
                "type" => "custom",
                "custom" => "invite, update, deleteall, deletesome, deletefew, role.add, role.edit, role.delete, permission.add, permission.edit, permission.delete, holdall, holdsome, holdfew",

            ],
            [
                "id" => 3,
                "name" => "user",
                "type" => "custom",
                "custom" => "add, edit, delete, hold, suspend, msg",

            ],
            [
                "id" => 4,
                "name" => "affiliater",
                "type" => "custom",
                "custom" => "permit, hold, suspend, edit, delete, transfer.money, add.notice, send.message, send.email.offer, send.newsletters, support, set.rate",
            ],
            [
                "id" => 5,
                "name" => "mail",
                "type" => "custom",
                "custom" => "draft, index, trash, automate, compose, newsletter, support, service, edit.draft, delete.draft",
            ],
            [
                "id" => 6,
                "name" => "forum",
                "type" => "custom",
                "custom" => "add, edit, delete, hold, approve, pin, flag, category.add, category.edit, category.delete",
            ],
            [
                "id" => 7,
                "name" => "sms",
                "type" => "custom",
                "custom" => "add, edit, delete, compose, newsletter, service.msg, custom.offer",
            ],
            [
                "id" => 8,
                "name" => "marketing",
                "type" => "custom",
                "custom" => "social.site.reasource, forumsite.resource, linksite.resource, blogsite.resource",
            ],

        ];

        foreach ($items as $item) {
            \App\Model\AdminPermission::create($item);
        }
    }
}
