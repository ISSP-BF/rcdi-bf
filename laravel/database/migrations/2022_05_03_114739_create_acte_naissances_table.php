<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActeNaissancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('acte_naissances', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('region_id')->unsigned();
            $table->integer('province_id')->unsigned();
            $table->integer('commune_id')->unsigned();
            $table->string('n_acte');
            // $table->string('nom')->nullable();
            // $table->string('prenom')->nullable();
            $table->date('date_naissance')->nullable();
            $table->string('sexe')->nullable();
            $table->date('date_declaration')->nullable();
            $table->date('date_etablissement')->nullable();
            $table->string('lieu_naissance_commune')->nullable();
            $table->string('centre_sante_naissance')->nullable();
            $table->integer('formation_sanitaire_id')->nullable();
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
        Schema::dropIfExists('acte_naissances');
    }
}
