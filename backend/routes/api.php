<?php

use App\Http\Controllers\Api\AdminController;
use App\Http\Controllers\Api\AuthController;
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
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::prefix('admin')->group(function () {
        // Use GET method for listing admins
        Route::get('/user/edit/{id}',[AdminController::class,'editUser']);
        Route::get('/listAdmins', [AdminController::class, 'listAdmins']);
        // If you need to add an admin, use the POST method
        Route::post('/addUser', [AdminController::class, 'addAdmin']);
        Route::delete('/deleteAdmin/{id}',[AdminController::class,'deleteAdmin']);
        Route::post('/user/update/{id}',[AdminController::class,'updateUser']);

    });

    Route::post('/logout', [AuthController::class, 'logout']);
});








// Route::post('/users/create',function(){
//     $user = User::create([
//         'name'=>'khalid',
//         'email' => 'lafhalkhalid@gmail.com',
//         'type' => 'admin',
//         'password' => Hash::make('khalid2002'),

//     ]);
//     return response()->json([
//         'user' => $user,
//         'message' => 'user add with success'
//     ]);


// })->name('create.user');