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
        Schema::create('students', function (Blueprint $table) {
            $table -> string('codeMassar')->primary();
            $table -> bigInteger('id_student')->nullable();
            $table -> string('cin');
            $table -> string('email');
            $table -> string('fname');
            $table -> string('lname');
            $table -> string('lastNameArabe')->default(null);
            $table -> string('firstNameArabe')->default(null);
            $table -> string('photo')->default(null);
            $table -> integer('bacYear')->default(null);
            $table -> enum('sexe',['f','m']);
            $table -> date('dateBirthday');
            $table -> string('placeBirthday')->default(null);
            $table -> string('address');
            $table -> foreignId('idBac')->constrained('bacs','idBac')->default(null);
            $table -> foreignId('idVille')->constrained('villes','id')->default(null);
            $table -> foreignId('idRegion')->constrained('regions','id')->default(null);
            $table -> foreignId('responsable_id')->constrained('responsables','id')->default(null);
            $table -> foreignId('idPack')->constrained('packs','idPack')->default(null);
            $table -> foreignId('user_id')->constrained('users','id');
            $table -> foreignId('id_who_created')->constrained('users','id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
