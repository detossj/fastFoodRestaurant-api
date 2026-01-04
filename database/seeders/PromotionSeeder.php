<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Promotion;
use App\Models\Product;
use App\Models\PromotionItem;
use Carbon\Carbon;

class PromotionSeeder extends Seeder
{
    public function run(): void
    {
        $promotions = [
            [
                'name' => 'Promo Pizza Napolitana',
                'description' => 'Pizza Napolitana + palitos de queso + bebida',
                'price' => 12900,
                'image_url' => '/promo-pizza-napolitana.webp',
                'start_date' => Carbon::now(),
                'end_date' => Carbon::now()->addMonth(),
                'available' => true,
                'items' => [
                    ['Pizza Napolitana', 1],
                    ['Palitos de Queso',1],
                    ['Coca-Cola 350ml', 1],
                ],
            ],
            [
                'name' => 'Promo Hamburguesa Doble',
                'description' => 'Hamburguesa doble + papas + bebida',
                'price' => 8900,
                'image_url' => '/promo-hamburguesa-doble.webp',
                'start_date' => Carbon::now(),
                'end_date' => Carbon::now()->addWeeks(3),
                'available' => true,
                'items' => [
                    ['Hamburguesa Doble', 1],
                    ['Papas Fritas', 1],
                    ['Coca-Cola 350ml', 1],
                ],
            ],
            [
                'name' => 'Promo Pizza Familiar',
                'description' => 'Pizza Pepperoni + bebida',
                'price' => 9900,
                'image_url' => '/promo-pizza-pepperoni.webp',
                'start_date' => Carbon::now(),
                'end_date' => Carbon::now()->addMonth(),
                'available' => true,
                'items' => [
                    ['Pizza Pepperoni', 1],
                    ['Coca-Cola 350ml', 1],
                ],
            ],
            [
                'name' => 'Promo Pizza Duo',
                'description' => 'Pizza Pepperoni + Pizza Napolitana + bebida',
                'price' => 16900,
                'image_url' => '/promo-pizza-duo.webp',
                'start_date' => Carbon::now(),
                'end_date' => Carbon::now()->addMonth(),
                'available' => true,
                'items' => [
                    ['Pizza Pepperoni', 1],
                    ['Coca-Cola 350ml', 1],
                ],
            ],
        ];

        foreach ($promotions as $promoData) {

            $promotion = Promotion::firstOrCreate(
                ['name' => $promoData['name']],
                [
                    'description' => $promoData['description'],
                    'price' => $promoData['price'],
                    'image_url' => $promoData['image_url'],
                    'start_date' => $promoData['start_date'],
                    'end_date' => $promoData['end_date'],
                    'available' => $promoData['available'],
                ]
            );

   
            foreach ($promoData['items'] as [$productName, $quantity]) {

                $product = Product::where('name', $productName)->first();

                if (!$product) continue;

                PromotionItem::firstOrCreate(
                    [
                        'promotion_id' => $promotion->id,
                        'product_id' => $product->id,
                    ],
                    [
                        'quantity' => $quantity,
                    ]
                );
            }
        }
    }
}
