<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDonneesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('donnees', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('groupe_id')->nullable();
            $table->integer('indicateur_id')->nullable();
            $table->integer('sous_indicateur_id')->nullable();
            $table->integer('localisation_id')->nullable();
            $table->float('valeur')->nullable();
            $table->enum('periode', ['TRIMESTRIEL', 'MENSUEL','ANNUEL']);
            
            // $table->integer('trimestre')->unsigned();
            // $table->integer('mois')->unsigned();
            /**
             * Si c'est mensuel =[1,2,3,4,5,6,7,8,9,10,11,12]
             * Si c'est trimestriel =[1,2,3,4]
             * Si c'est semestriel =[1,2]
             * Si c'est annuel = [2019,2020,2021]
             */
            $table->integer('periode_value')->unsigned();
            $table->integer('annee')->unsigned();
            $table->string('source')->nullable();


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
        Schema::dropIfExists('donnees');
    }
}
