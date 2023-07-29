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
        Schema::create('responsables', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('idRes_gen')->unique();
            $table -> string('cinRes',15);
            $table -> string('nom');
            $table -> string('prenom');
            $table -> string('nomAffichage');
            $table -> string('tele',15);
            $table -> string('address');
            $table -> string('cnssRes');
            $table -> float('salaire');
            $table -> date('dateNaissance');
            $table -> date('dateEmbauche');
            $table -> string('email')->unique();
            $table -> string('image');
            $table -> integer('active')->default(1);
            $table -> foreignId('id_who_created')->constrained('users','id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('responsables');
    }
};
