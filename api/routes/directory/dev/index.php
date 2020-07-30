<?php
Route::get('/','DevController@index')->name('dev');
/*Artisan Calls*/
/*Optimization*/
Route::get('up','DevController@up')->name('up');
Route::post('down','DevController@down')->name('down');
Route::post('cache/clear','DevController@cacheClear')->name('cache-clear');
Route::post('config/cache','DevController@configCache')->name('config-cache');
Route::post('config/clear','DevController@configClear')->name('config-clear');
Route::post('route/cache','DevController@routeCache')->name('route-cache');
Route::post('route/clear','DevController@routeClear')->name('route-clear');
Route::post('view/cache','DevController@viewCache')->name('view-cache');
Route::post('view/clear','DevController@viewClear')->name('view-clear');
Route::post('optimize','DevController@optimize')->name('optimize');
Route::post('optimize/clear','DevController@optimizeClear')->name('optimize-clear');
Route::post('debugbar/clear','DevController@debugbarClear')->name('debugbar-clear');
/*End Optimization*/
/*Migration*/
Route::post('migrate/fresh','DevController@migrateFresh')->name('migrate-fresh');
Route::post('migrate/seed','DevController@migrateSeed')->name('migrate-seed');
/*End migration*/


/*End Artisan Calls*/
