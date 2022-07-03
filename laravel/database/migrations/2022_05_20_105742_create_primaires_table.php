<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePrimairesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('primaires', function (Blueprint $table) {
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
            $table->string('type')->nullable();
            $table->integer('NbTotalSalleActivite')->unsigned()->nullable();
            $table->integer('NbGarcon_CP1')->unsigned()->nullable();
            $table->integer('NbGarconMoyenne_CP1')->unsigned()->nullable();
            $table->integer('NbGarconAbandon_CP1')->unsigned()->nullable();
            $table->integer('NbGarcon_CP2')->unsigned()->nullable();
            $table->integer('NbGarconMoyenne_CP2')->unsigned()->nullable();
            $table->integer('NbGarconAbandon_CP2')->unsigned()->nullable();
            $table->integer('NbGarcon_CE1')->unsigned()->nullable();
            $table->integer('NbGarconMoyenne_CE1')->unsigned()->nullable();
            $table->integer('NbGarconAbandon_CE1')->unsigned()->nullable();
            $table->integer('NbGarcon_CE2')->unsigned()->nullable();
            $table->integer('NbGarconMoyenne_CE2')->unsigned()->nullable();
            $table->integer('NbGarconAbandon_CE2')->unsigned()->nullable();
            $table->integer('NbGarcon_CM1')->unsigned()->nullable();
            $table->integer('NbGarconMoyenne_CM1')->unsigned()->nullable();
            $table->integer('NbGarconAbandon_CM1')->unsigned()->nullable();
            $table->integer('NbGarcon_CM2')->unsigned()->nullable();
            $table->integer('NbGarconMoyenne_CM2')->unsigned()->nullable();
            $table->integer('NbGarconAbandon_CM2')->unsigned()->nullable();
            $table->integer('NbTotalGarcon')->unsigned()->nullable();
            $table->integer('NbTotalGarconMoyenne')->unsigned()->nullable();
            $table->integer('NbTotalGarconAbandon')->unsigned()->nullable();
            $table->integer('NbGarcon_PDI')->unsigned()->nullable();
            $table->integer('NbGarconMoyenne_PDI')->unsigned()->nullable();
            $table->integer('NbGarconAbandon_PDI')->unsigned()->nullable();
            $table->integer('NbFille_CP1')->unsigned()->nullable();
            $table->integer('NbFilleMoyenne_CP1')->unsigned()->nullable();
            $table->integer('NbFilleAbandon_CP1')->unsigned()->nullable();
            $table->integer('NbFille_CP2')->unsigned()->nullable();
            $table->integer('NbFilleMoyenne_CP2')->unsigned()->nullable();
            $table->integer('NbFilleAbandon_CP2')->unsigned()->nullable();
            $table->integer('NbFille_CE1')->unsigned()->nullable();
            $table->integer('NbFilleMoyenne_CE1')->unsigned()->nullable();
            $table->integer('NbFilleAbandon_CE1')->unsigned()->nullable();
            $table->integer('NbFille_CE2')->unsigned()->nullable();
            $table->integer('NbFilleMoyenne_CE2')->unsigned()->nullable();
            $table->integer('NbFilleAbandon_CE2')->unsigned()->nullable();
            $table->integer('NbFille_CM1')->unsigned()->nullable();
            $table->integer('NbFilleMoyenne_CM1')->unsigned()->nullable();
            $table->integer('NbFilleAbandon_CM1')->unsigned()->nullable();
            $table->integer('NbFille_CM2')->unsigned()->nullable();
            $table->integer('NbFilleMoyenne_CM2')->unsigned()->nullable();
            $table->integer('NbFilleAbandon_CM2')->unsigned()->nullable();
            $table->integer('NbTotalFille')->unsigned()->nullable();
            $table->integer('NbTotalFilleMoyenne')->unsigned()->nullable();
            $table->integer('NbTotalFilleAbandon')->unsigned()->nullable();
            $table->integer('NbFille_PDI')->unsigned()->nullable();
            $table->integer('NbFilleMoyenne_PDI')->unsigned()->nullable();
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
            $table->boolean('updated')->nullable()->default(null);
            
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
        Schema::dropIfExists('primaires');
    }
}
