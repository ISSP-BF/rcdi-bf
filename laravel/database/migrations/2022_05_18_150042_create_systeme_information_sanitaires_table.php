<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSystemeInformationSanitairesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     * 'type_rapport','rapport_attendu','rapport_recu','rapport_recu_temps',
    */
    public function up()
    {
        Schema::create('systeme_information_sanitaires', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('region_id')->unsigned();
            $table->integer('province_id')->unsigned();
            $table->integer('commune_id')->unsigned();
            $table->integer('district_id')->unsigned();
            $table->integer('formation_sanitaire_id')->unsigned();
            $table->integer('annee')->unsigned();
            $table->integer('mois')->unsigned();

            $table->string('type_rapport')->nullable(); //Consultation Prénatale, Vaccination, Planification Familiale, Accouchement, Consultation, Hospitalisation
            $table->string('rapport_attendu')->nullable();
            $table->string('rapport_recu')->nullable();
            $table->string('rapport_recu_temps')->nullable();

            $table->integer('updated_by')->unsigned()->nullable();
            $table->integer('created_by')->unsigned()->nullable();
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
        Schema::dropIfExists('systeme_information_sanitaires');
    }
}
