<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFormationSanitaireNewDatasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('formation_sanitaire_new_datas', function (Blueprint $table) {
            $table->id();
            $table->integer('formation_sanitaires_id')->unsigned();
            $table->integer('annee_id')->nullable();
            $table->string('q113')->nullable();
            $table->string('q117')->nullable();
            $table->string('effectif_medspeci')->nullable();
            $table->string('effectif_medgen')->nullable();
            $table->string('effectif_attach')->nullable();
            $table->string('sagef')->nullable();
            $table->string('infirmier')->nullable();
            $table->string('autrep')->nullable();
            $table->string('log')->nullable();
            $table->string('nbre_log')->nullable();
            $table->string('bloc')->nullable();
            $table->string('unitsoin')->nullable();
            $table->string('energ_el')->nullable();
            $table->string('energiesolaire')->nullable();
            $table->string('source_eau')->nullable();
            $table->string('incinerateur')->nullable();
            $table->string('q8408a_1')->nullable();
            $table->string('q8408a_2')->nullable();
            $table->string('q8408a_3')->nullable();
            $table->string('q8408a_4')->nullable();
            $table->string('q8408a_5')->nullable();
            $table->string('q8408a_6')->nullable();
            $table->string('q8408a_7')->nullable();
            $table->string('q8408a_8')->nullable();
            $table->string('q8408a_9')->nullable();
            $table->string('q8408a_10')->nullable();
            $table->string('q8502a_1')->nullable();
            $table->string('q8502a_2')->nullable();
            $table->string('q8502a_3')->nullable();
            $table->string('q8502a_4')->nullable();
            $table->string('q8502a_5')->nullable();
            $table->string('q8502a_6')->nullable();
            $table->string('bf6657a_1')->nullable();
            $table->string('bf6657a_2')->nullable();
            $table->string('bf6657a_3')->nullable();
            $table->string('bf6657a_4')->nullable();
            $table->string('bf6696a_1')->nullable();
            $table->string('bf6696a_2')->nullable();
            $table->string('bf6696a_3')->nullable();
            $table->string('bf6696a_4')->nullable();
            $table->string('bf6696a_5')->nullable();
            $table->string('bf6696a_6')->nullable();
            $table->string('bf129_03')->nullable();
            $table->string('q8902a_1')->nullable();
            $table->string('q8902a_2')->nullable();
            $table->string('q8902a_bf178')->nullable();
            $table->string('q8902a_3')->nullable();
            $table->string('q8902a_4')->nullable();
            $table->string('q8902a_5')->nullable();
            $table->string('q9114a_1')->nullable();
            $table->string('q9114a_2')->nullable();
            $table->string('q9114a_3')->nullable();
            $table->string('q9114a_4')->nullable();
            $table->string('q9114a_5')->nullable();
            $table->string('q9114a_6')->nullable();
            $table->string('q9114a_7')->nullable();
            $table->string('q9114a_8')->nullable();
            $table->string('q9114a_9')->nullable();
            $table->string('q9114a_10')->nullable();
            $table->string('q9114a_11')->nullable();
            $table->string('q9114a_12')->nullable();
            $table->string('q9114a_13')->nullable();
            $table->string('q9114a_14')->nullable();
            $table->string('disponi_amb')->nullable();
            $table->string('nb_ambulance')->nullable();
            $table->string('offre_service_1')->nullable();
            $table->string('offre_service_2')->nullable();
            $table->string('offre_service_3')->nullable();
            $table->string('offre_service_4')->nullable();
            $table->string('offre_service_5')->nullable();
            $table->string('offre_service_6')->nullable();
            $table->string('offre_service_7')->nullable();
            $table->string('offre_service_8')->nullable();
            $table->string('offre_service_9')->nullable();
            $table->string('offre_service_10')->nullable();
            $table->string('offre_service_11')->nullable();
            $table->string('offre_service_12')->nullable();
            $table->string('offre_service_13')->nullable();
            $table->string('offre_service_14')->nullable();
            $table->string('q201_1')->nullable();
            $table->string('q201_2')->nullable();
            $table->string('q201_3')->nullable();
            $table->string('bf126')->nullable();
            $table->string('q9309_1')->nullable();
            $table->string('q9309_2')->nullable();
            $table->string('q9309_3')->nullable();
            $table->string('q9309_4')->nullable();
            $table->string('q9309_5')->nullable();
            $table->string('q9309_6')->nullable();
            $table->string('q9309_7')->nullable();
            $table->string('q9309_8')->nullable();
            $table->string('q9309_9')->nullable();
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
        Schema::dropIfExists('formation_sanitaire_new_datas');
    }
}
