<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Download our app</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
    .flex {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
          align-items: center;
  -webkit-box-pack: center;
          justify-content: center;
}

.app-btn {
  width: 45%;
  max-width: 160px;
  color: #fff;
  margin: 20px 10px;
  text-align: left;
  border-radius: 5px;
  text-decoration: none;
  font-family: "Lucida Grande", sans-serif;
  font-size: 10px;
  text-transform: uppercase;
}
.app-btn.blu {
  background-color: #101010;
  -webkit-transition: background-color 0.25s linear;
  transition: background-color 0.25s linear;
}
.app-btn.blu:hover {
  background-color: #454545;
}
.app-btn i {
  width: 20%;
  text-align: center;
  font-size: 28px;
  margin-right: 7px;
}
.app-btn .big-txt {
  font-size: 17px;
  text-transform: capitalize;
}

    </style>
</head>
<body>
<h1 style="text-align:center;color:blue;margin-top:200px">Download RideShare App from Apple or Play store</h1>
<div style="text-align:center">
<img src="{{asset('images/icon.png')}}" height="150px" width="150px" alt="">
</div>

<div class="flex social-btns">
  <a class="app-btn blu flex vert" href="http:apple.com">
    <i class="fa fa-apple"></i>
    <p>Available on the <br/> <span class="big-txt">App Store</span></p>
  </a>

  <a class="app-btn blu flex vert" href="http:google.com">
    <i class="fa fa-android"></i>
    <p>Get it on <br/> <span class="big-txt">Google Play</span></p>
  </a>
	
	<a class="app-btn blu flex vert" href="http:alphorm.com">
    <i class="fa fa-desktop"></i>
    <p>Application <br/> <span class="big-txt">Desktop</span></p>
  </a>
</div>


</body>
</html>