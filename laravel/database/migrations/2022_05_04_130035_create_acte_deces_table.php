<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActeDecesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('acte_deces', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('region_id')->unsigned();
            $table->integer('province_id')->unsigned();
            $table->integer('commune_id')->unsigned();
            $table->string('n_acte');
            $table->date('date_declaration')->nullable();
            // $table->string('nom')->nullable();
            // $table->string('prenom')->nullable();
            $table->date('date_naissance')->nullable();
            $table->date('date_deces')->nullable();
            $table->integer('age')->nullable();
            $table->string('sexe')->nullable();
            $table->date('date_etablissement')->nullable();
            $table->integer('profession_id')->nullable();
            $table->string('statut_matrimonial')->nullable();// ENUM : MARIE/DIVORCE/VEUF/CELIBATAIRE
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
        Schema::dropIfExists('acte_deces');
    }
}
