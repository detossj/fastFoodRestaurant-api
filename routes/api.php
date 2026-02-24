<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\ManageController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PromotionController;
use App\Http\Controllers\StoreController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


// Public

Route::get('/products', [ProductController::class,'allProducts']);
Route::get('/categories', [CategoryController::class,'allCategories']);
Route::get('/promotions', [PromotionController::class,'allPromotions']);
Route::get('/stores', [StoreController::class,'allStores']);
Route::post('/enviar-correo',[EmailController::class, 'enviar']);

// Auth
Route::post('/auth/register',[AuthController::class, 'register']);
Route::post('/auth/login',[AuthController::class, 'login']);

// Private
Route::group(['middleware' => 'auth:sanctum'], function () {

    Route::post('/auth/logout',[AuthController::class, 'logout']);
    Route::patch('/auth/profile',[AuthController::class, 'updateProfile']);
    Route::post('/orders', [OrderController::class, 'store']);
    Route::get('/orders', [OrderController::class, 'index']);
    Route::get('/manage', [ManageController::class, 'index']);
    Route::post('/manage', [ManageController::class, 'updateManage']);
    Route::delete('/manage', [ManageController::class, 'deleteManage']);
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
