<?php

use App\Models\Country;
use Illuminate\Database\Seeder;

class MockDataCountryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Country::truncate();
        factory(App\Models\Country::class, 20)->create();
    }
}
