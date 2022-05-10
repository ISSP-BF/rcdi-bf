<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConsultationPrenatalesTable extends Migration
{
    /**
     * Run the migrations.
     * NbFemmeVueCPN_TPI3_MILDA
     * @return void
     */
    public function up()
    {
        Schema::create('consultation_prenatales', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('region_id')->unsigned();
            $table->integer('province_id')->unsigned();
            $table->integer('commune_id')->unsigned();
            $table->integer('district_id')->unsigned();
            $table->integer('formation_sanitaire_id')->unsigned();
            $table->integer('annee')->unsigned();
            $table->integer('mois')->unsigned();

            $table->string('NbFemmeVueCPN')->nullable();
            $table->string('NbFemmeInscriteCPN1')->nullable();
            $table->string('NbFemmeInscriteCPN1_Trim1')->nullable();
            $table->string('NbFemmeVueCPN4')->nullable();
            $table->string('NbFemmeInscriteVueCPN_2Td')->nullable();
            $table->string('NbFemmeFer_Acide_Folique')->nullable();
            $table->string('NbFemmeFer_Acide_Folique_CPN3')->nullable();
            $table->string('NbGrossesse_Refere')->nullable();
            $table->string('NbFemmeVueCPN_TPI3')->nullable();
            $table->string('NbFemmeVueCPN_TPI3_MILDA')->nullable();

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
        Schema::dropIfExists('consultation_prenatales');
    }
}
