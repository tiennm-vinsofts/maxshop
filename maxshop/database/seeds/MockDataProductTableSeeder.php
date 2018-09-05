<?php

use Illuminate\Database\Seeder;

class MockDataProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Models\Products::class, 20)->create();
    }
}
