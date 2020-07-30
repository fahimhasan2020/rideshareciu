<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="{{asset('admin/assets/images/favicon.ico')}}">
    <link rel="stylesheet" href="{{mix('admin/admin.css')}}">

    <!-- HTML5 Shiv and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
    <script src="{{asset('admin/assets/js/modernizr.min.js')}}"></script>
    <script>
        var resizefunc = [];
    </script>
    <!-- jQuery  -->
    <script src="{{asset('admin/assets/js/jquery.min.js')}}"></script>
    <script src="{{asset('admin/assets/js/bootstrap.min.js')}}"></script>
    <script src="{{asset('admin/assets/js/detect.js')}}"></script>
    <script src="{{asset('admin/assets/js/fastclick.js')}}"></script>
    <script src="{{asset('admin/assets/js/jquery.blockUI.js')}}"></script>
    <script src="{{asset('admin/assets/js/waves.js')}}"></script>
    <script src="{{asset('admin/assets/js/jquery.slimscroll.js')}}"></script>
    <script src="{{asset('admin/assets/js/jquery.scrollTo.min.js')}}"></script>
    <script src="{{asset('admin/plugins/switchery/switchery.min.js')}}"></script>
    <!-- Counter js  -->
    <script src="{{asset('admin/plugins/waypoints/jquery.waypoints.min.js')}}"></script>
    <script src="{{asset('admin/plugins/counterup/jquery.counterup.min.js')}}"></script>
    <!--Morris Chart-->
    <script src="{{asset('admin/plugins/morris/morris.min.js')}}"></script>
    <script src="{{asset('admin/plugins/raphael/raphael-min.js')}}"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBnRbei5qlHVY9e6OUJvesEpPTeX1pql8E"
            async defer></script>
    <script src="{{ mix('admin/admin.js') }}" defer></script>
</head>
<body style="background-color: #eee;">

@inertia
</body>
</html>
