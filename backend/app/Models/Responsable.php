<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Responsable extends Model
{
    use HasFactory;

    protected $table = 'responsables';

    protected $fillable = [
        'idRes_gen',
        'cinRes',
        'nom',
        'prenom',
        'nomAffichage',
        'tele',
        'address',
        'cnssRes',
        'salaire',
        'dateNaissance',
        'dateEmbauche',
        'email',
        'image',
        'active',
        'id_who_created'
    ];
}
