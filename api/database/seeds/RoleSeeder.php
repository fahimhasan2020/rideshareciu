<?php

use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
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
                "id" => 1,"slug" => "developper","name" => "Developper", "permissions" => '{"all":true}',
     ],
     [
         "id" => 2,"slug" => "super_user","name" => "Super User","permissions" => '{"admin.invite":true,"admin.update":true,"admin.deleteall":true,"admin.role.add":true,"admin.role.edit":true,"admin.role.delete":true,"admin.holdall":true,"user.add":true,"user.edit":true,"user.delete":true,"user.hold":true,"user.suspend":true,"user.msg":true,"affiliater.permit":true,"affiliater.hold":true,"affiliater.suspend":true,"affiliater.edit":true,"affiliater.delete":true,"affiliater.transfer.money":true,"affiliater.add.notice":true,"affiliater.send.message":true,"affiliater.send.email.offer":true,"affiliater.send.newsletters":true,"affiliater.support":true,"affiliater.set.rate":true,"mail.draft":true,"mail.index":true,"mail.trash":true,"mail.automate":true,"mail.compose":true,"mail.newsletter":true,"mail.support":true,"mail.service":true,"mail.edit.draft":true,"mail.delete.draft":true,"forum.add":true,"forum.edit":true,"forum.delete":true,"forum.hold":true,"forum.approve":true,"forum.pin":true,"forum.flag":true,"forum.category.add":true,"forum.category.edit":true,"forum.category.delete":true,"sms.add":true,"sms.edit":true,"sms.delete":true,"sms.compose":true,"sms.newsletter":true,"sms.service.msg":true,"sms.custom.offer":true,"marketing.social.site.reasource":true,"marketing.forumsite.resource":true,"marketing.linksite.resource":true,"marketing.blogsite.resource":true}'],
     [
         "id" => 3,"slug" => "manager","name" => "Manager","permissions" => '{"admin.invite":true,"admin.update":true,"admin.deletesome":true,"admin.role.add":true,"admin.role.edit":true,"admin.role.delete":true,"admin.holdsome":true,"user.add":true,"user.edit":true,"user.delete":true,"user.hold":true,"user.suspend":true,"user.msg":true,"affiliater.permit":true,"affiliater.hold":true,"affiliater.suspend":true,"affiliater.edit":true,"affiliater.delete":true,"affiliater.transfer.money":true,"affiliater.add.notice":true,"affiliater.send.message":true,"affiliater.send.email.offer":true,"affiliater.send.newsletters":true,"affiliater.support":true,"affiliater.set.rate":true,"mail.draft":true,"mail.index":true,"mail.trash":true,"mail.automate":true,"mail.compose":true,"mail.newsletter":true,"mail.support":true,"mail.service":true,"mail.edit.draft":true,"mail.delete.draft":true,"forum.add":true,"forum.edit":true,"forum.delete":true,"forum.hold":true,"forum.approve":true,"forum.pin":true,"forum.flag":true,"forum.category.add":true,"forum.category.edit":true,"forum.category.delete":true,"sms.add":true,"sms.edit":true,"sms.delete":true,"sms.compose":true,"sms.newsletter":true,"sms.service.msg":true,"sms.custom.offer":true,"marketing.social.site.reasource":true,"marketing.forumsite.resource":true,"marketing.linksite.resource":true,"marketing.blogsite.resource":true}',
     ],
     [
         "id" => 4,
         "slug" => "admin",
         "name" => "admin",
         "permissions" => '{"admin.invite":true,"admin.update":true,"admin.deletefew":true,"admin.role.add":true,"admin.role.edit":true,"admin.role.delete":true,"admin.holdfew":true,"user.add":true,"user.edit":true,"user.delete":true,"user.hold":true,"user.suspend":true,"user.msg":true,"affiliater.permit":true,"affiliater.hold":true,"affiliater.suspend":true,"affiliater.edit":true,"affiliater.delete":true,"affiliater.transfer.money":true,"affiliater.add.notice":true,"affiliater.send.message":true,"affiliater.send.email.offer":true,"affiliater.send.newsletters":true,"affiliater.support":true,"affiliater.set.rate":true,"mail.draft":true,"mail.index":true,"mail.trash":true,"mail.automate":true,"mail.compose":true,"mail.newsletter":true,"mail.support":true,"mail.service":true,"mail.edit.draft":true,"mail.delete.draft":true,"forum.add":true,"forum.edit":true,"forum.delete":true,"forum.hold":true,"forum.approve":true,"forum.pin":true,"forum.flag":true,"forum.category.add":true,"forum.category.edit":true,"forum.category.delete":true,"sms.add":true,"sms.edit":true,"sms.delete":true,"sms.compose":true,"sms.newsletter":true,"sms.service.msg":true,"sms.custom.offer":true,"marketing.social.site.reasource":true,"marketing.forumsite.resource":true,"marketing.linksite.resource":true,"marketing.blogsite.resource":true}',

     ],
     [
         "id" => 5,
         "slug" => "blog_manager",
         "name" => "Blog Manager",
         "permissions" => '{"forum.add":true,"forum.edit":true,"forum.delete":true,"forum.hold":true,"forum.approve":true,"forum.pin":true,"forum.flag":true,"forum.category.add":true,"forum.category.edit":true,"forum.category.delete":true}',
     ],
     [
         "id" => 6,"slug" => "affiliate_manager","name" => "Affiliate Manager",
         "permissions" => '{"affiliater.permit":true,"affiliater.hold":true,"affiliater.suspend":true,"affiliater.edit":true,"affiliater.delete":true,"affiliater.transfer.money":true,"affiliater.add.notice":true,"affiliater.send.message":true,"affiliater.send.email.offer":true,"affiliater.send.newsletters":true,"affiliater.support":true,"affiliater.set.rate":true}',
     ],
     [
         "id" => 7,
         "slug" => "support",
         "name" => "Support",
         "permissions" => '{"user.add":true,"user.edit":true,"user.delete":true,"user.hold":true,"user.suspend":true,"user.msg":true}',
     ],
     [
         "id" => 8,"slug" => "marketing","name" => "Marketing",
         "permissions" => '{"mail.draft":true,"mail.index":true,"mail.trash":true,"mail.automate":true,"mail.compose":true,"mail.newsletter":true,"mail.support":true,"mail.service":true,"mail.edit.draft":true,"mail.delete.draft":true,"sms.add":true,"sms.edit":true,"sms.delete":true,"sms.compose":true,"sms.newsletter":true,"sms.service.msg":true,"sms.custom.offer":true,"marketing.social.site.reasource":true,"marketing.forumsite.resource":true,"marketing.linksite.resource":true,"marketing.blogsite.resource":true}',
     ],

        ];

        foreach ($items as $item) {
            \App\Model\Role::create($item);
        }
    }
}
