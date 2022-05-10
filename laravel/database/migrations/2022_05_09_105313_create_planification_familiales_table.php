<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlanificationFamilialesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('planification_familiales', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('region_id')->unsigned();
            $table->integer('province_id')->unsigned();
            $table->integer('commune_id')->unsigned();
            $table->integer('district_id')->unsigned();
            $table->integer('formation_sanitaire_id')->unsigned();
            $table->integer('annee')->unsigned();
            $table->integer('mois')->unsigned();

            $table->string('type_utilisatrices')->nullable();
            $table->string('NbPillule_COC')->nullable();
            $table->string('NbPillule_COP')->nullable();
            $table->string('NbDMPlule_IM')->nullable();
            $table->string('NbDMPA_IM')->nullable();
            $table->string('NbImplant_5ans')->nullable();
            $table->string('NbImplant_3ans')->nullable();
            $table->string('NbDIU')->nullable();
            $table->string('NbPreservatif_Masculin')->nullable();
            $table->string('NbPreservatif_Feminin')->nullable();
            $table->string('NbLigature')->nullable();
            $table->string('NbVasectomie')->nullable();
            $table->string('NbCollier_Cycle')->nullable();
            $table->string('NbMethode_maman')->nullable();

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
        Schema::dropIfExists('planification_familiales');
    }
}
