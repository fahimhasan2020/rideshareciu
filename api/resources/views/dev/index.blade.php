@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Developer Panel</div>

                    <div class="card-body">
                        @if (session('success'))
                            <div class="alert alert-success" role="alert">
                                {{ session('success') }}
                            </div>
                        @endif
                        <h1 class="text-capitalize text-center text-primary">Optimizations</h1>
                            <div class="d-block">
                                <div class="m-2 float-lg-left float-md-left"><form action="{{route('dev.down')}}" method="post">@csrf<button type="submit" class="btn btn-primary">Down</button></form></div>
                                <div class="m-2 float-lg-left float-md-left"><form action="{{route('dev.cache-clear')}}" method="post">@csrf<button type="submit" class="btn btn-danger">Cache clear</button></form></div>
                                <div class="m-2 float-lg-left float-md-left"><form action="{{route('dev.config-cache')}}" method="post">@csrf<button type="submit" class="btn btn-primary">Config Cache</button></form></div>
                                <div class="m-2 float-lg-left float-md-left"><form action="{{route('dev.config-clear')}}" method="post">@csrf<button type="submit" class="btn btn-danger">Config Clear</button></form></div>
                                <div class="m-2 float-lg-left float-md-left"><form action="{{route('dev.route-cache')}}" method="post">@csrf<button type="submit" class="btn btn-primary">Route Cache</button></form></div>
                                <div class="m-2 float-lg-left float-md-left"><form action="{{route('dev.route-clear')}}" method="post">@csrf<button type="submit" class="btn btn-danger">Route Clear</button></form></div>
                                <div class="m-2 float-lg-left float-md-left"><form action="{{route('dev.view-cache')}}" method="post">@csrf<button type="submit" class="btn btn-primary">View Cache</button></form></div>
                                <div class="m-2 float-lg-left float-md-left"><form action="{{route('dev.view-clear')}}" method="post">@csrf<button type="submit" class="btn btn-danger">View Clear</button></form></div>
                                <div class="m-2 float-lg-left float-md-left"><form action="{{route('dev.optimize')}}" method="post">@csrf<button type="submit" class="btn btn-primary">Optimize</button></form></div>
                                <div class="m-2 float-lg-left float-md-left"><form action="{{route('dev.optimize-clear')}}" method="post">@csrf<button type="submit" class="btn btn-danger">Optimize Clear</button></form></div>
                                <div class="m-2 float-lg-left float-md-left"><form action="{{route('dev.debugbar-clear')}}" method="post">@csrf<button type="submit" class="btn btn-danger">Debugbar Clear</button></form></div>
                            </div>
                    </div>
                </div>
            </div>
            <div class="col-md-8 mt-3">
                <div class="card">
                    <div class="card-header">Migration</div>

                    <div class="card-body">
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
                        <div class="d-block">
                            <div class="m-2 float-lg-left float-md-left"><form action="{{route('dev.migrate-fresh')}}" method="post">@csrf<button type="submit" class="btn btn-primary">Migrate</button></form></div>
                            <div class="m-2 float-lg-left float-md-left"><form action="{{route('dev.migrate-seed')}}" method="post">@csrf<button type="submit" class="btn btn-danger">Migrate seed</button></form></div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
