<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function allCategories(Request $request)
    {
        // 1. Si la URL trae el parámetro 'id', devolvemos UN SOLO OBJETO
        if ($request->has('id')) {
            $category = Category::where('id', $request->id)->first();
            
            // Si no existe la categoría, es buena práctica devolver un error 404
            if (!$category) {
                return response()->json(['message' => 'Categoría no encontrada'], 404);
            }
    
            return response()->json($category, 200);
        }
    
        // 2. Si NO trae 'id', devolvemos TODAS las categorías como un ARREGLO
        $categories = Category::all();
        
        return response()->json($categories, 200);
    }
}
