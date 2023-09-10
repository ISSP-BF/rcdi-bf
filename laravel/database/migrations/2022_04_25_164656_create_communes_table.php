<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommunesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('communes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('code');
            $table->string('province_id');
            $table->string('commune');
            $table->integer('users_id')->unsigned();
            $table->float('lon')->nullable();
            $table->float('lat')->nullable();
            $table->boolean('defaut')->nullable()->default(null);// Si la commune est celle par défaut
            $table->integer('categorie')->nullable();
            $table->string('urlSiteWeb')->nullable();
            $table->tinyInteger('updated')->nullable()->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('communes');
    }
}
