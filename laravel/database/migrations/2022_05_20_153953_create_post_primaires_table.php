<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostPrimairesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('post_primaires', function (Blueprint $table) {
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
            $table->integer('NbPoubelle')->unsigned()->nullable();
            $table->integer('NbLatrine')->unsigned()->nullable();
            $table->boolean('ExistanceBacOrdure')->nullable();
            $table->boolean('ExistanceSourceEauAmeliore')->nullable();
            $table->integer('NbGarcon_6e')->unsigned()->nullable();
            $table->integer('NbGarconMoyenne_6e')->unsigned()->nullable();
            $table->integer('NbGarconAbandon_6e')->unsigned()->nullable();
            $table->integer('NbGarcon_5e')->unsigned()->nullable();
            $table->integer('NbGarconMoyenne_5e')->unsigned()->nullable();
            $table->integer('NbGarconAbandon_5e')->unsigned()->nullable();
            $table->integer('NbGarcon_4e')->unsigned()->nullable();
            $table->integer('NbGarconMoyenne_4e')->unsigned()->nullable();
            $table->integer('NbGarconAbandon_4e')->unsigned()->nullable();
            $table->integer('NbGarcon_3e')->unsigned()->nullable();
            $table->integer('NbGarconMoyenne_3e')->unsigned()->nullable();
            $table->integer('NbGarconAbandon_3e')->unsigned()->nullable();
            $table->integer('NbTotalGarcon')->unsigned()->nullable();
            $table->integer('NbTotalGarconMoyenne')->unsigned()->nullable();
            $table->integer('NbTotalGarconAbandon')->unsigned()->nullable();
            $table->integer('NbGarcon_PDI')->unsigned()->nullable();
            $table->integer('NbGarconMoyenne_PDI')->unsigned()->nullable();
            $table->integer('NbGarconAbandon_PDI')->unsigned()->nullable();
            
            $table->integer('NbFille_6e')->unsigned()->nullable();
            $table->integer('NbFilleMoyenne_6e')->unsigned()->nullable();
            $table->integer('NbFilleAbandon_6e')->unsigned()->nullable();
            $table->integer('NbFilleEnceinte_6e')->unsigned()->nullable();
            $table->integer('NbFille_5e')->unsigned()->nullable();
            $table->integer('NbFilleMoyenne_5e')->unsigned()->nullable();
            $table->integer('NbFilleAbandon_5e')->unsigned()->nullable();
            $table->integer('NbFilleEnceinte_5e')->unsigned()->nullable();
            $table->integer('NbFille_4e')->unsigned()->nullable();
            $table->integer('NbFilleMoyenne_4e')->unsigned()->nullable();
            $table->integer('NbFilleAbandon_4e')->unsigned()->nullable();
            $table->integer('NbFilleEnceinte_4e')->unsigned()->nullable();
            $table->integer('NbFille_3e')->unsigned()->nullable();
            $table->integer('NbFilleMoyenne_3e')->unsigned()->nullable();
            $table->integer('NbFilleAbandon_3e')->unsigned()->nullable();
            $table->integer('NbFilleEnceinte_3e')->unsigned()->nullable();
            $table->integer('NbTotalFille')->unsigned()->nullable();
            $table->integer('NbTotalFilleMoyenne')->unsigned()->nullable();
            $table->integer('NbTotalFilleAbandon')->unsigned()->nullable();
            $table->integer('NbTotalFilleEnceinte')->unsigned()->nullable();
            $table->integer('NbFille_PDI')->unsigned()->nullable();
            $table->integer('NbFilleMoyenne_PDI')->unsigned()->nullable();
            $table->integer('NbFilleAbandon_PDI')->unsigned()->nullable();
            $table->integer('NbFilleEnceinte_PDI')->unsigned()->nullable();

            $table->integer('NbHomme_Francais')->unsigned()->nullable();
            $table->integer('NbHommeVacataire_Francais')->unsigned()->nullable();
            $table->integer('NbHomme_Anglais')->unsigned()->nullable();
            $table->integer('NbHommeVacataire_Anglais')->unsigned()->nullable();
            $table->integer('NbHomme_Allemand')->unsigned()->nullable();
            $table->integer('NbHommeVacataire_Allemand')->unsigned()->nullable();
            $table->integer('NbHomme_HisGeo')->unsigned()->nullable();
            $table->integer('NbHommeVacataire_HisGeo')->unsigned()->nullable();
            $table->integer('NbHomme_SVT')->unsigned()->nullable();
            $table->integer('NbHommeVacataire_SVT')->unsigned()->nullable();
            $table->integer('NbHomme_PC')->unsigned()->nullable();
            $table->integer('NbHommeVacataire_PC')->unsigned()->nullable();
            $table->integer('NbHomme_Math')->unsigned()->nullable();
            $table->integer('NbHommeVacataire_Math')->unsigned()->nullable();
            $table->integer('NbHomme_EPS')->unsigned()->nullable();
            $table->integer('NbHommeVacataire_EPS')->unsigned()->nullable();
            $table->integer('NbTotalEnseignantHomme')->unsigned()->nullable();
            $table->integer('NbTotalEnseignantHommeVacataire')->unsigned()->nullable();
            $table->integer('NbEnseignantHommeRedeployes')->unsigned()->nullable();
            $table->integer('NbEnseignantHommeRedeployesVacataire')->unsigned()->nullable();
            $table->integer('NbEnseignantHommeVolontaire')->unsigned()->nullable();
            $table->integer('NbFemme_Francais')->unsigned()->nullable();
            $table->integer('NbFemmeVacataire_Francais')->unsigned()->nullable();
            $table->integer('NbFemme_Anglais')->unsigned()->nullable();
            $table->integer('NbFemmeVacataire_Anglais')->unsigned()->nullable();
            $table->integer('NbFemme_Allemand')->unsigned()->nullable();
            $table->integer('NbFemmeVacataire_Allemand')->unsigned()->nullable();
            $table->integer('NbFemme_HisGeo')->unsigned()->nullable();
            $table->integer('NbFemmeVacataire_HisGeo')->unsigned()->nullable();
            $table->integer('NbFemme_SVT')->unsigned()->nullable();
            $table->integer('NbFemmeVacataire_SVT')->unsigned()->nullable();
            $table->integer('NbFemme_PC')->unsigned()->nullable();
            $table->integer('NbFemmeVacataire_PC')->unsigned()->nullable();
            $table->integer('NbFemme_Math')->unsigned()->nullable();
            $table->integer('NbFemmeVacataire_Math')->unsigned()->nullable();
            $table->integer('NbFemme_EPS')->unsigned()->nullable();
            $table->integer('NbFemmeVacataire_EPS')->unsigned()->nullable();
            $table->integer('NbTotalEnseignantFemme')->unsigned()->nullable();
            $table->integer('NbTotalEnseignantFemmeVacataire')->unsigned()->nullable();
            $table->integer('NbEnseignantFemmeRedeployes')->unsigned()->nullable();
            $table->integer('NbEnseignantFemmeRedeployesVacataire')->unsigned()->nullable();
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
        Schema::dropIfExists('post_primaires');
    }
}
