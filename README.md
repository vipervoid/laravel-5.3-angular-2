# Laravel 5.3 + AngularJS 2 

This is a Laravel 5.3 with AngularJS 2 setup.

The Heroes tour tutorials from AngularJS docs is used in this repository.

## Installation

In your terminal:

Run `npm install`

Run `gulp`

Run `composer install`

## Launch the Server

We only need to launch the mysql and apache/nginx web server.

For development:

Run `php artisan serve`

To transpile typescript and watch for file changes:

Run `npm start`

Note that this does not include npm lite-server because we already have laravel's local server running.

## Notes

The AngularJS 2 lives on public/app and the main template file is app.blade.php.
