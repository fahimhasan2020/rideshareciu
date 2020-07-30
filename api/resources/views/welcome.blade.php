<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet" href="{{asset('css/app.css')}}">
        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Login</a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}">Register</a>
                        @endif
                    @endauth
                        <a href="{{ route('admin.admin') }}">Admin Panel</a>
                        <a href="{{ route('user.user') }}">User Panel</a>
                        <a href="{{ route('dev.dev') }}">Dev Panel</a>
                </div>
            @endif

            <div class="content">
                <div class="title m-b-md">
                    Subscribe for newsletter
                </div>

                <div class="links">
                    @error('email')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                    @if (session('success'))
                        <div class="alert alert-success" role="alert">
                            {{ session('success') }}
                        </div>
                    @endif
                    @if (session('fault'))
                            <div class="alert alert-danger" role="alert">
                                {{ session('fault') }}
                            </div>
                        @endif
                    <form action="{{url('subscribe-email')}}" method="post">
                        @csrf
                        <div class="form-group">
                            <input type="email" name="email" placeholder="enter your email id" class="form-control" required="">
                        </div>
                        <button type="submit" class="btn btn-block btn-danger">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </body>
</html>
