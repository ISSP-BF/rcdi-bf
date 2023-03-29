<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFichierVillagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */

    public function up()
    {
        Schema::create('fichier_villages', function (Blueprint $table) {
            $table->id();
            $table->string('CODE_REGION',255)->nullable();
            $table->string('REGION',255)->nullable();
            $table->string('CODE_PROVINCE',255)->nullable();
            $table->string('PROVINCE',255)->nullable();
            $table->string('CODE_COMMUNE',255)->nullable();
            $table->string('COMMUNE',255)->nullable();
            $table->string('MILIEU_RESIDENCE',255)->nullable();
            $table->string('codeAppel',255)->nullable();
            $table->string('Village_Secteur',255)->nullable();
            $table->string('m5_new',255)->nullable();
            $table->string('Indicateur',255)->nullable();
            $table->string('Valeur',255)->nullable();
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
        Schema::dropIfExists('fichier_villages');
    }
}
