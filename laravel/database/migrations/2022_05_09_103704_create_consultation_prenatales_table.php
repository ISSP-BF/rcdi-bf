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

            $table->integer('NbFemmeVueCPN')->nullable();
            $table->integer('NbFemmeInscriteCPN1')->nullable();
            $table->integer('NbFemmeInscriteCPN1_Trim1')->nullable();
            $table->integer('NbFemmeVueCPN4')->nullable();
            $table->integer('NbFemmeInscriteVueCPN_2Td')->nullable();
            $table->integer('NbFemmeFer_Acide_Folique')->nullable();
            $table->integer('NbFemmeFer_Acide_Folique_CPN3')->nullable();
            $table->integer('NbGrossesse_Refere')->nullable();
            $table->integer('NbFemmeVueCPN_TPI3')->nullable();
            $table->integer('NbFemmeVueCPN_TPI3_MILDA')->nullable();

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
