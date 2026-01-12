<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Database\Seeders\RolesSeeder;
use Database\Seeders\ProductSeeder;
use Database\Seeders\CategorySeeder;
use Database\Seeders\AdminUserSeeder;
use Database\Seeders\PromotionSeeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            CategorySeeder::class
        ]);

        $this->call([
            ProductSeeder::class
        ]);

        $this->call([
            PromotionSeeder::class
        ]);

        $this->call([
            RolesSeeder::class
        ]);

        $this->call([
            AdminUserSeeder::class
        ]);

    }
}
