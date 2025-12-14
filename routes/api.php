<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;


// Public

Route::get('/products', [ProductController::class,'allProducts']);
Route::get('/categories', [CategoryController::class,'allCategories']);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
