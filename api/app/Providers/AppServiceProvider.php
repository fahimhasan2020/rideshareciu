<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Inertia\Inertia;
use Sentinel;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        Inertia::setRootView('admin.index');
        Inertia::share('errors',function(){
            return session()->get('errors') ? session()->get('errors')->getBag('default')->getMessages() :(object) [];
        });
        Inertia::share('success',function(){
            return session()->get('success') ? session()->get('success'):null;
        });
        Inertia::share('fault',function(){
            return session()->get('fault') ? session()->get('fault'):null;
        });

        // Multiple values
        Inertia::share([
            'locale' => function () {
                return app()->getLocale();
            },
            'language' => function () {
                return translations(
                    resource_path('lang/'. app()->getLocale() .'.json')
                );
            },
            // Synchronously
            'app' => [
                'name' => config('app.name'),
                'url'=>env('APP_URL')
            ],
            // Lazily
            'auth' => function () {
                return [
                    'user' => Sentinel::check() ? [
                        'id' => Sentinel::getUser()->id,
                        'email' => Sentinel::getUser()->email,
                        'first_name' => Sentinel::getUser()->first_name,
                        'last_name' => Sentinel::getUser()->last_name,
                        'phone_number' => Sentinel::getUser()->phone_number,
                        'bio' => Sentinel::getUser()->bio,
                        'profile_picture' => Sentinel::getUser()->profile_picture,
                        'facebook_link' => Sentinel::getUser()->facebook_link,
                        'twitter_link' => Sentinel::getUser()->twitter_link,
                        'likedin_link' => Sentinel::getUser()->likedin_link,
                        'browser' => Sentinel::getUser()->browser,
                    ] : null
                ];
            },
//            //permissions
//            'permission' => function() {
//
//            },
        ]);

    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
    }
}
