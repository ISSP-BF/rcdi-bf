<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActeMariagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('acte_mariages', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('region_id')->unsigned();
            $table->integer('province_id')->unsigned();
            $table->integer('commune_id')->unsigned();
            
            $table->string('n_acte');
            $table->date('date_etablissement');

            // Les informations du conjoint
            // $table->string('nom_conjoint')->nullable();
            // $table->string('prenom_conjoint')->nullable();
            $table->date('date_naissance_conjoint');
            $table->string('age_mariage_conjoint');
            $table->string('sexe_conjoint');
            $table->string('hors_commune_conjoint');
            $table->string('commune_naissance_conjoint')->nullable();
            $table->string('localite_naissance_conjoint')->nullable();
            $table->string('domicile_conjoint');
            $table->string('profession_conjoint')->nullable();
            $table->integer('profession_conjoint_id')->nullable();
            // Les informations de la conjointe
            // $table->string('nom_conjointe')->nullable();
            // $table->string('prenom_conjointe')->nullable();
            $table->date('date_naissance_conjointe');
            $table->string('age_mariage_conjointe');
            $table->string('sexe_conjointe');
            $table->string('hors_commune_conjointe');
            $table->string('commune_naissance_conjointe')->nullable();
            $table->string('localite_naissance_conjointe')->nullable();
            $table->string('domicile_conjointe');
            $table->string('profession_conjointe')->nullable();
            $table->integer('profession_conjointe_id')->nullable();

            // Les informations communes
            $table->string('regime_matrimonial'); // statut_matrimonial
            $table->string('option_matrimonial'); // regime_matrimonial

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
        Schema::dropIfExists('acte_mariages');
    }
}
