<!DOCTYPE html>
<html lang="en">
    <head>
        <base href="/">
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <!-- 1. Load libraries -->
        <!-- Polyfill(s) for older browsers -->
        <script type="text/javascript" src="core-js/client/shim.min.js"></script>
        <script type="text/javascript" src="zone.js/dist/zone.js"></script>
        <script type="text/javascript" src="reflect-metadata/Reflect.js"></script>
        <script type="text/javascript" src="systemjs/dist/system.src.js"></script>
        <script type="text/javascript" src="systemjs.config.js"></script>
        <script>
            System.import('app').catch(function(err){ console.error(err); });
        </script>
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Raleway', sans-serif;
                font-weight: 100;
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
                font-size: 12px;
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
        <my-app>Loading the Application...</my-app>
    </body>
</html>
