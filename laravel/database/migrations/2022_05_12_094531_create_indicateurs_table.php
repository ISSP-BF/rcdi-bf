<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIndicateursTable extends Migration
{
    /**
     * @return void
     */
    public function up()
    {
        Schema::create('indicateurs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('code')->nullable();
            $table->string('libelle')->nullable();
            $table->text('description')->nullable();
            $table->text('methode_calcule')->nullable();
            $table->string('mode_de_calcule')->nullable();
            $table->integer('groupe_id')->nullable();
            $table->integer('sous_groupe_id')->nullable();
            $table->integer('desagregation_id')->nullable();
            $table->string('periode');

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
        Schema::dropIfExists('indicateurs');
    }
}
