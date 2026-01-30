<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\OrderPromotionItem;
use App\Models\Cart;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        // 1. Validar la entrada
        $request->validate([
            'payment_method' => 'required|in:cash,credit_card,debit_card,transfer',
            'items' => 'required|array',
            'total' => 'required|numeric',
        ]);

        try {
            return DB::transaction(function () use ($request) {
                $user = Auth::user();

                // 2. Crear un registro en la tabla carts
                $cart = Cart::create([
                    'user_id' => $user->id,
                    'status' => 'completed',
                    'total' => $request->total,
                ]);

                // 3. Crear la Orden
                $order = Order::create([
                    'user_id' => $user->id,
                    'cart_id' => $cart->id,
                    'status' => 'pending',
                    'total' => $request->total,
                    'payment_method' => $request->payment_method,
                ]);

                // 4. Separar y guardar Items y Promociones
                foreach ($request->items as $item) {
                    // Si el item es una promoción 
                    if (isset($item['cartType']) && $item['cartType'] === 'promotion') {
                        OrderPromotionItem::create([
                            'order_id'     => $order->id,
                            'promotion_id' => $item['id'],
                            'quantity'     => $item['quantity'],
                            'price'        => $item['price'],
                            'subtotal'     => $item['price'] * $item['quantity'],
                        ]);
                    } else {
                        // Es un producto normal
                        OrderItem::create([
                            'order_id'   => $order->id,
                            'product_id' => $item['id'],
                            'quantity'   => $item['quantity'],
                            'price'      => $item['price'],
                            'subtotal'   => $item['price'] * $item['quantity'],
                        ]);
                    }
                }

                return response()->json([
                    'message' => 'Pedido realizado con éxito',
                    'order_id' => $order->id
                ], 201);
            });
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error al procesar el pedido',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function index()
    {
        $orders = Order::with(['orderItems.product', 'orderPromotionItems.promotion'])
            ->where('user_id', Auth::id())
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json($orders);
    }
}