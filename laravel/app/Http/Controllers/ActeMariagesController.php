<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\ActeMariages;

class ActeMariagesController extends Controller
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
        $acte_mariages = DB::table('acte_mariages')
        
        ->leftJoin('provinces', function($join){
            $join->on('acte_mariages.province_id', '=', 'provinces.id');
        })
        ->leftJoin('communes', function($join){
            $join->on('acte_mariages.commune_id', '=', 'communes.id');
        })
        ->leftJoin('regions', function($join){
            $join->on('acte_mariages.region_id', '=', 'regions.id');
        })
        ->leftJoin('users', function($join){
            $join->on('acte_mariages.created_by', '=', 'users.id');
        })
        ->leftJoin('users as users2', function($join){
            $join->on('acte_mariages.updated_by', '=', 'users2.id');
        })
        ->leftJoin('professions as profession_conjoint', function($join){
            $join->on('acte_mariages.profession_conjoint_id', '=', 'profession_conjoint.id');
        })
        ->leftJoin('professions as profession_conjointe', function($join){
            $join->on('acte_mariages.profession_conjointe_id', '=', 'profession_conjointe.id');
        })
        ->select('acte_mariages.*','profession_conjointe.metier as profession_conjointe','profession_conjoint.metier as profession_conjoint', 'users.name as author', 'communes.commune as commune', 'regions.region as region', 'provinces.province as province')
        ->get();
        return response()->json( $acte_mariages );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $regions = DB::table('regions')->select('regions.region as label', 'regions.id as value')->get();
        $provinces = DB::table('provinces')->select('provinces.province as label', 'provinces.id as value')->get();
        $communes = DB::table('communes')->select('communes.commune as label', 'communes.id as value')->get();
        $professions = DB::table('professions')->select('professions.metier as label', 'professions.id as value')->get();
        return response()->json(['regions'=>$regions,'provinces'=>$provinces,'communes'=>$communes,'professions'=>$professions] );
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
            
            'date_etablissement'            => 'required',

            'nom_conjoint'                  => 'required|min:1|max:64',
            'prenom_conjoint'               => 'required|min:1|max:64',
            'date_naissance_conjoint'       => 'required',
            'age_mariage_conjoint'          => 'required',
            'sexe_conjoint'                 => 'required',
            'hors_commune_conjoint'         => 'required',
            // 'commune_naissance_conjoint'    => 'required',
            // 'localite_naissance_conjoint'   => 'required',
            'domicile_conjoint'             => 'required',
            'profession_conjoint_id'           => 'required',
            // Information de la conjointe
            'nom_conjointe'                  => 'required|min:1|max:64',
            'prenom_conjointe'               => 'required|min:1|max:64',
            'date_naissance_conjointe'       => 'required',
            'age_mariage_conjointe'          => 'required',
            'sexe_conjointe'                 => 'required',
            'hors_commune_conjointe'         => 'required',
            // 'commune_naissance_conjointe'    => 'required',
            // 'localite_naissance_conjointe'   => 'required',
            'domicile_conjointe'             => 'required',
            'profession_conjointe_id'           => 'required',

            'regime_matrimonial'             => 'required',
            'option_matrimonial'             => 'required',
            'province_id'                   => 'required',
            'region_id'                     => 'required',
            'commune_id'                    => 'required',
        ]);
        $user = auth()->userOrFail();
        $acteMariages = new ActeMariages();
        
        $acteMariages->n_acte     = $request->input('n_acte');
        $acteMariages->province_id = $request->input('province_id');
        $acteMariages->region_id = $request->input('region_id');
        $acteMariages->commune_id = $request->input('commune_id');
        $acteMariages->regime_matrimonial = $request->input('regime_matrimonial');
        $acteMariages->option_matrimonial = $request->input('option_matrimonial');
        $acteMariages->date_etablissement = $request->input('date_etablissement');
        //  Conjoint
        $acteMariages->nom_conjoint   = $request->input('nom_conjoint');
        $acteMariages->prenom_conjoint = $request->input('prenom_conjoint');
        $acteMariages->date_naissance_conjoint = $request->input('date_naissance_conjoint');
        $acteMariages->age_mariage_conjoint = $request->input('age_mariage_conjoint');
        $acteMariages->sexe_conjoint = $request->input('sexe_conjoint');
        $acteMariages->hors_commune_conjoint = $request->input('hors_commune_conjoint');
        $acteMariages->commune_naissance_conjoint = $request->input('commune_naissance_conjoint');
        $acteMariages->localite_naissance_conjoint = $request->input('localite_naissance_conjoint');        
        $acteMariages->domicile_conjoint = $request->input('domicile_conjoint');        
        $acteMariages->profession_conjoint_id = $request->input('profession_conjoint_id');
        // Conjointe
        $acteMariages->nom_conjointe   = $request->input('nom_conjointe');
        $acteMariages->prenom_conjointe = $request->input('prenom_conjointe');
        $acteMariages->date_naissance_conjointe = $request->input('date_naissance_conjointe');
        $acteMariages->age_mariage_conjointe = $request->input('age_mariage_conjointe');
        $acteMariages->sexe_conjointe = $request->input('sexe_conjointe');
        $acteMariages->hors_commune_conjointe = $request->input('hors_commune_conjointe');
        $acteMariages->commune_naissance_conjointe = $request->input('commune_naissance_conjointe');
        $acteMariages->localite_naissance_conjointe = $request->input('localite_naissance_conjointe');        
        $acteMariages->domicile_conjointe = $request->input('domicile_conjointe');        
        $acteMariages->profession_conjointe_id = $request->input('profession_conjointe_id');

        $acteMariages->created_by = $user->id;
        $acteMariages->updated_by = $user->id;
        $acteMariages->save();
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
        $commune = DB::table('acte_mariages')
        
        ->leftJoin('provinces', function($join){
            $join->on('acte_mariages.province_id', '=', 'provinces.id');
        })
        ->leftJoin('communes', function($join){
            $join->on('acte_mariages.commune_id', '=', 'communes.id');
        })
        ->leftJoin('regions', function($join){
            $join->on('acte_mariages.region_id', '=', 'regions.id');
        })
        ->leftJoin('users', function($join){
            $join->on('acte_mariages.created_by', '=', 'users.id');
        })
        ->leftJoin('users as users2', function($join){
            $join->on('acte_mariages.updated_by', '=', 'users2.id');
        })
        ->leftJoin('professions as profession_conjoint', function($join){
            $join->on('acte_mariages.profession_conjoint_id', '=', 'profession_conjoint.id');
        })
        ->leftJoin('professions as profession_conjointe', function($join){
            $join->on('acte_mariages.profession_conjointe_id', '=', 'profession_conjointe.id');
        })
        ->select('acte_mariages.*', 'users.name as author', 'regions.region as region', 'communes.commune as commune', 'provinces.province as province')
        ->where('acte_mariages.id', '=', $id)
        ->first();
        return response()->json( $commune );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $acteMariage = DB::table('acte_mariages')->where('id', '=', $id)->first();
        $regions = DB::table('regions')->select('regions.region as label', 'regions.id as value')->get();
        $provinces = DB::table('provinces')->select('provinces.province as label', 'provinces.id as value')->get();
        $communes = DB::table('communes')->select('communes.commune as label', 'communes.id as value')->get();
        $professions = DB::table('professions')->select('professions.metier as label', 'professions.id as value')->get();
        return response()->json( [ 'provinces' => $provinces, 'regions' => $regions, 'communes' => $communes, 'acteMariage'=>$acteMariage,'professions'=>$professions ] );
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
            
            'date_etablissement'            => 'required',
            'nom_conjoint'                  => 'required|min:1|max:64',
            'prenom_conjoint'               => 'required|min:1|max:64',
            'date_naissance_conjoint'       => 'required',
            'age_mariage_conjoint'          => 'required',
            'sexe_conjoint'                 => 'required',
            'hors_commune_conjoint'         => 'required',
            // 'commune_naissance_conjoint'    => 'required',
            // 'localite_naissance_conjoint'   => 'required',
            'domicile_conjoint'             => 'required',
            'profession_conjoint_id'           => 'required',
            // Information de la conjointe
            'nom_conjointe'                  => 'required|min:1|max:64',
            'prenom_conjointe'               => 'required|min:1|max:64',
            'date_naissance_conjointe'       => 'required',
            'age_mariage_conjointe'          => 'required',
            'sexe_conjointe'                 => 'required',
            'hors_commune_conjointe'         => 'required',
            // 'commune_naissance_conjointe'    => 'required',
            // 'localite_naissance_conjointe'   => 'required',
            'domicile_conjointe'             => 'required',
            'profession_conjointe_id'           => 'required',
            'regime_matrimonial'             => 'required',
            'option_matrimonial'             => 'required',
            'province_id'                   => 'required',
            'region_id'                     => 'required',
            'commune_id'                    => 'required',
        ]);
        $user = auth()->userOrFail();
        $acteMariages = ActeMariages::find($id);
        
        $acteMariages->n_acte     = $request->input('n_acte');
        $acteMariages->province_id = $request->input('province_id');
        $acteMariages->region_id = $request->input('region_id');
        $acteMariages->commune_id = $request->input('commune_id');
        $acteMariages->regime_matrimonial = $request->input('regime_matrimonial');
        $acteMariages->option_matrimonial = $request->input('option_matrimonial');
        //  Conjoint
        $acteMariages->nom_conjoint   = $request->input('nom_conjoint');
        $acteMariages->prenom_conjoint = $request->input('prenom_conjoint');
        $acteMariages->date_naissance_conjoint = $request->input('date_naissance_conjoint');
        $acteMariages->age_mariage_conjoint = $request->input('age_mariage_conjoint');
        $acteMariages->sexe_conjoint = $request->input('sexe_conjoint');
        $acteMariages->hors_commune_conjoint = $request->input('hors_commune_conjoint');
        $acteMariages->commune_naissance_conjoint = $request->input('commune_naissance_conjoint');
        $acteMariages->localite_naissance_conjoint = $request->input('localite_naissance_conjoint');        
        $acteMariages->domicile_conjoint = $request->input('domicile_conjoint');        
        $acteMariages->profession_conjoint_id = $request->input('profession_conjoint_id');
        // Conjointe
        $acteMariages->nom_conjointe   = $request->input('nom_conjointe');
        $acteMariages->prenom_conjointe = $request->input('prenom_conjointe');
        $acteMariages->date_naissance_conjointe = $request->input('date_naissance_conjointe');
        $acteMariages->age_mariage_conjointe = $request->input('age_mariage_conjointe');
        $acteMariages->sexe_conjointe = $request->input('sexe_conjointe');
        $acteMariages->hors_commune_conjointe = $request->input('hors_commune_conjointe');
        $acteMariages->commune_naissance_conjointe = $request->input('commune_naissance_conjointe');
        $acteMariages->localite_naissance_conjointe = $request->input('localite_naissance_conjointe');        
        $acteMariages->domicile_conjointe = $request->input('domicile_conjointe');        
        $acteMariages->profession_conjointe_id = $request->input('profession_conjointe_id');
        $acteMariages->updated = 1;
        $acteMariages->updated_by = $user->id;
        $acteMariages->save();
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
        $acte_mariages = ActeMariages::find($id);
        if($acte_mariages){
            $acte_mariages->delete();
        }
        return response()->json( ['status' => 'success'] );
    }
}
