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
            'payment_method' => 'required|in:Efectivo,Tarjeta Debito',
            'delivery_type' => 'required|in:Retiro,Delivery',
            'items' => 'required|array',
            'total' => 'required|numeric',
            'subtotal' => 'required|numeric',
            'shipping_cost' => 'required|numeric',
            'delivery_address' => 'required|string|max:255'
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
                    'status' => 'Pendiente',
                    'delivery_type' => $request->delivery_type,
                    'subtotal' => $request->subtotal,
                    'shipping_cost' => $request->shipping_cost,
                    'total' => $request->total,
                    'payment_method' => $request->payment_method,
                    'delivery_address' => $request->delivery_address,
                ]);
                

                // 4. Separar y guardar Items y Promociones
                foreach ($request->items as $item) {
                    // Si el item es una promoción 
                    if (isset($item['cartType']) && $item['cartType'] === 'promo') {
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