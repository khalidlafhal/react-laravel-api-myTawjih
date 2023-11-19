<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Student;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class StudentController extends Controller
{
    
    public function index() {
        //
    }

    public function store(Request $request) {
        try{
            DB::beginTransaction();
            $data = $request->input();

            $user = new User();
            $user -> name = $data['fname'] .' '.$data['lname'];
            $user -> email = $data['email'];
            $user -> type = 'student';
            $user -> password = Hash::make($data['email']);
            $user->save();

            $data['user_id'] = $user->id;
            $data['codeMassar'] = 'eshfhhffbf';
            Student::create($data);

            DB::commit();
            return response()->json('success');
            // return response()->json($data['codeMassar']);
        } catch(\Exception $e){
            DB::rollBack();
            return response()->json($e);
        }
    }
    
    public function update(Request $request,int $id) {
        //
    }

    public function destroy(int $id) {
        //
    }
}
