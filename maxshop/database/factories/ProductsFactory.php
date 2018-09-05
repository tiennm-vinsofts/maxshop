<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Models\Products::class, function (Faker $faker) {
    return [
        'category_id' => $faker->numberBetween(1, 10),
        'name' => $faker->name,
        'priceold' => $faker->year,
        'pricenew' => $faker->year,
        'ranks' => $faker->numberBetween(1, 4),
        'status' => $faker->numberBetween(1, 4),
        'img' => 'uploads/1/8098_1536141800.jpeg',
        'des' => $faker->address,
        'des2' => $faker->address,
        'sales' => 1,
        'time_sales' => null,
        'time_out_sales' => null,
    ];
});
