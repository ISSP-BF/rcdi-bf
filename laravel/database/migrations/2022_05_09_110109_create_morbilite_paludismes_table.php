<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMorbilitePaludismesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     * 'NbCas_Suspect_Palu','NbCas_PaluSimple_Confirme','NbCas_PaluSimple_Presume','NbCas_PaluGrave_Confirme','NbCas_PaluGrave_Presume','NbCas_Deces_PaluGrave',
     */
    public function up()
    {
        Schema::create('morbilite_paludismes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('region_id')->unsigned();
            $table->integer('province_id')->unsigned();
            $table->integer('commune_id')->unsigned();
            $table->integer('district_id')->unsigned();
            $table->integer('formation_sanitaire_id')->unsigned();
            $table->integer('annee')->unsigned();
            $table->integer('mois')->unsigned();

            $table->string('NbCas_Suspect_Palu')->nullable();
            $table->string('NbCas_PaluSimple_Confirme')->nullable();
            $table->string('NbCas_PaluSimple_Presume')->nullable();
            $table->string('NbCas_PaluGrave_Confirme')->nullable();
            $table->string('NbCas_PaluGrave_Presume')->nullable();
            $table->string('NbCas_Deces_PaluGrave')->nullable();

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
        Schema::dropIfExists('morbilite_paludismes');
    }
}
