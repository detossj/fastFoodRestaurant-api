<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'user_id',
        'cart_id',
        'status',
        'delivery_type',
        'subtotal',
        'shipping_cost',
        'total',
        'payment_method',
        'delivery_address',
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function cart() {
        return $this->belongsTo(Cart::class);
    }

    public function orderItems() {
        return $this->hasMany(OrderItem::class);
    }

    public function orderPromotionItems() {
        return $this->hasMany(OrderPromotionItem::class);
    }
}
