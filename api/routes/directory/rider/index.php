<?php
Route::get('/','RiderController@index')->name('rider');
Route::post('/login','RiderAuthentication@login')->name('post-login');
Route::post('/register','RiderAuthentication@register')->name('post-register');
