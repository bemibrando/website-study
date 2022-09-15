<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="stylesheet" href="{{ asset('css/style.css') }}">

    <title>{{ config('app.name') }} :: @yield('title')</title>
</head>
<body>
    <header class="logo-container">
        <img src="{{ asset('img/dice-icon.png') }}" alt="logo" class="logo"/>
    </header>

    <main>
        @yield('content')
    </main>

    <footer>
        <p>Client Register made with PHP & Laravel</p>
    </footer>
</body>
</html>