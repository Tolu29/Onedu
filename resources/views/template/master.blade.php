<!DOCTYPE html5>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Onedu</title>
    <link rel="icon" href="/packages/assets/img/miscellaneous/favicon.ico">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css">
    <!-- Bootstrap core CSS -->
    <link href="/packages/libs/MDB/css/bootstrap.min.css" rel="stylesheet">
    <!-- Material Design Bootstrap -->
    <link href="/packages/libs/MDB/css/mdb.css" rel="stylesheet">
    <!-- Your custom styles (optional) -->
    <link href="/packages/libs/MDB/css/style.css" rel="stylesheet">
    @yield('css')
</head>

<body @yield('skin')>

    @yield('head')


    @yield('content')

    <!-- SCRIPTS -->
    <!-- JQuery -->
    <script type="text/javascript" src="/packages/libs/MDB/js/jquery-3.1.1.min.js"></script>
    <!-- Bootstrap tooltips -->
    <script type="text/javascript" src="/packages/libs/MDB/js/tether.js"></script>
    <!-- Bootstrap core JavaScript -->
    <script type="text/javascript" src="/packages/libs/MDB/js/bootstrap.min.js"></script>
    <!-- MDB core JavaScript -->
    <script type="text/javascript" src="/packages/libs/MDB/js/mdb.min.js"></script>
    <!-- sweetalert -->
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    @yield('js')
</body>

</html>
