<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::firstOrCreate(
            ['name'=> 'Pizzas'],
            ['description' => 'Deliciosas pizzas artesanales con ingredientes frescos y masas crujientes.']
        );
        
        Category::firstOrCreate(
            ['name'=> 'Hamburguesas'],
            ['description' => 'Hamburguesas jugosas con carne premium y sabores irresistibles.']
        );
        
        Category::firstOrCreate(
            ['name'=> 'Acompañamientos'],
            ['description' => 'Papas, nuggets, salsas y acompañamientos perfectos para tu menú.']
        );
        
        Category::firstOrCreate(
            ['name'=> 'Bebidas'],
            ['description' => 'Bebidas frías y refrescantes para acompañar cualquier comida.']
        );
        
        Category::firstOrCreate(
            ['name'=> 'Postres'],
            ['description' => 'Dulces tentaciones ideales para cerrar tu comida con broche de oro.']
        );
        
        Category::firstOrCreate(
            ['name'=> 'Extras'],
            ['description' => 'Agrega extras como salsas, toppings y opciones adicionales a tu pedido.']
        );
        
    }
}
