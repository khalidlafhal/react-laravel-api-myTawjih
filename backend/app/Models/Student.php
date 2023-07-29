<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    protected $table = 'students';
    protected $fillable = [
        'id_student',
        'cin',
        'email',
        'fname',
        'lname',
        'photo',
        'sexe',
        'placeBirthday',
        'address',
        'responsable_id',
        'id_who_created',
    ] ;
}
