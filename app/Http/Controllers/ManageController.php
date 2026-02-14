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

    public function updateManage(Request $request) 
    {
        $rules = [
            'id'          => 'required|integer', 
            'type'        => 'required|in:product,promotion', 
            'name'        => 'required|string|max:255',
            'description' => 'required|string|max:1000', 
            'price'       => 'required|numeric',
            'available'   => 'required|boolean',
            'image'       => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048', 
        ];

        // Condicionales según el tipo
        if ($request->type === 'product') {
            $rules['category_id'] = 'required|integer|exists:categories,id';
        } else {
            $rules['start_date'] = 'required|date';
            $rules['end_date']   = 'required|date|after_or_equal:start_date';
        }

        $validated = $request->validate($rules);

        // Buscar el modelo correcto
        if ($request->type === 'product') {
            $item = Product::find($request->id);
        } else {
            $item = Promotion::find($request->id);
        }

        if (!$item) {
            return response()->json(['success' => false, 'message' => 'Ítem no encontrado'], 404);
        }

        // Actualizar datos básicos
        $item->name        = $request->name;
        $item->description = $request->description;
        $item->price       = $request->price;
        $item->available   = filter_var($request->available, FILTER_VALIDATE_BOOLEAN); // Asegura booleano

        // Lógica de Imagen
        // Si el usuario subió una nueva imagen física
        if ($request->hasFile('image')) {
            // Borrar imagen anterior si existe y no es una URL externa
            if ($item->image_url && file_exists(public_path($item->image_url))) {
                // Opcional: unlink(public_path($item->image_url));
            }

            // Definir carpeta
            $folder = $request->type === 'product' ? 'products' : 'promotions';
            
            // Generar nombre limpio basado en el slug 
            $filename = Str::slug($request->name) . '.' . $request->file('image')->extension();
            
            // Guardar en storage/app/public/products 
            $path = $request->file('image')->storeAs("public/$folder", $filename);
            
            // Guardar la ruta accesible web
            $item->image_url = "/storage/$folder/$filename";
        
        } elseif ($request->filled('image_url') && !$item->image_url) {
            // Si no subió archivo pero el frontend mandó una ruta de texto (ej. al crear sin foto)
            $item->image_url = $request->image_url;
        }

        // Actualizar datos específicos
        if ($request->type === 'product') {
            $item->category_id = $request->category_id;
        } else {
            $item->start_date = $request->start_date;
            $item->end_date   = $request->end_date;
        }

        $item->save();

        return response()->json([
            'success' => true,
            'message' => ($request->type === 'product' ? 'Producto' : 'Promoción') . ' actualizado correctamente',
            'data'    => $item
        ]);
    }

    public function deleteManage(Request $request) {
        $validation = [
            'id'          => 'required|integer', 
            'type'        => 'required|in:product,promotion',  
        ];

        $validated = $request->validate($validation);

        if ($request->type === 'product') {
            $item = Product::find($request->id);
        } else {
            $item = Promotion::find($request->id);
        }

        if (!$item) {
            return response()->json(['success' => false, 'message' => 'Ítem no encontrado'], 404);
        }

        $item->delete();

        return response()->json([
            'success' => true,
            'message' => ($request->type === 'product' ? 'Producto' : 'Promoción') . ' eliminado correctamente',
            'data'    => $item
        ]);
    }
}
