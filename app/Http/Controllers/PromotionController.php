<?php

namespace App\Http\Controllers;

use App\Models\Promotion;
use Illuminate\Http\Request;

class PromotionController extends Controller
{
    public function allPromotions()
    {
        return response()->json(Promotion::all(), 200);
    }
}
