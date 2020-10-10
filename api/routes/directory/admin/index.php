<?php
/*Basic auth pages*/
include('authentications.php');
/*Basic auth pages*/
/*Home pages*/
Route::get('/dashboard','HomeController@dashboard')->name('dashboard');
/*statistics*/
include ('statistics.php');
/*statistics*/
/*profile*/
include('profile.php');
/*profile*/
/*Localiation*/
Route::get('/language/{language}','HomeController@setLocale')->name('language');
/*Localiation*/
/*Permissions*/
Route::resource('admin-permission', 'AdminPermissionController');
Route::delete('/admin-permission/multiple/{id}', 'AdminPermissionController@multipleDelete')->name('admin-permission.multiple.delete');
Route::post('/admin-permission/delete-all', 'AdminPermissionController@allDelete')->name('admin-permission.all.delete');
Route::get('/admin-permission/pdf/export','AdminPermissionController@pdfExport')->name('admin-permission.pdf.export');
Route::get('/admin-permission/excel/export','AdminPermissionController@excelExport')->name('admin-permission.excel.export');
Route::get('/admin-permission/csv/export','AdminPermissionController@csvExport')->name('admin-permission.csv.export');
Route::get('/admin-permission/print/export','AdminPermissionController@printExport')->name('admin-permission.print.export');
Route::post('/admin-permission/excel/import','AdminPermissionController@fileImported')->name('admin-permission.excel.imported');
/*Permissions*/

/*Roles*/
Route::resource('admin-roles', 'AdminRolesController');
Route::delete('/admin-roles/multiple/{id}', 'AdminRolesController@multipleDelete')->name('admin-roles.multiple.delete');
Route::post('/admin-roles/delete-all', 'AdminRolesController@allDelete')->name('admin-roles.all.delete');
Route::get('/admin-roles/pdf/export','AdminRolesController@pdfExport')->name('admin-roles.pdf.export');
Route::get('/admin-roles/excel/export','AdminRolesController@excelExport')->name('admin-roles.excel.export');
Route::get('/admin-roles/csv/export','AdminRolesController@csvExport')->name('admin-roles.csv.export');
Route::get('/admin-roles/print/export','AdminRolesController@printExport')->name('admin-roles.print.export');
Route::post('/admin-roles/excel/import','AdminRolesController@fileImported')->name('admin-roles.excel.imported');
/*Roles*/

/*Admins*/
Route::get('/admin','HomeController@adminList')->name('admin.list');
Route::resource('admin-resource', 'AdminResourceController');
Route::get('admin-resource-hold', 'AdminResourceController@indexHold');
Route::post('login/others', 'AdminResourceController@loginAsOthers');
Route::delete('hold/admin/{id}', 'AdminResourceController@holdOtherAdmin')->name('admin-hold');
Route::delete('unhold/admin/{id}', 'AdminResourceController@unholdOtherAdmin')->name('admin-unhold');
Route::delete('suspend/admin/{id}', 'AdminResourceController@suspendOtherAdmin')->name('admin-suspend');
Route::post('/admin-resource/invite/admin', 'AdminResourceController@invite')->name('admin-resource.invite');
Route::post('/admin-resource/invite/accept', 'AdminResourceController@inviteResponse')->name('admin-resource.invite-accept');
/*Admins*/
/*Users*/
Route::get('/user','HomeController@userList')->name('user.list');
/*Users*/

/*Riders*/
Route::get('/rider','HomeController@riderList')->name('rider.list');
Route::get('/rider/activate/{id}','HomeController@riderActivate')->name('rider.activate');
Route::get('/rider/deactivate/{id}','HomeController@riderDeactivate')->name('rider.deactivate');
Route::post('/rider/set/vehicle','HomeController@riderSetVehicle')->name('rider.setVehicle');
/*Riders*/

/*Coupons*/
Route::get('/coupons','HomeController@couponsList')->name('coupons.list');
Route::post('/coupons','HomeController@couponsPost')->name('coupons.post');
/*Coupons*/

/*Mailbox*/
Route::resource('mail', 'MailboxController');
Route::get('email/compose','MailboxController@compose')->name('mail.compose');
Route::get('email/trashed','MailboxController@trashed')->name('mail.trash');
Route::get('email/spam','MailboxController@spam')->name('mail.spam');
Route::get('email/draft','MailboxController@draft')->name('mail.draft');
Route::get('email/sent','MailboxController@sent')->name('mail.sent');
Route::get('email/support','MailboxController@support')->name('mail.support');
Route::get('email/contact','MailboxController@contact')->name('mail.contact');
/*Mailbox*/

