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
            $table -> string('photo');
            $table -> enum('sexe',['f','m']);
            $table -> date('dateBirthday');
            $table -> string('placeBirthday');
            $table -> string('address');
            $table -> foreignId('responsable_id')->constrained('responsables','id');
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
