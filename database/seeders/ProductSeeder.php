<?php

namespace Database\Seeders;

use Str;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run()
    {
        $data = [

            'pizzas' => [
                ['Pizza Napolitana', 'Clásica pizza con tomate, mozzarella y albahaca fresca.', 8900],
                ['Pizza Pepperoni', 'Pizza con abundante pepperoni y queso mozzarella.', 9500],
                ['Pizza Hawaiana', 'Deliciosa mezcla de jamón, piña y queso.', 9200],
                ['Pizza Vegetariana', 'Verduras frescas, champiñones, aceitunas y pimentones.', 8800],
                ['Pizza Cuatro Quesos', 'Mozzarella, parmesano, azul y cheddar.', 10200],
                ['Pizza Carnívora', 'Pepperoni, salchicha italiana, jamón y tocino.', 10900],
                ['Pizza BBQ Pollo', 'Pollo, salsa BBQ, cebolla morada y queso.', 9900],
                ['Pizza Margarita', 'Salsa de tomate, mozzarella y orégano.', 8700],
            ],

            'hamburguesas' => [
                ['Hamburguesa Clásica', 'Carne 120g, tomate, lechuga y queso cheddar.', 4500],
                ['Hamburguesa Doble', 'Doble carne, doble queso cheddar y salsa especial.', 6200],
                ['Hamburguesa BBQ', 'Carne a la parrilla con salsa BBQ y cebolla crispy.', 5800],
                ['Hamburguesa Pollo Crispy', 'Pollo apanado, lechuga y mayo casera.', 5200],
                ['Hamburguesa Veggie', 'Hamburguesa de legumbres con palta y tomate.', 4900],
                ['Hamburguesa Tocino Cheddar', 'Carne grillada, tocino, cheddar y salsa.', 6100],
                ['Hamburguesa Mexicana', 'Carne, jalapeños, cheddar y salsa picante.', 6000],
                ['Hamburguesa Premium', 'Carne angus con queso gouda y cebolla caramelizada.', 7500],
            ],

            'acompañamientos' => [
                ['Papas Fritas', 'Papas fritas crocantes recién hechas.', 1800],
                ['Papas con Queso y Tocino', 'Papas con queso cheddar fundido y tocino.', 3500],
                ['Nuggets de Pollo', 'Nuggets de pollo crujientes.', 2500],
                ['Aros de Cebolla', 'Aros empanizados y dorados.', 2400],
                ['Palitos de Queso', 'Mozzarella apanada y frita.', 2800],
                ['Empanaditas', 'Empanadas pequeñas de queso o carne.', 2000],
                ['Camote Frito', 'Fritas de camote con toque dulce.', 2600],
                ['Salsas Variadas', 'Salsas: ajo, BBQ, cheddar, ketchup y mayo.', 1000],
            ],

            'bebidas' => [
                ['Coca-Cola 350ml', 'Bebida gaseosa fría.', 1500],
                ['Coca-Cola Zero 350ml', 'Versión sin azúcar.', 1500],
                ['Sprite 350ml', 'Bebida limón-lima.', 1500],
                ['Fanta Naranja 350ml', 'Bebida sabor naranja.', 1500],
                ['Cachantun', 'Agua pura y refrescante.', 1200],
                ['Jugo Natural Naranja', 'Jugo exprimido natural.', 2000],
                ['Jugo Natural Mango', 'Jugo fresco sabor mango.', 2000],
                ['Té Helado Durazno', 'Té frío sabor durazno.', 1800],
            ],

            'postres' => [
                ['Brownie', 'Brownie de chocolate con nuez.', 2500],
                ['Helado Vainilla', 'Helado cremoso de vainilla.', 1800],
                ['Tiramisú', 'Postre italiano clásico.', 3200],
                ['Cheesecake', 'Tarta de queso con salsa de frutilla.', 3500],
                ['Donas', 'Dona glaseada suave y esponjosa.', 1200],
                ['Churros', 'Churros con azúcar y canela.', 1500],
                ['Pie de Limón', 'Clásico pie con sabor a limón.', 2800],
                ['Muffin Chocolate', 'Muffin con chips de chocolate.', 1600],
            ],

            'extras' => [
                ['Extra Queso', 'Añade más queso a tu comida.', 500],
                ['Extra Tocino', 'Toque crujiente de tocino.', 700],
                ['Extra Salsa BBQ', 'Salsa BBQ adicional.', 400],
                ['Extra Cheddar', 'Cheddar fundido.', 600],
                ['Extra Palta', 'Palta fresca para tus comidas.', 900],
                ['Extra Cebolla', 'Cebolla fresca o caramelizada.', 400],
                ['Extra Tomate', 'Rodajas de tomate fresco.', 300],
                ['Extra Pepinillos', 'Pepinillos en rodajas.', 350],
            ],
        ];

        // $categoryName será 'pizzas', 'hamburguesas', 'bebidas'...
        // $products será el array de productos de esa categoría.

        foreach ($data as $categoryName => $products) {

            $category = Category::where('name', $categoryName)->first();

            if (!$category) continue;

            foreach ($products as [$name, $description, $price]) {

                Product::create([
                    'category_id' => $category->id,
                    'name'        => $name,
                    'description' => $description,
                    'price'       => $price,
                    'image_url'   => '/products/' . Str::slug($name) . '.webp',
                    'available'   => true,
                ]);
            }
        }
    }
}
