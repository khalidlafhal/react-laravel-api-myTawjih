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
        Schema::create('admins', function (Blueprint $table) {
            $table->id();
            $table -> bigInteger('id_admin')->unique();
            $table -> string('fname');
            $table -> string('lname');
            $table -> string('tele');
            $table -> integer('active')->default(1);
            $table -> string('photo')->nullable();
            $table -> string('email');
            $table -> foreignId('id_who_created')->constrained('users','id');
            $table -> foreignId('user_id')->constrained('users','id')->cascadeOnDelete()->cascadeOnUpdate();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admins');
    }
};
