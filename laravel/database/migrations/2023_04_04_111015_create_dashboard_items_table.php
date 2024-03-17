<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDashboardItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dashboard_items', function (Blueprint $table) {
            $table->id();
            $table->integer('dashboard_id')->nullable();
            $table->string('libelle',255)->nullable();
            $table->text('requete')->nullable();
            $table->string('graphique',255)->nullable();
            $table->text('description')->nullable();
            
            $table->enum('type_seuil', ['VALEUR_REFERENCE', 'DATE_REFERENCE','MOYENNE'])->nullable();
            $table->float('seuil_valeur_reference')->nullable();
            $table->enum('seuil_periode', ['TRIMESTRIEL', 'MENSUEL','ANNUEL']);
            /**
             * Si c'est mensuel =[1,2,3,4,5,6,7,8,9,10,11,12]
             * Si c'est trimestriel =[1,2,3,4]
             * Si c'est semestriel =[1,2]
             * Si c'est annuel = [2019,2020,2021]
             */
            $table->integer('seuil_periode_value')->unsigned();
            $table->integer('seuil_annee')->unsigned();
            $table->string('seuil_couleur',255)->nullable();
            $table->text('seuil_segment_list')->nullable();
            $table->integer('i')->default(0)->nullable();
            $table->integer('x')->default(0)->nullable();
            $table->integer('y')->default(0)->nullable();
            $table->integer('w')->default(0)->nullable();
            $table->integer('h')->default(0)->nullable();
            $table->boolean('static')->default(true)->nullable();
            $table->tinyInteger('updated')->nullable()->default(0);
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
        Schema::dropIfExists('dashboard_items');
    }
}
