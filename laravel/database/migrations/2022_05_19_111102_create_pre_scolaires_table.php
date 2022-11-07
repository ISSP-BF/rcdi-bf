<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePreScolairesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pre_scolaires', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('annee')->unsigned();
            $table->integer('trimestre')->unsigned();
            $table->string('n_ordre')->nullable();
            $table->integer('region_id')->unsigned();
            $table->integer('province_id')->unsigned();
            $table->integer('commune_id')->unsigned();
            $table->string('ceb')->nullable();
            $table->string('nom_structure')->nullable();
            $table->string('statut')->nullable();
            $table->string('systeme')->nullable();
            $table->integer('NbTotalSalleActivite')->unsigned()->nullable();
            $table->integer('NbGarcon_PS')->unsigned()->nullable();
            $table->integer('NbGarconAbandon_PS')->unsigned()->nullable();
            $table->integer('NbGarcon_MS')->unsigned()->nullable();
            $table->integer('NbGarconAbandon_MS')->unsigned()->nullable();
            $table->integer('NbGarcon_GS')->unsigned()->nullable();
            $table->integer('NbGarconAbandon_GS')->unsigned()->nullable();
            $table->integer('NbTotalGarcon')->unsigned()->nullable();
            $table->integer('NbTotalGarconAbandon')->unsigned()->nullable();
            $table->integer('NbGarcon_PDI')->unsigned()->nullable();
            $table->integer('NbGarconAbandon_PDI')->unsigned()->nullable();
            
            $table->integer('NbFille_PS')->unsigned()->nullable();
            $table->integer('NbFilleAbandon_PS')->unsigned()->nullable();
            $table->integer('NbFille_MS')->unsigned()->nullable();
            $table->integer('NbFilleAbandon_MS')->unsigned()->nullable();
            $table->integer('NbFille_GS')->unsigned()->nullable();
            $table->integer('NbFilleAbandon_GS')->unsigned()->nullable();
            $table->integer('NbTotalFille')->unsigned()->nullable();
            $table->integer('NbTotalFilleAbandon')->unsigned()->nullable();
            $table->integer('NbFille_PDI')->unsigned()->nullable();
            $table->integer('NbFilleAbandon_PDI')->unsigned()->nullable();

            $table->integer('NbTotalEnseignantHomme')->unsigned()->nullable();
            $table->integer('NbTotalEnseignantFemme')->unsigned()->nullable();
            $table->integer('NbEnseignantHommeRedeployes')->unsigned()->nullable();
            $table->integer('NbEnseignantFemmeRedeployes')->unsigned()->nullable();
            $table->integer('NbEnseignantHommeVolontaire')->unsigned()->nullable();
            $table->integer('NbEnseignantFemmeVolontaire')->unsigned()->nullable();
            $table->boolean('ExistenceEspacesRecreatif')->nullable();
            $table->boolean('ExistenceDispositifHygiene')->nullable();
            $table->boolean('ExistenceCantine')->nullable();
            $table->boolean('SourceDotationEtat')->nullable();
            $table->boolean('SourceDotationPartenaire')->nullable();
            $table->boolean('SourceDotationEndogene')->nullable();

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
        Schema::dropIfExists('pre_scolaires');
    }
}
