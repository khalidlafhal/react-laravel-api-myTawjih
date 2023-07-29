<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    use HasFactory;
    protected $table = 'admins';
    protected $fillable = [
        'id_admin',
        'fname',
        'lname',
        'tele',
        'active',
        'photo',
        'email',
        'id_who_created',
        'user_id'
    ];
}
