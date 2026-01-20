<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function allOrders()
    {
        return response()->json(Order::all(), 200);
    }

}
