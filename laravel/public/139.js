(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{856:function(t,a,s){"use strict";s.r(a);var _=s(1),i=s.n(_),n={name:"User",props:{caption:{type:String,default:"User id"}},data:function(){return{postPrimaire:[]}},methods:{goBack:function(){this.$router.go(-1)}},mounted:function(){var t=this;i.a.get(this.$apiAdress+"/api/post_primaires/"+t.$route.params.id+"?token="+localStorage.getItem("api_token")).then((function(a){t.postPrimaire=a.data,console.log(a)})).catch((function(a){console.log(a),t.$router.push({path:"/login"})}))}},e=s(0),r=Object(e.a)(n,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("CRow",[s("CCol",{attrs:{col:"12",lg:"8"}},[s("CCard",[s("CCardHeader",[s("h4",[t._v("Détail de la donnée PostPrimaire id: "+t._s(t.$route.params.id))])]),t._v(" "),s("CCardBody",[s("table",{staticClass:"table table-bordered col-lg-8"},[s("tr",[s("td",{staticClass:"col-lg-6"},[t._v("Année")]),t._v(" "),s("td",[t._v(t._s(t.postPrimaire.annee))])]),t._v(" "),s("tr",[s("td",[t._v("Trimestre")]),t._v(" "),s("td",[t._v(t._s(t.postPrimaire.trimestre))])])]),t._v(" "),s("h5",[t._v("I. IDENTIFICATION DE LA STRUCTURE")]),t._v(" "),s("table",{staticClass:"table table-bordered"},[s("tr",[s("td",{staticClass:"col-lg-4"},[t._v("N° d'ordre")]),t._v(" "),s("td",{staticClass:"col-lg-4"}),t._v(" "),s("td",[t._v(t._s(t.postPrimaire.n_ordre))])]),t._v(" "),s("tr",[s("td",[t._v("REGION")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v(t._s(t.postPrimaire.region))])]),t._v(" "),s("tr",[s("td",[t._v("PROVINCE")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v(t._s(t.postPrimaire.province))])]),t._v(" "),s("tr",[s("td",[t._v("COMMUNE/ARRONDISSEMENT")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v(t._s(t.postPrimaire.commune))])]),t._v(" "),s("tr",[s("td",[t._v("CEB")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v(t._s(t.postPrimaire.ceb))])]),t._v(" "),s("tr",[s("td",[t._v("Nom de la structure")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v(t._s(t.postPrimaire.nom_structure))])]),t._v(" "),s("tr",[s("td",[t._v("Statut")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v(t._s(t.postPrimaire.statut))])]),t._v(" "),s("tr",[s("td",[t._v("Système")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v(t._s(t.postPrimaire.type))])]),t._v(" "),s("tr",[s("td",[t._v("Nombre total de salles d'activités")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v(t._s(t.postPrimaire.NbTotalSalleActivite))])]),t._v(" "),s("tr",[s("td",[t._v("Nombre de latrines fonctionnelles")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v(t._s(t.postPrimaire.NbLatrine))])]),t._v(" "),s("tr",[s("td",[t._v("Nombre de poubelle")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v(t._s(t.postPrimaire.NbPoubelle))])]),t._v(" "),s("tr",[s("td",[t._v("Existance de bacs à ordures")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v(t._s(t.postPrimaire.ExistanceBacOrdure))])]),t._v(" "),s("tr",[s("td",[t._v("Existance de sources d'eau améliorées (fontaine, robinet)")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v(t._s(t.postPrimaire.ExistanceSourceEauAmeliore))])])]),t._v(" "),s("h5",[t._v("II. EFFECTIFS DES ELEVES (auditeurs)")]),t._v(" "),s("table",{staticClass:"table table-bordered"},[s("tr",[s("td"),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Effectifs")]),t._v(" "),s("td",[t._v("effectif ayant eu la moyenne")]),t._v(" "),s("td",[t._v("abandons")])]),t._v(" "),s("tr",[s("td",{staticClass:"col-lg-4",attrs:{rowspan:"2"}},[t._v("6e")]),t._v(" "),s("td",{staticClass:"col-lg-4 no-margin-padding"},[t._v("Garcon")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbGarcon_6e)+"\n                    ")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbGarconMoyenne_6e)+"\n                    ")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbGarconAbandon_6e)+"\n                    ")])]),t._v(" "),s("tr",[s("td",{staticClass:"no-margin-padding"},[t._v("Fille")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbFille_6e)+"\n                    ")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbFilleMoyenne_6e)+"\n                    ")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbFilleAbandon_6e)+"\n                    ")])]),t._v(" "),s("tr",[s("td",{staticClass:"col-lg-4",attrs:{rowspan:"2"}},[t._v("5e")]),t._v(" "),s("td",{staticClass:"col-lg-4 no-margin-padding"},[t._v("Garcon")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbGarcon_5e)+"\n                    ")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbGarconMoyenne_5e)+"\n                    ")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbGarconAbandon_5e)+"\n                    ")])]),t._v(" "),s("tr",[s("td",{staticClass:"no-margin-padding"},[t._v("Fille")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbFille_5e)+"\n                    ")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbFilleMoyenne_5e)+"\n                    ")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbFilleAbandon_5e)+"\n                    ")])]),t._v(" "),s("tr",[s("td",{staticClass:"col-lg-4",attrs:{rowspan:"2"}},[t._v("4e")]),t._v(" "),s("td",{staticClass:"col-lg-4 no-margin-padding"},[t._v("Garcon")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbGarcon_4e)+"\n                    ")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbGarconMoyenne_4e)+"\n                    ")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbGarconAbandon_4e)+"\n                    ")])]),t._v(" "),s("tr",[s("td",{staticClass:"no-margin-padding"},[t._v("Fille")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbFille_4e)+"\n                    ")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbFilleMoyenne_4e)+"\n                    ")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbFilleAbandon_4e)+"\n                    ")])]),t._v(" "),s("tr",[s("td",{staticClass:"col-lg-4",attrs:{rowspan:"2"}},[t._v("3e")]),t._v(" "),s("td",{staticClass:"col-lg-4 no-margin-padding"},[t._v("Garcon")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbGarcon_3e)+"\n                    ")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbGarconMoyenne_3e)+"\n                    ")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbGarconAbandon_3e)+"\n                    ")])]),t._v(" "),s("tr",[s("td",{staticClass:"no-margin-padding"},[t._v("Fille")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbFille_3e)+"\n                    ")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbFilleMoyenne_3e)+"\n                    ")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbFilleAbandon_3e)+"\n                    ")])]),t._v(" "),s("tr",[s("td",{staticClass:"col-lg-4",attrs:{rowspan:"2"}},[t._v("Total")]),t._v(" "),s("td",{staticClass:"col-lg-4 no-margin-padding"},[t._v("Garcon")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbTotalGarcon)+"\n                    ")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbTotalGarconMoyenne)+"\n                    ")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbTotalGarconAbandon)+"\n                    ")])]),t._v(" "),s("tr",[s("td",{staticClass:"no-margin-padding"},[t._v("Fille")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbTotalFille)+"\n                    ")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbTotalFilleMoyenne)+"\n                    ")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbTotalFilleAbandon)+"\n                    ")])]),t._v(" "),s("tr",[s("td",{staticClass:"col-lg-4",attrs:{rowspan:"2"}},[t._v("Déplacés internes")]),t._v(" "),s("td",{staticClass:"col-lg-4 no-margin-padding"},[t._v("Garcon")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbGarcon_PDI)+"\n                    ")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbGarconMoyenne_PDI)+"\n                    ")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbGarconAbandon_PDI)+"\n                    ")])]),t._v(" "),s("tr",[s("td",{staticClass:"no-margin-padding"},[t._v("Fille")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbFille_PDI)+"\n                    ")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbFilleMoyenne_PDI)+"\n                    ")]),t._v(" "),s("td",{staticClass:"no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.NbFilleAbandon_PDI)+"\n                    ")])])]),t._v(" "),s("h5",[t._v("III. EFFECTIFS DES ENSEIGNANTS")]),t._v(" "),s("table",{staticClass:"table table-bordered"},[s("tr",[s("td",{attrs:{colspan:"3"}}),t._v(" "),s("td",[t._v("Effectifs")]),t._v(" "),s("td",[t._v("vacataires")])]),t._v(" "),s("tr",[s("td",{staticClass:"col-lg-4",attrs:{rowspan:"18"}},[t._v("\n                      Effectifs des encadreurs (hors volontaires communautaires)\n                    ")]),t._v(" "),s("td",{staticClass:"col-lg-3",attrs:{rowspan:"2"}},[t._v("Français")]),t._v(" "),s("td",{staticClass:"col-lg-2"},[t._v("Homme")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbHomme_Francais)+"\n                    ")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbHommeVacataire_Francais)+"\n                    ")])]),t._v(" "),s("tr",[s("td",[t._v("Femme")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbFemme_Francais)+"\n                    ")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbFemmeVacataire_Francais)+"\n                    ")])]),t._v(" "),s("tr",[s("td",{attrs:{rowspan:"2"}},[t._v("Anglais")]),t._v(" "),s("td",{staticClass:"col-lg-2"},[t._v("Homme")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbHomme_Anglais)+"\n                    ")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbHommeVacataire_Anglais)+"\n                    ")])]),t._v(" "),s("tr",[s("td",[t._v("Femme")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbFemme_Anglais)+"\n                    ")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbFemmeVacataire_Anglais)+"\n                    ")])]),t._v(" "),s("tr",[s("td",{attrs:{rowspan:"2"}},[t._v("Allemand")]),t._v(" "),s("td",{staticClass:"col-lg-2"},[t._v("Homme")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbHomme_Allemand)+"\n                    ")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbHommeVacataire_Allemand)+"\n                    ")])]),t._v(" "),s("tr",[s("td",[t._v("Femme")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbFemme_Allemand)+"\n                    ")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbFemmeVacataire_Allemand)+"\n                    ")])]),t._v(" "),s("tr",[s("td",{attrs:{rowspan:"2"}},[t._v("Histoire géographie")]),t._v(" "),s("td",{staticClass:"col-lg-2"},[t._v("Homme")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbHomme_HisGeo)+"\n                    ")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbHommeVacataire_HisGeo)+"\n                    ")])]),t._v(" "),s("tr",[s("td",[t._v("Femme")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbFemme_HisGeo)+"\n                    ")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbFemmeVacataire_HisGeo)+"\n                    ")])]),t._v(" "),s("tr",[s("td",{attrs:{rowspan:"2"}},[t._v("Sciences de la vie et de la terre")]),t._v(" "),s("td",{staticClass:"col-lg-2"},[t._v("Homme")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbHomme_SVT)+"\n                    ")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbHommeVacataire_SVT)+"\n                    ")])]),t._v(" "),s("tr",[s("td",[t._v("Femme")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbFemme_SVT)+"\n                    ")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbFemmeVacataire_SVT)+"\n                    ")])]),t._v(" "),s("tr",[s("td",{attrs:{rowspan:"2"}},[t._v("Physiques chimie")]),t._v(" "),s("td",{staticClass:"col-lg-2"},[t._v("Homme")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbHomme_PC)+"\n                    ")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbHommeVacataire_PC)+"\n                    ")])]),t._v(" "),s("tr",[s("td",[t._v("Femme")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbFemme_PC)+"\n                    ")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbFemmeVacataire_PC)+"\n                    ")])]),t._v(" "),s("tr",[s("td",{attrs:{rowspan:"2"}},[t._v("Mathématiques")]),t._v(" "),s("td",{staticClass:"col-lg-2"},[t._v("Homme")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbHomme_Math)+"\n                    ")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbHommeVacataire_Math)+"\n                    ")])]),t._v(" "),s("tr",[s("td",[t._v("Femme")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbFemme_Math)+"\n                    ")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbFemmeVacataire_Math)+"\n                    ")])]),t._v(" "),s("tr",[s("td",{attrs:{rowspan:"2"}},[t._v("Education Physique et sportive")]),t._v(" "),s("td",{staticClass:"col-lg-2"},[t._v("Homme")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbHomme_EPS)+"\n                    ")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbHommeVacataire_EPS)+"\n                    ")])]),t._v(" "),s("tr",[s("td",[t._v("Femme")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbFemme_EPS)+"\n                    ")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbFemmeVacataire_EPS)+"\n                    ")])]),t._v(" "),s("tr",[s("td",{attrs:{rowspan:"2"}},[t._v("Total")]),t._v(" "),s("td",{staticClass:"col-lg-2"},[t._v("Homme")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbTotalEnseignantHomme)+"\n                    ")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbTotalEnseignantHommeVacataire)+"\n                    ")])]),t._v(" "),s("tr",[s("td",[t._v("Femme")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbTotalEnseignantFemme)+"\n                    ")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbTotalEnseignantFemmeVacataire)+"\n                    ")])]),t._v(" "),s("tr",[s("td",{attrs:{rowspan:"2"}},[t._v("\n                      Dont redeployés (arrivés) suite à la fermeture de leur\n                      structure\n                    ")]),t._v(" "),s("td",{attrs:{rowspan:"2"}}),t._v(" "),s("td",[t._v("Homme")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbEnseignantHommeRedeployes)+"\n                    ")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbEnseignantHommeRedeployesVacataire)+"\n                    ")])]),t._v(" "),s("tr",[s("td",[t._v("Femme")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbEnseignantFemmeRedeployes)+"\n                    ")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbEnseignantFemmeRedeployesVacataire)+"\n                    ")])]),t._v(" "),s("tr",[s("td",{attrs:{rowspan:"2"}},[t._v("volontaires communautaires")]),t._v(" "),s("td",{attrs:{rowspan:"2"}}),t._v(" "),s("td",[t._v("Homme")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbEnseignantHommeVolontaire)+"\n                    ")])]),t._v(" "),s("tr",[s("td",[t._v("Femme")]),t._v(" "),s("td",[t._v("\n                      "+t._s(t.postPrimaire.NbEnseignantFemmeVolontaire)+"\n                    ")])])]),t._v(" "),s("h5",[t._v("IV. ENVIRONNEMENT D’APPRENTISSAGE")]),t._v(" "),s("table",{staticClass:"table table-bordered"},[s("tr",[s("td",{staticClass:"col-lg-4"},[t._v("Existence d'espaces récréatifs")]),t._v(" "),s("td",{staticClass:"col-lg-4"}),t._v(" "),s("td",{staticClass:"col-lg-4 no-margin-padding"},[t._v("\n                      "+t._s(t.postPrimaire.ExistenceEspacesRecreatif)+"\n                    ")])]),t._v(" "),s("tr",[s("td",{staticClass:"col-lg-4"},[t._v("\n                      Existence de dispositif d’hygiène\n                    ")]),t._v(" "),s("td",{staticClass:"col-lg-4"}),t._v(" "),s("td",{staticClass:"col-lg-4"},[t._v("\n                      "+t._s(t.postPrimaire.ExistenceDispositifHygiene)+"\n                    ")])]),t._v(" "),s("tr",[s("td",{staticClass:"col-lg-4"},[t._v("Existence cantine")]),t._v(" "),s("td",{staticClass:"col-lg-4"}),t._v(" "),s("td",{staticClass:"col-lg-4"},[t._v("\n                      "+t._s(t.postPrimaire.ExistenceCantine)+"\n                    ")])]),t._v(" "),s("tr",[s("td",{staticClass:"col-lg-4"},[t._v("Source de la dotation")]),t._v(" "),s("td",{staticClass:"col-lg-4"},[t._v("Etat")]),t._v(" "),s("td",{staticClass:"col-lg-4"},[t._v("\n                      "+t._s(t.postPrimaire.SourceDotationEtat)+"\n                    ")])]),t._v(" "),s("tr",[s("td",{staticClass:"col-lg-4"}),t._v(" "),s("td",{staticClass:"col-lg-4"},[t._v("Partenaire")]),t._v(" "),s("td",{staticClass:"col-lg-4"},[t._v("\n                      "+t._s(t.postPrimaire.SourceDotationPartenaire)+"\n                    ")])]),t._v(" "),s("tr",[s("td",{staticClass:"col-lg-4"}),t._v(" "),s("td",{staticClass:"col-lg-4"},[t._v("Endogène")]),t._v(" "),s("td",{staticClass:"col-lg-4"},[t._v("\n                      "+t._s(t.postPrimaire.SourceDotationEndogene)+"\n                    ")])])])]),t._v(" "),s("CCardFooter",[s("CButton",{attrs:{color:"secondary"},on:{click:t.goBack}},[t._v("Retour")]),t._v(" "),s("div",{staticClass:"row float-right"},[s("div",[t._v("Créateur :")]),t._v(" "),s("div",[t._v("\n            "+t._s(t.postPrimaire.created_by)+"\n            "),s("CBadge",{attrs:{color:"primary"}},[t._v(t._s(t._f("formatDate")(t.postPrimaire.created_at)))])],1),t._v(" "),s("div",[t._v("Modificateur :")]),t._v(" "),s("div",[t._v("\n            "+t._s(t.postPrimaire.updated_by)+"\n            "),s("CBadge",{attrs:{color:"danger"}},[t._v(t._s(t._f("formatDate")(t.postPrimaire.updated_at)))])],1)])],1)],1)],1)],1)}),[],!1,null,null,null);a.default=r.exports}}]);