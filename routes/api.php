<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PromotionController;


// Public

Route::get('/products', [ProductController::class,'allProducts']);
Route::get('/categories', [CategoryController::class,'allCategories']);
Route::get('/promotions', [PromotionController::class,'allPromotions']);

// Auth
Route::post('/auth/register',[AuthController::class, 'register']);
Route::post('/auth/login',[AuthController::class, 'login']);

// Private
Route::group(['middleware' => 'auth:sanctum'], function () {

    Route::post('/auth/logout',[AuthController::class, 'logout']);
    
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
