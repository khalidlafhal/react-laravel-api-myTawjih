<?php

use App\Http\Controllers\Api\AdminController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\api\BacController;
use App\Http\Controllers\api\PackController;
use App\Http\Controllers\api\RegionController;
use App\Http\Controllers\api\VilleController;
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

    Route::post('/bac',[BacController::class,'store']);
    Route::get('/bac',[BacController::class,'index']);
    Route::put('/bac/{id}',[BacController::class,'update']);
    Route::delete('/bac/{id}',[BacController::class,'destroy']);

    Route::get('/region',[RegionController::class,'index']);
    Route::post('/region',[RegionController::class,'store']);
    Route::put('/region/{id}',[RegionController::class,'update']);
    Route::delete('/region/{id}',[RegionController::class,'destroy']);

    Route::get('/ville',[VilleController::class,'index']);
    Route::post('/ville',[VilleController::class,'store']);
    Route::delete('/ville/{id}',[VilleController::class,'destroy']);
    Route::put('/ville/{id}',[VilleController::class,'update']);

    Route::get('/pack',[PackController::class,'index']);
    Route::post('/pack',[PackController::class,'store']);
    Route::delete('/pack/{id}',[PackController::class,'destroy']);
    Route::put('/pack/{id}',[PackController::class,'update']);
    Route::get('pack/bacs',[PackController::class,'getAllBacs']);
    Route::get('/pack/bac-checked/{id}',[PackController::class,'getcheckedBacs']);
    
    Route::post('/logout', [AuthController::class, 'logout']);
});








Route::get('/website', [WebSiteController::class,'getInfo']);
