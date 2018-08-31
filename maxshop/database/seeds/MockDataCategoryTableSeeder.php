<?php

use App\Models\Category;
use Illuminate\Database\Seeder;

class MockDataCategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::truncate();

        factory(App\Models\Category::class, 20)->create();
    }
}
