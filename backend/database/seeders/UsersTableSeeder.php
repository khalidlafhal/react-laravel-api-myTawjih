<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        DB::table("admins")->truncate();
        DB::table("users")->truncate();

        $user = User::create(
            [
                "name" => "admin",
                "email" => "khalidlafhal@gmail.com",
                "type" => "admin",
                "password" => Hash::make("admin"),
                "remember_token" => null
            ]
        );



        Admin::create([
            "id_admin" => 12343456,
            "fname" => "khalid",
            "lname" => "lafhal",
            "tele" => "0616831063",
            "photo" => "",
            "email" => $user->email,
            "user_id"  => $user->id,
            "id_who_created" => $user->id
        ]);



    }
}
