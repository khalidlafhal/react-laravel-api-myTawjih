<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WebSite extends Model
{
    use HasFactory;

    protected $table = 'website';

    protected $fillable = [
        'nomSite',
        'email',
        'tele',
        'addresse',
        'twitter',
        'facebook',
        'youtube',
        'instagramme',
        'logo',
        'approposDuSite',
        'smtp_password',
    ];
}
