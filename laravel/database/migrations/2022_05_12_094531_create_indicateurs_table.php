<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIndicateursTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('indicateurs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('region_id')->unsigned()->nullable();
            $table->integer('province_id')->unsigned()->nullable();
            $table->integer('commune_id')->unsigned()->nullable();

            $table->string('indicateur')->nullable();
            $table->string('groupe')->nullable();

            $table->string('niveau1')->nullable();
            $table->string('niveau2')->nullable();

            $table->float('indice');
            
            $table->integer('mois')->unsigned();
            $table->integer('annee')->unsigned();
            $table->string('source')->nullable();


            $table->integer('updated_by')->unsigned()->nullable();
            $table->integer('created_by')->unsigned()->nullable();
            $table->boolean('updated')->nullable()->default(null);
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
        Schema::dropIfExists('indicateurs');
    }
}
