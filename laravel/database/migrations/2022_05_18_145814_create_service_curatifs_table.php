<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServiceCuratifsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     * 
     *'NbNouveaux_consultant','NbEnft_PrisCharge_PCIME','NbMaladie_MisObservation',
     */
    public function up()
    {
        Schema::create('service_curatifs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('region_id')->unsigned();
            $table->integer('province_id')->unsigned();
            $table->integer('commune_id')->unsigned();
            $table->integer('district_id')->unsigned();
            $table->integer('formation_sanitaire_id')->unsigned();
            $table->integer('annee')->unsigned();
            $table->integer('mois')->unsigned();

            $table->string('NbNouveaux_consultant')->nullable();
            $table->string('NbEnft_PrisCharge_PCIME')->nullable();
            $table->string('NbMaladie_MisObservation')->nullable();

            $table->integer('updated_by')->unsigned()->nullable();
            $table->integer('created_by')->unsigned()->nullable();
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
        Schema::dropIfExists('service_curatifs');
    }
}
