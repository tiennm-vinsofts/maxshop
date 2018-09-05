<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

     
Route::get('/', function () {
    return view('welcome');
});

Route::view('/{path?}','welcome');

Auth::routes();

Route::group(['prefix'=>'backend'],function (){

    Route::get('/home', 'HomeController@index');

    Route::get('generator_builder', '\InfyOm\GeneratorBuilder\Controllers\GeneratorBuilderController@builder');

    Route::get('field_template', '\InfyOm\GeneratorBuilder\Controllers\GeneratorBuilderController@fieldTemplate');

    Route::post('generator_builder/generate', '\InfyOm\GeneratorBuilder\Controllers\GeneratorBuilderController@generate');

    Route::resource('categories', 'CategoryController');

    Route::resource('products', 'ProductsController');

    Route::resource('countries', 'CountriesController');

    Route::resource('orderItems', 'OrderItemController');

    Route::resource('orders', 'OrdersController');

    Route::resource('blogs', 'BlogsController');

    Route::resource('slides', 'SlideController');

});
