<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFormationSanitairesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('formation_sanitaires', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('region_id')->unsigned();
            $table->integer('province_id')->unsigned();
            $table->integer('commune_id')->unsigned();
            $table->integer('district_id')->unsigned();
            $table->string('code')->nullable();
            $table->string('nom_structure');
            $table->string('lon')->nullable();
            $table->string('lat')->nullable();
            $table->string('type')->nullable();
            $table->string('adresse')->nullable();
            $table->string('adresse_postale')->nullable();
            $table->string('tel')->nullable();
            $table->string('fax')->nullable();
            $table->string('email')->nullable();
            $table->string('titre')->nullable();
            $table->string('proprietaire')->nullable();
            $table->string('qualificat')->nullable();
            $table->string('n_decision')->nullable();
            $table->date('date_autorisation')->nullable();
            $table->text('observations_qualification')->nullable();
            $table->text('observations_structure')->nullable();
            $table->text('autre_observations')->nullable();
            $table->date('date_fermeture')->nullable();
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
        Schema::dropIfExists('formation_sanitaires');
    }
}
