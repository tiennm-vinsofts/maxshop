<?php

use App\Models\Countries;
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
        Countries::truncate();
        factory(App\Models\Countries::class, 20)->create();
    }
}
