<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Store;
use Illuminate\Support\Str;

class StoreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $stores = [
            [
                'direction' => 'Concepción',
                'sub_direction' => 'San Martín 789',
                'phone' => '+56 41 223 4567',
                'schedule' => 'Lunes a Viernes 09:00 - 18:00',
            ],
            [
                'direction' => 'Santiago Centro',
                'sub_direction' => 'Alameda 1234',
                'phone' => '+56 2 2987 6543',
                'schedule' => 'Lunes a Sábado 10:00 - 20:00',
            ],
            [
                'direction' => 'Valparaíso',
                'sub_direction' => 'Av. Argentina 455',
                'phone' => '+56 32 234 9876',
                'schedule' => 'Lunes a Viernes 09:30 - 17:30',
            ],
            [
                'direction' => 'Temuco',
                'sub_direction' => 'Av. Alemania 980',
                'phone' => '+56 45 256 7788',
                'schedule' => 'Lunes a Viernes 09:00 - 18:00',
            ],
            [
                'direction' => 'Antofagasta',
                'sub_direction' => 'Av. Brasil 1120',
                'phone' => '+56 55 245 3322',
                'schedule' => 'Lunes a Viernes 10:00 - 19:00',
            ],
        ];

        foreach ($stores as $storeData) {
            Store::create([
                ...$storeData,
                'image_url' => '/stores/' . Str::slug($storeData['direction']) . '.webp',
            ]);
        }
    }
}
