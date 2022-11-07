<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIndicateurCarteSanitairesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     * 'NbLit_SuiteCouche','NbLit_HospiMaternite','NbLit_HospiAutreService',* 
     */
    public function up()
    {
        Schema::create('indicateur_carte_sanitaires', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('region_id')->unsigned();
            $table->integer('province_id')->unsigned();
            $table->integer('commune_id')->unsigned();
            $table->integer('district_id')->unsigned();
            $table->integer('formation_sanitaire_id')->unsigned();
            $table->integer('annee')->unsigned();
            $table->integer('mois')->unsigned();

            $table->string('NbLit_SuiteCouche')->nullable();
            $table->string('NbLit_HospiMaternite')->nullable();
            $table->string('NbLit_HospiAutreService')->nullable();

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
        Schema::dropIfExists('indicateur_carte_sanitaires');
    }
}
