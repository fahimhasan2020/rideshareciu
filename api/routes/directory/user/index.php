<?php
Route::get('/','UserController@index')->name('user');
Route::post('/login','UserAuthenticationController@login')->name('post-login');
Route::post('/register','UserAuthenticationController@register')->name('post-register');
Route::post('/verify/otp','UserAuthenticationController@verifyOtp')->name('post-verify-otp');
Route::post('/reset/password/otp','UserAuthenticationController@verifyUserOtp')->name('post-verify-user-otp');
Route::post('reset/password/string','UserAuthenticationController@resetPasswordString')->name('post-reset-user-password');