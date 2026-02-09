<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Promotion;
use Illuminate\Http\Request;

class ManageController extends Controller
{
    public function index()
    {
        // Cargar productos y marcar su tipo
        $products = Product::all()->map(function ($item) {
            $item->type = 'product';
            return $item;
        });

        // Cargar promociones y marcar su tipo
        $promotions = Promotion::all()->map(function ($item) {
            $item->type = 'promotion';
            return $item;
        });

        // Unirlos en una sola colección y ordenarlos por orden descente de creacion
        $all_items = $products->concat($promotions)->sortByDesc('created_at')->values();

        return response()->json($all_items);
    }
}
