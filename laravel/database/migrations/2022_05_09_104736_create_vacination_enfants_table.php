<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVacinationEnfantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vacination_enfants', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('region_id')->unsigned();
            $table->integer('province_id')->unsigned();
            $table->integer('commune_id')->unsigned();
            $table->integer('district_id')->unsigned();
            $table->integer('formation_sanitaire_id')->unsigned();
            $table->integer('annee')->unsigned();
            $table->integer('mois')->unsigned();

            $table->string('NbBCG')->nullable();
            $table->string('NbDTCHepBHib1')->nullable();
            $table->string('NbDTCHepBHib')->nullable();
            $table->string('NbRR1')->nullable();

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
        Schema::dropIfExists('vacination_enfants');
    }
}
