<?php

use App\Http\Controllers\Api\AdminController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\api\WebSiteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/login',[AuthController::class,'login'])->name('login');

Route::middleware('auth:sanctum')->group(function () {
    // Route::get('/user', function (Request $request) {
    //     return $request->user();
    // });

    Route::get('/user',[AuthController::class,'user']);

    Route::prefix('admin')->group(function () {
        // Use GET method for listing admins
        Route::get('/user/edit/{id}',[AdminController::class,'editUser']);
        Route::get('/listAdmins', [AdminController::class, 'listAdmins']);
        // If you need to add an admin, use the POST method
        Route::post('/addUser', [AdminController::class, 'addAdmin']);
        Route::delete('/deleteAdmin/{id}',[AdminController::class,'deleteAdmin']);
        Route::post('/user/update/{id}',[AdminController::class,'updateUser']);

        Route::get('/website', [WebSiteController::class,'getInfo']);
        Route::post('/website',[WebSiteController::class,'addInfo']);
        Route::post('/website/update',[WebSiteController::class,'updateInfo']);
        
    });

    Route::post('/logout', [AuthController::class, 'logout']);
});








Route::get('/website', [WebSiteController::class,'getInfo']);
