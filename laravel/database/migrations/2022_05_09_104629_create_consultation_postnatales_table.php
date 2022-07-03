<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConsultationPostnatalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    /*
    'NbFemmeVueConsultation_PostNatale',
    'NbFemmeVueConsultation_PostNatalePrecoce',
    'NbFemmeVueConsultation_PostNataleTardive',
    */
    public function up()
    {
        Schema::create('consultation_postnatales', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('region_id')->unsigned();
            $table->integer('province_id')->unsigned();
            $table->integer('commune_id')->unsigned();
            $table->integer('district_id')->unsigned();
            $table->integer('formation_sanitaire_id')->unsigned();
            $table->integer('annee')->unsigned();
            $table->integer('mois')->unsigned();

            $table->string('NbFemmeVueConsultation_PostNatale')->nullable();
            $table->string('NbFemmeVueConsultation_PostNatalePrecoce')->nullable();
            $table->string('NbFemmeVueConsultation_PostNataleTardive')->nullable();

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
        Schema::dropIfExists('consultation_postnatales');
    }
}
