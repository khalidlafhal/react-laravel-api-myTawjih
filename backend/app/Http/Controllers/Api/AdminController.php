<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

use function PHPUnit\Framework\fileExists;

class AdminController extends Controller
{
    //

    public function addAdmin(Request $request) {
        
        try{
            DB::beginTransaction();
            $data =  $request->input();

                $user = new User();
                $admin = new Admin();
                
                $file = $request->file('file');
                
                if ($request->hasFile('file')) {
                    $fileName = time().'_'.$file->getClientOriginalName();
                    // Store the file in the 'public/uploads' directory
                    $file->move(public_path('uploads'),$fileName);
                    $admin->photo = $fileName;
                }; 

            $user -> name = $data['fname'].' '.$data['lname'];
            $user -> email = $data['email'];
            $user -> type = 'admin';
            $user -> password = Hash::make($data['email']);

            $user -> saveOrFail();
    
    
            $admin -> fname = $data['fname'];
            $admin -> lname = $data['lname'];
            $admin -> tele = $data['tele'];
            $admin -> email = $data['email'];
            $admin -> id_admin = time();
                
            $admin -> user_id = $user -> id;
            $admin -> id_who_created = Auth::user()->id;
            $admin -> save();
            
            DB::commit();
            return response()->json([
                    'resultat' => 'success'
            ]);

        } catch(\Exception $e){
            DB::rollBack();

            return response()->json([
                'resultat' => 'failed'
            ]);

        }

    }

    public function listAdmins() {
        $users = User::with('admin')->orderBy('created_at','DESC')->get();
        return response()->json([
            'users' => $users
        ]);
    }

    public function editUser(int $id) {
        return response(Admin::find($id));
    }

    public function updateUser(Request $request,int $id) {
        try {
            DB::beginTransaction();
            $data = $request->input();

            $admin = Admin::find($id);
            $newName = null;
            if ($admin) {
                
                if ($request->hasFile('photo')) {
                    $filePath = public_path('uploads/'.$admin->photo);
                    if (File::exists($filePath)) {
                        File::delete($filePath);
                    }
                    $file = $request->file('photo');

                    $fileName = time().'_'.$file->getClientOriginalName();
                    // Store the file in the 'public/uploads' directory
                    $file->move(public_path('uploads'),$fileName);
                    $newName = $fileName;
                };

                $admin ->update([
                    'fname' => $data['fname'],
                    'lname' => $data['lname'],
                    'tele' => $data['tele'],
                    'email' => $data['email'],
                    'photo' => (empty($newName) ? $admin->photo : $newName)
                ]);
                $user = $admin->user();

                $user ->update([
                    'name' => $data['fname'].' '.$data['lname'] ,
                    'email' => $data['email']
                ]);


            } else {
                return response()->json('user not found',422);
            }


            DB::commit();
            return response() ->json([
                'resultat' => 'success',
                'admin' => $admin
            ]
            );

        } catch (\Exception $e) {
            DB::rollBack();


        }
    }
    public function deleteAdmin(int $id) {
        try{
            DB::beginTransaction();


            $admin = Admin::findOrFail($id);
            $filePath = public_path('uploads/'.$admin->photo);
            if (File::exists($filePath)) {
                File::delete($filePath);
            };

            $user = $admin->user;
            if ($user) {
                $admin -> delete();

                $user -> delete();
            }

            DB::commit();

            return response()->json([ 
                'success' => 'success'
            ]);


        } catch(\Exception $e) {
            DB::rollBack();

            return response()->json([
                'error' => $e
            ]);
        };

    }

}
