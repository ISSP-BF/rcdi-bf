<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAccouchementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    /*
   'NbAccouchement_Normaux',
   'NbAccouchement_Assiste',
   'NbAccouchement_Cesarienne',
   'NbAccouchement_Partogramme',
   'NNaissance_vivante',
   'NbMortNe_frais',
   'NbMortNe_Macere',
    */
    public function up()
    {
        Schema::create('accouchements', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('region_id')->unsigned();
            $table->integer('province_id')->unsigned();
            $table->integer('commune_id')->unsigned();
            $table->integer('district_id')->unsigned();
            $table->integer('formation_sanitaire_id')->unsigned();
            $table->integer('annee')->unsigned();
            $table->integer('mois')->unsigned();

            $table->string('NbAccouchement_Normaux')->nullable();
            $table->string('NbAccouchement_Assiste')->nullable();
            $table->string('NbAccouchement_Cesarienne')->nullable();
            $table->string('NbAccouchement_Partogramme')->nullable();
            $table->string('NNaissance_vivante')->nullable();
            $table->string('NbMortNe_frais')->nullable();
            $table->string('NbMortNe_Macere')->nullable();

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
        Schema::dropIfExists('accouchements');
    }
}
