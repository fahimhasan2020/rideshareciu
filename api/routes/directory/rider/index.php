<?php
Route::get('/','RiderController@index')->name('rider');
Route::post('/login','RiderAuthentication@login')->name('post-login');
Route::post('/register','RiderAuthentication@register')->name('post-register');
Route::post('/verify/otp','RiderAuthentication@verifyOtp')->name('post-verify-otp');
Route::post('get/info','HomeController@getInfo')->name('getinfo');
Route::post('update/dp','HomeController@updateDp')->name('update-dp');
Route::post('save/info','HomeController@saveInfo')->name('saveInfo');
Route::post('location/update','HomeController@locationUpdate')->name('update-location');
Route::post('/reset/password/otp','RiderAuthentication@verifyUserOtp')->name('post-verify-user-otp');
Route::post('reset/password/string','RiderAuthentication@resetPasswordString')->name('post-reset-user-password');
Route::post('find/user','HomeController@findUser')->name('find-user');
Route::post('/find/ride','HomeController@findRide')->name('find-ride');
Route::post('/find/pole','HomeController@findPole')->name('find-pole');
Route::post('/complete/ride','HomeController@completeRide')->name('complete-ride');
Route::post('/complete/pole','HomeController@completePole')->name('complete-pole');
Route::post('/cancel/ride','HomeController@cancelRide')->name('cancel-ride');
Route::post('/cancel/pole','HomeController@cancelPole')->name('cancel-pole');
Route::post('/all/pole','HomeController@allPole')->name('all-pole');
Route::post('/all/ride','HomeController@allRide')->name('all-ride');


