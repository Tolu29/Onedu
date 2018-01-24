<!DOCTYPE html5>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title></title>
    <link rel="icon" href="/packages/assets/img/miscellaneous/favicon.ico">

    <style media="screen">
    body{
      background-color: #eaeaea;
    }

    #confirm{
      border-radius: .23rem;
      background-color: #5172a1;
      color: #ffffff;
      width: 11rem;
      height: 3rem;
      border: 0;
      transition: .2s ease-out;
      color: #fff !important;
      margin: 6px;
      white-space: normal !important;
      word-wrap: break-word;
      line-height: 3rem;
    }

    #confirm>a {
      text-decoration: none;
    }

    .imgAdj{
      margin-top: 2rem;
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 10rem;
    }

    .welcome{
      text-align: center;
    }

    .contain{
      background-color: #fff;
      height: 30rem;
      margin-top: 2rem;
      margin-left: 2rem;
      margin-right: 2rem;
    }

    </style>

</head>

<body>

    <div class="container">
      <div class="row">
        <div class="col-md-12 contain">
          <img src="http://images.imagebam.com/a9/7d/d4/7a4240618326363.png" class="imgAdj" alt=""><br>

          <h2 class="welcome">Hola {{$name}}</h2><br>

          <p class="welcome">Parece que haz olvidado tu contraseña, para poder asignar una nueva contraseña a tu cuenta en ONEDU por favor presiona el siguiente botón</p>
          <p class="welcome">(Si no haz solicitado esto por favor solo ignora este correo)</p>

          <center><a href="https://www.onedu.com.mx/restart/{{$token}}"><div id="confirm" type="button" name="button">Cambiar contraseña</div></a></center>

        </div>
      </div>
    </div>


</body>

</html>
