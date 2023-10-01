<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pack extends Model
{
    use HasFactory;

    protected $fillable = [
        'domaineP',
        'domaineAbreviationP',
        'avantage1P',
        'avantage2P',
        'prixPack',
        'color',
        'bacs',
        'active'
    ];

}
