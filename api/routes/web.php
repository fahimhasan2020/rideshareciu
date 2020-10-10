<?php
Auth::routes();
Route::namespace('NonUsers')->group(function () {
    Route::get('/','VisitorViewController@index');
    Route::get('home', 'HomeController@index')->name('home');
    Route::resource('subscribe-email', 'NewsletterEmailController');
    Route::get('visitor/count','VisitorCounterController@visit');
    Route::get('app/share/{id}','VisitorViewController@appShare');
});
