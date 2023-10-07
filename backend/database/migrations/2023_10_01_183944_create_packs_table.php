<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('packs', function (Blueprint $table) {
            $table->bigInteger('idPack')->autoIncrement();
            $table -> string('domaineP')->default(null);
            $table -> string('domaineAbreviationP')->default(null);
            $table ->  text('avantage1P') -> default(null);
            $table -> text('avantage2P') -> default(null);
            $table -> float('prixPack')->default(null);
            $table -> string('color')->default(null);
            $table -> text('bacs')->default(null);
            $table -> integer('active') -> default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('packs');
    }
};
