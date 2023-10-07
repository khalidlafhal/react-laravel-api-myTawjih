<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Region extends Model
{
    use HasFactory;

    protected $fillable = [
        'name'
    ];

    public function villes(){
        return $this->hasMany(Ville::class,'idRegion','id');
    }
    
}
