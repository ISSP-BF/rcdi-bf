<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProvincesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('provinces', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('code');
            $table->string('region_id');
            $table->string('province');
            $table->string('cheflieu')->nullable();
            $table->string('lon')->nullable();
            $table->string('lat')->nullable();
            $table->integer('users_id')->unsigned();
            $table->boolean('defaut')->nullable()->default(null);// Si la province est celle par défaut
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
        Schema::dropIfExists('provinces');
    }
}
