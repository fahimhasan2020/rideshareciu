<?php
Route::get('/','RiderController@index')->name('rider');
Route::post('/login','RiderAuthentication@login')->name('post-login');
Route::post('/register','RiderAuthentication@register')->name('post-register');
Route::post('/verify/otp','RiderAuthentication@verifyOtp')->name('post-verify-otp');

Route::post('/reset/password/otp','RiderAuthentication@verifyUserOtp')->name('post-verify-user-otp');
Route::post('reset/password/string','RiderAuthentication@resetPasswordString')->name('post-reset-user-password');
