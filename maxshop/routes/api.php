<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group([], function () {
    Route::group(['prefix' => 'auth'], function () {
        Route::get('', 'AuthAPIController@getinfo')->name('info');
        Route::post('', 'AuthAPIController@login')->name('login');
        Route::post('register', 'AuthAPIController@register')->name('register');
    });
});


Route::resource('categories', 'CategoryAPIController');

Route::resource('products', 'ProductAPIController');

Route::resource('countries', 'CountryAPIController');

Route::resource('orders', 'OrderAPIController');

Route::resource('order_items', 'OrderItemAPIController');