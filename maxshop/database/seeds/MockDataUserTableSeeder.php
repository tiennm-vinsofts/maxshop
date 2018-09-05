<?php

use App\Models\Orders;
use App\User;
use Illuminate\Database\Seeder;

class MockDataUserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Orders::truncate();
        User::truncate();
        // Let's make sure everyone has the same password and
        // let's hash it before the loop, or else our seeder
        // will be too slow.

        User::create([
            'name' => 'Administrator',
            'email' => 'admin@test.com',
            'password' => bcrypt('1'),
        ]);

        factory(App\User::class, 20)->create();
    }
}
