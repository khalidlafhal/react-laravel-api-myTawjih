<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    
    public function login(Request $request) {
        $credential = $request->validate([
            'email'=>['required','min:4','email'],
            'password' => ['required','min:4','string']
        ]);

        if (!Auth::attempt($credential)) {

            return response()->json([
                'errors' => [
                    'error' => 'البر يد الالكتر وني او كلمة السر غير  صحيحية '
                ] 
            ],422);

        }

        $user = $request->user();
        $token = $user -> createToken('main')->plainTextToken;

        return response()->json([
            'user' =>$user,
            'token' => $token
        ]);

    }

    public function user(Request $request) {
        $user =User::where('id',$request->user()->id)->with('admin')->get();
        // $admin = $user -> admin;
        return response()->json($user);
    }



    public function logout(Request $request) {
        $user = $request -> user();
        $user -> currentAccessToken()->delete();

        return response('',status:204);

    }
}
