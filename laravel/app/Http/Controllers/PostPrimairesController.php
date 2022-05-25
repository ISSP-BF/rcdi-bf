<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\PostPrimaires;

class PostPrimairesController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $postPrimaires = DB::table('post_primaires')
        
        ->leftJoin('provinces', function($join){
            $join->on('post_primaires.province_id', '=', 'provinces.id');
        })
        ->leftJoin('communes', function($join){
            $join->on('post_primaires.commune_id', '=', 'communes.id');
        })
        ->leftJoin('regions', function($join){
            $join->on('post_primaires.region_id', '=', 'regions.id');
        })
        ->leftJoin('users', function($join){
            $join->on('post_primaires.created_by', '=', 'users.id');
        })
        ->leftJoin('users as users2', function($join){
            $join->on('post_primaires.updated_by', '=', 'users2.id');
        })
        ->select('post_primaires.*', 'users.name as created_by','users2.name as updated_by', 'regions.region as region',
        'provinces.province as province','communes.commune as commune',
        DB::raw('(CASE WHEN post_primaires.ExistenceEspacesRecreatif = 1 THEN "OUI" ELSE "NON" END) AS ExistenceEspacesRecreatif'),
        DB::raw('(CASE WHEN post_primaires.ExistenceDispositifHygiene = 1 THEN "OUI" ELSE "NON" END) AS ExistenceDispositifHygiene'),
        DB::raw('(CASE WHEN post_primaires.ExistenceCantine = 1 THEN "OUI" ELSE "NON" END) AS ExistenceCantine'),
        DB::raw('(CASE WHEN post_primaires.SourceDotationEtat = 1 THEN "OUI" ELSE "NON" END) AS SourceDotationEtat'),
        DB::raw('(CASE WHEN post_primaires.SourceDotationPartenaire = 1 THEN "OUI" ELSE "NON" END) AS SourceDotationPartenaire'),
        DB::raw('(CASE WHEN post_primaires.SourceDotationEndogene = 1 THEN "OUI" ELSE "NON" END) AS SourceDotationEndogene'),
        )
        ->get();
        return response()->json( $postPrimaires );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $regions = DB::table('regions')->select('regions.region as label', 'regions.id as value')->get();
        $provinces = DB::table('provinces')->select('provinces.province as label', 'provinces.id as value','provinces.region_id as region_id')->get();
        $communes = DB::table('communes')->select('communes.commune as label', 'communes.id as value','communes.province_id as province_id')->get();
        return response()->json( ['communes'=>$communes,'regions'=>$regions,'provinces'=>$provinces] );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'region_id' => 'required',
            'province_id' => 'required',
            'commune_id' => 'required',
            'annee' => 'required',
            'trimestre' => 'required'
        ]);
        $user = auth()->userOrFail();
        $postPrimaire = new PostPrimaires();
        
        $postPrimaire->region_id = $request->input('region_id');
        $postPrimaire->province_id = $request->input('province_id');
        $postPrimaire->commune_id = $request->input('commune_id');
        $postPrimaire->annee = $request->input('annee');
        $postPrimaire->trimestre = $request->input('trimestre');
        
        $postPrimaire->ceb = $request->input('ceb');
        $postPrimaire->nom_structure = $request->input('nom_structure');
        $postPrimaire->statut = $request->input('statut');
        $postPrimaire->type = $request->input('type');
        $postPrimaire->n_ordre = $request->input('n_ordre');

        $postPrimaire->NbTotalSalleActivite = $request->input('NbTotalSalleActivite');
        $postPrimaire->NbGarcon_6e = $request->input('NbGarcon_6e');
        $postPrimaire->NbGarconMoyenne_6e = $request->input('NbGarconMoyenne_6e');
        $postPrimaire->NbGarconAbandon_6e = $request->input('NbGarconAbandon_6e');
        $postPrimaire->NbGarcon_5e = $request->input('NbGarcon_5e');
        $postPrimaire->NbGarconMoyenne_5e = $request->input('NbGarconMoyenne_5e');
        $postPrimaire->NbGarconAbandon_5e = $request->input('NbGarconAbandon_5e');
        $postPrimaire->NbGarcon_4e = $request->input('NbGarcon_4e');
        $postPrimaire->NbGarconMoyenne_4e = $request->input('NbGarconMoyenne_4e');
        $postPrimaire->NbGarconAbandon_4e = $request->input('NbGarconAbandon_4e');
        $postPrimaire->NbGarcon_3e = $request->input('NbGarcon_3e');
        $postPrimaire->NbGarconMoyenne_3e = $request->input('NbGarconMoyenne_3e');
        $postPrimaire->NbGarconAbandon_3e = $request->input('NbGarconAbandon_3e');
        $postPrimaire->NbTotalGarcon = $request->input('NbTotalGarcon');
        $postPrimaire->NbTotalGarconMoyenne = $request->input('NbTotalGarconMoyenne');
        $postPrimaire->NbTotalGarconAbandon = $request->input('NbTotalGarconAbandon');
        $postPrimaire->NbGarcon_PDI = $request->input('NbGarcon_PDI');
        $postPrimaire->NbGarconMoyenne_PDI = $request->input('NbGarconMoyenne_PDI');
        $postPrimaire->NbGarconAbandon_PDI = $request->input('NbGarconAbandon_PDI');
        $postPrimaire->NbFille_6e = $request->input('NbFille_6e');
        $postPrimaire->NbFilleMoyenne_6e = $request->input('NbFilleMoyenne_6e');
        $postPrimaire->NbFilleAbandon_6e = $request->input('NbFilleAbandon_6e');
        $postPrimaire->NbFille_5e = $request->input('NbFille_5e');
        $postPrimaire->NbFilleMoyenne_5e = $request->input('NbFilleMoyenne_5e');
        $postPrimaire->NbFilleAbandon_5e = $request->input('NbFilleAbandon_5e');
        $postPrimaire->NbFille_4e = $request->input('NbFille_4e');
        $postPrimaire->NbFilleMoyenne_4e = $request->input('NbFilleMoyenne_4e');
        $postPrimaire->NbFilleAbandon_4e = $request->input('NbFilleAbandon_4e');
        $postPrimaire->NbFille_3e = $request->input('NbFille_3e');
        $postPrimaire->NbFilleMoyenne_3e = $request->input('NbFilleMoyenne_3e');
        $postPrimaire->NbFilleAbandon_3e = $request->input('NbFilleAbandon_3e');
        $postPrimaire->NbTotalFille = $request->input('NbTotalFille');
        $postPrimaire->NbTotalFilleMoyenne = $request->input('NbTotalFilleMoyenne');
        $postPrimaire->NbTotalFilleAbandon = $request->input('NbTotalFilleAbandon');
        $postPrimaire->NbFille_PDI = $request->input('NbFille_PDI');
        $postPrimaire->NbFilleMoyenne_PDI = $request->input('NbFilleMoyenne_PDI');
        $postPrimaire->NbFilleAbandon_PDI = $request->input('NbFilleAbandon_PDI');
        $postPrimaire->NbHomme_Francais = $request->input('NbHomme_Francais');
        $postPrimaire->NbHommeVacataire_Francais = $request->input('NbHommeVacataire_Francais');
        $postPrimaire->NbHomme_Anglais = $request->input('NbHomme_Anglais');
        $postPrimaire->NbHommeVacataire_Anglais = $request->input('NbHommeVacataire_Anglais');
        $postPrimaire->NbHomme_Allemand = $request->input('NbHomme_Allemand');
        $postPrimaire->NbHommeVacataire_Allemand = $request->input('NbHommeVacataire_Allemand');
        $postPrimaire->NbHomme_HisGeo = $request->input('NbHomme_HisGeo');
        $postPrimaire->NbHommeVacataire_HisGeo = $request->input('NbHommeVacataire_HisGeo');
        $postPrimaire->NbHomme_SVT = $request->input('NbHomme_SVT');
        $postPrimaire->NbHommeVacataire_SVT = $request->input('NbHommeVacataire_SVT');
        $postPrimaire->NbHomme_PC = $request->input('NbHomme_PC');
        $postPrimaire->NbHommeVacataire_PC = $request->input('NbHommeVacataire_PC');
        $postPrimaire->NbHomme_Math = $request->input('NbHomme_Math');
        $postPrimaire->NbHommeVacataire_Math = $request->input('NbHommeVacataire_Math');
        $postPrimaire->NbHomme_EPS = $request->input('NbHomme_EPS');
        $postPrimaire->NbHommeVacataire_EPS = $request->input('NbHommeVacataire_EPS');
        $postPrimaire->NbTotalEnseignantHomme = $request->input('NbTotalEnseignantHomme');
        $postPrimaire->NbTotalEnseignantHommeVacataire = $request->input('NbTotalEnseignantHommeVacataire');
        $postPrimaire->NbEnseignantHommeRedeployes = $request->input('NbEnseignantHommeRedeployes');
        $postPrimaire->NbEnseignantHommeRedeployesVacataire = $request->input('NbEnseignantHommeRedeployesVacataire');
        $postPrimaire->NbEnseignantHommeVolontaire = $request->input('NbEnseignantHommeVolontaire');
        $postPrimaire->NbFemme_Francais = $request->input('NbFemme_Francais');
        $postPrimaire->NbFemmeVacataire_Francais = $request->input('NbFemmeVacataire_Francais');
        $postPrimaire->NbFemme_Anglais = $request->input('NbFemme_Anglais');
        $postPrimaire->NbFemmeVacataire_Anglais = $request->input('NbFemmeVacataire_Anglais');
        $postPrimaire->NbFemme_Allemand = $request->input('NbFemme_Allemand');
        $postPrimaire->NbFemmeVacataire_Allemand = $request->input('NbFemmeVacataire_Allemand');
        $postPrimaire->NbFemme_HisGeo = $request->input('NbFemme_HisGeo');
        $postPrimaire->NbFemmeVacataire_HisGeo = $request->input('NbFemmeVacataire_HisGeo');
        $postPrimaire->NbFemme_SVT = $request->input('NbFemme_SVT');
        $postPrimaire->NbFemmeVacataire_SVT = $request->input('NbFemmeVacataire_SVT');
        $postPrimaire->NbFemme_PC = $request->input('NbFemme_PC');
        $postPrimaire->NbFemmeVacataire_PC = $request->input('NbFemmeVacataire_PC');
        $postPrimaire->NbFemme_Math = $request->input('NbFemme_Math');
        $postPrimaire->NbFemmeVacataire_Math = $request->input('NbFemmeVacataire_Math');
        $postPrimaire->NbFemme_EPS = $request->input('NbFemme_EPS');
        $postPrimaire->NbFemmeVacataire_EPS = $request->input('NbFemmeVacataire_EPS');
        $postPrimaire->NbTotalEnseignantFemme = $request->input('NbTotalEnseignantFemme');
        $postPrimaire->NbTotalEnseignantFemmeVacataire = $request->input('NbTotalEnseignantFemmeVacataire');
        $postPrimaire->NbEnseignantFemmeRedeployes = $request->input('NbEnseignantFemmeRedeployes');
        $postPrimaire->NbEnseignantFemmeRedeployesVacataire = $request->input('NbEnseignantFemmeRedeployesVacataire');
        $postPrimaire->NbEnseignantFemmeVolontaire = $request->input('NbEnseignantFemmeVolontaire');
        $postPrimaire->ExistenceEspacesRecreatif = $request->input('ExistenceEspacesRecreatif');
        $postPrimaire->ExistenceDispositifHygiene = $request->input('ExistenceDispositifHygiene');
        $postPrimaire->ExistenceCantine = $request->input('ExistenceCantine');
        $postPrimaire->SourceDotationEtat = $request->input('SourceDotationEtat');
        $postPrimaire->SourceDotationPartenaire = $request->input('SourceDotationPartenaire');
        $postPrimaire->SourceDotationEndogene = $request->input('SourceDotationEndogene');

        $postPrimaire->created_by = $user->id;
        $postPrimaire->save();
        return response()->json( ['status' => 'success'] );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $postPrimaire = DB::table('post_primaires')
        
        ->leftJoin('provinces', function($join){
            $join->on('post_primaires.province_id', '=', 'provinces.id');
        })
        ->leftJoin('communes', function($join){
            $join->on('post_primaires.commune_id', '=', 'communes.id');
        })
        ->leftJoin('regions', function($join){
            $join->on('post_primaires.region_id', '=', 'regions.id');
        })
        ->leftJoin('users', function($join){
            $join->on('post_primaires.created_by', '=', 'users.id');
        })
        ->leftJoin('users as users2', function($join){
            $join->on('post_primaires.updated_by', '=', 'users2.id');
        })
        ->select('post_primaires.*', 'users.name as created_by','users2.name as updated_by', 'regions.region as region',
        'provinces.province as province','communes.commune as commune')
        ->where('post_primaires.id', '=', $id)
        ->first();
        return response()->json( $postPrimaire );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $postPrimaire = DB::table('post_primaires')->where('id', '=', $id)->first();
        $regions = DB::table('regions')->select('regions.region as label', 'regions.id as value')->get();
        $provinces = DB::table('provinces')->select('provinces.province as label', 'provinces.id as value','provinces.region_id as region_id')->get();
        $communes = DB::table('communes')->select('communes.commune as label', 'communes.id as value','communes.province_id as province_id')->get();

        return response()->json( [ 'provinces' => $provinces, 'regions' => $regions, 'communes' => $communes,'postPrimaire'=>$postPrimaire ] );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'region_id' => 'required',
            'province_id' => 'required',
            'commune_id' => 'required',
        ]);

        $user = auth()->userOrFail();
        $postPrimaire = PostPrimaires::find($id);

        $postPrimaire->region_id = $request->input('region_id');
        $postPrimaire->province_id = $request->input('province_id');
        $postPrimaire->commune_id = $request->input('commune_id');
        $postPrimaire->annee = $request->input('annee');
        $postPrimaire->trimestre = $request->input('trimestre');
        
        $postPrimaire->ceb = $request->input('ceb');
        $postPrimaire->nom_structure = $request->input('nom_structure');
        $postPrimaire->statut = $request->input('statut');
        $postPrimaire->type = $request->input('type');
        $postPrimaire->n_ordre = $request->input('n_ordre');
        
        $postPrimaire->NbTotalSalleActivite = $request->input('NbTotalSalleActivite');
        $postPrimaire->NbGarcon_6e = $request->input('NbGarcon_6e');
        $postPrimaire->NbGarconMoyenne_6e = $request->input('NbGarconMoyenne_6e');
        $postPrimaire->NbGarconAbandon_6e = $request->input('NbGarconAbandon_6e');
        $postPrimaire->NbGarcon_5e = $request->input('NbGarcon_5e');
        $postPrimaire->NbGarconMoyenne_5e = $request->input('NbGarconMoyenne_5e');
        $postPrimaire->NbGarconAbandon_5e = $request->input('NbGarconAbandon_5e');
        $postPrimaire->NbGarcon_4e = $request->input('NbGarcon_4e');
        $postPrimaire->NbGarconMoyenne_4e = $request->input('NbGarconMoyenne_4e');
        $postPrimaire->NbGarconAbandon_4e = $request->input('NbGarconAbandon_4e');
        $postPrimaire->NbGarcon_3e = $request->input('NbGarcon_3e');
        $postPrimaire->NbGarconMoyenne_3e = $request->input('NbGarconMoyenne_3e');
        $postPrimaire->NbGarconAbandon_3e = $request->input('NbGarconAbandon_3e');
        $postPrimaire->NbTotalGarcon = $request->input('NbTotalGarcon');
        $postPrimaire->NbTotalGarconMoyenne = $request->input('NbTotalGarconMoyenne');
        $postPrimaire->NbTotalGarconAbandon = $request->input('NbTotalGarconAbandon');
        $postPrimaire->NbGarcon_PDI = $request->input('NbGarcon_PDI');
        $postPrimaire->NbGarconMoyenne_PDI = $request->input('NbGarconMoyenne_PDI');
        $postPrimaire->NbGarconAbandon_PDI = $request->input('NbGarconAbandon_PDI');
        $postPrimaire->NbFille_6e = $request->input('NbFille_6e');
        $postPrimaire->NbFilleMoyenne_6e = $request->input('NbFilleMoyenne_6e');
        $postPrimaire->NbFilleAbandon_6e = $request->input('NbFilleAbandon_6e');
        $postPrimaire->NbFille_5e = $request->input('NbFille_5e');
        $postPrimaire->NbFilleMoyenne_5e = $request->input('NbFilleMoyenne_5e');
        $postPrimaire->NbFilleAbandon_5e = $request->input('NbFilleAbandon_5e');
        $postPrimaire->NbFille_4e = $request->input('NbFille_4e');
        $postPrimaire->NbFilleMoyenne_4e = $request->input('NbFilleMoyenne_4e');
        $postPrimaire->NbFilleAbandon_4e = $request->input('NbFilleAbandon_4e');
        $postPrimaire->NbFille_3e = $request->input('NbFille_3e');
        $postPrimaire->NbFilleMoyenne_3e = $request->input('NbFilleMoyenne_3e');
        $postPrimaire->NbFilleAbandon_3e = $request->input('NbFilleAbandon_3e');
        $postPrimaire->NbTotalFille = $request->input('NbTotalFille');
        $postPrimaire->NbTotalFilleMoyenne = $request->input('NbTotalFilleMoyenne');
        $postPrimaire->NbTotalFilleAbandon = $request->input('NbTotalFilleAbandon');
        $postPrimaire->NbFille_PDI = $request->input('NbFille_PDI');
        $postPrimaire->NbFilleMoyenne_PDI = $request->input('NbFilleMoyenne_PDI');
        $postPrimaire->NbFilleAbandon_PDI = $request->input('NbFilleAbandon_PDI');
        $postPrimaire->NbHomme_Francais = $request->input('NbHomme_Francais');
        $postPrimaire->NbHommeVacataire_Francais = $request->input('NbHommeVacataire_Francais');
        $postPrimaire->NbHomme_Anglais = $request->input('NbHomme_Anglais');
        $postPrimaire->NbHommeVacataire_Anglais = $request->input('NbHommeVacataire_Anglais');
        $postPrimaire->NbHomme_Allemand = $request->input('NbHomme_Allemand');
        $postPrimaire->NbHommeVacataire_Allemand = $request->input('NbHommeVacataire_Allemand');
        $postPrimaire->NbHomme_HisGeo = $request->input('NbHomme_HisGeo');
        $postPrimaire->NbHommeVacataire_HisGeo = $request->input('NbHommeVacataire_HisGeo');
        $postPrimaire->NbHomme_SVT = $request->input('NbHomme_SVT');
        $postPrimaire->NbHommeVacataire_SVT = $request->input('NbHommeVacataire_SVT');
        $postPrimaire->NbHomme_PC = $request->input('NbHomme_PC');
        $postPrimaire->NbHommeVacataire_PC = $request->input('NbHommeVacataire_PC');
        $postPrimaire->NbHomme_Math = $request->input('NbHomme_Math');
        $postPrimaire->NbHommeVacataire_Math = $request->input('NbHommeVacataire_Math');
        $postPrimaire->NbHomme_EPS = $request->input('NbHomme_EPS');
        $postPrimaire->NbHommeVacataire_EPS = $request->input('NbHommeVacataire_EPS');
        $postPrimaire->NbTotalEnseignantHomme = $request->input('NbTotalEnseignantHomme');
        $postPrimaire->NbTotalEnseignantHommeVacataire = $request->input('NbTotalEnseignantHommeVacataire');
        $postPrimaire->NbEnseignantHommeRedeployes = $request->input('NbEnseignantHommeRedeployes');
        $postPrimaire->NbEnseignantHommeRedeployesVacataire = $request->input('NbEnseignantHommeRedeployesVacataire');
        $postPrimaire->NbEnseignantHommeVolontaire = $request->input('NbEnseignantHommeVolontaire');
        $postPrimaire->NbFemme_Francais = $request->input('NbFemme_Francais');
        $postPrimaire->NbFemmeVacataire_Francais = $request->input('NbFemmeVacataire_Francais');
        $postPrimaire->NbFemme_Anglais = $request->input('NbFemme_Anglais');
        $postPrimaire->NbFemmeVacataire_Anglais = $request->input('NbFemmeVacataire_Anglais');
        $postPrimaire->NbFemme_Allemand = $request->input('NbFemme_Allemand');
        $postPrimaire->NbFemmeVacataire_Allemand = $request->input('NbFemmeVacataire_Allemand');
        $postPrimaire->NbFemme_HisGeo = $request->input('NbFemme_HisGeo');
        $postPrimaire->NbFemmeVacataire_HisGeo = $request->input('NbFemmeVacataire_HisGeo');
        $postPrimaire->NbFemme_SVT = $request->input('NbFemme_SVT');
        $postPrimaire->NbFemmeVacataire_SVT = $request->input('NbFemmeVacataire_SVT');
        $postPrimaire->NbFemme_PC = $request->input('NbFemme_PC');
        $postPrimaire->NbFemmeVacataire_PC = $request->input('NbFemmeVacataire_PC');
        $postPrimaire->NbFemme_Math = $request->input('NbFemme_Math');
        $postPrimaire->NbFemmeVacataire_Math = $request->input('NbFemmeVacataire_Math');
        $postPrimaire->NbFemme_EPS = $request->input('NbFemme_EPS');
        $postPrimaire->NbFemmeVacataire_EPS = $request->input('NbFemmeVacataire_EPS');
        $postPrimaire->NbTotalEnseignantFemme = $request->input('NbTotalEnseignantFemme');
        $postPrimaire->NbTotalEnseignantFemmeVacataire = $request->input('NbTotalEnseignantFemmeVacataire');
        $postPrimaire->NbEnseignantFemmeRedeployes = $request->input('NbEnseignantFemmeRedeployes');
        $postPrimaire->NbEnseignantFemmeRedeployesVacataire = $request->input('NbEnseignantFemmeRedeployesVacataire');
        $postPrimaire->NbEnseignantFemmeVolontaire = $request->input('NbEnseignantFemmeVolontaire');
        $postPrimaire->ExistenceEspacesRecreatif = $request->input('ExistenceEspacesRecreatif');
        $postPrimaire->ExistenceDispositifHygiene = $request->input('ExistenceDispositifHygiene');
        $postPrimaire->ExistenceCantine = $request->input('ExistenceCantine');
        $postPrimaire->SourceDotationEtat = $request->input('SourceDotationEtat');
        $postPrimaire->SourceDotationPartenaire = $request->input('SourceDotationPartenaire');
        $postPrimaire->SourceDotationEndogene = $request->input('SourceDotationEndogene');
        
        $postPrimaire->updated_by = $user->id;
        $postPrimaire->save();
        return response()->json( ['status' => 'success'] );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $postPrimaire = PostPrimaire::find($id);
        if($postPrimaire){
            $postPrimaire->delete();
        }
        return response()->json( ['status' => 'success'] );
    }
}
