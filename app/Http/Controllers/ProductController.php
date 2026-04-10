<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function allProducts(Request $request)
    {
        $query = Product::query();

        // Verificamos si la URL trae el parámetro 'category_id'
        if ($request->has('category_id')) {
            // Filtramos por esa categoría
            $query->where('category_id', $request->category_id);
        }

        // Cargar la relación de la categoría
        $query->with('category');

        return response()->json($query->get(), 200);
    }
}