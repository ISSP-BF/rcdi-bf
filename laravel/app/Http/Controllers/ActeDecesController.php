<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\ActeDeces;

class ActeDecesController extends Controller
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
        $acte_deces = DB::table('acte_deces')
        ->join('users', 'users.id', '=', 'acte_deces.created_by')
        ->join('regions', 'regions.id', '=', 'acte_deces.region_id')
        ->join('provinces', 'provinces.id', '=', 'acte_deces.province_id')
        ->join('communes', 'communes.id', '=', 'acte_deces.commune_id')
        ->select('acte_deces.*', 'users.name as author', 'communes.commune as commune', 'regions.region as region', 'provinces.province as province')
        ->get();
        return response()->json( $acte_deces );
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
        return response()->json( ['regions'=>$regions,'provinces'=>$provinces,'communes'=>$communes] );
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
            'n_acte'             => 'required|min:1|max:64',
            'nom'     => 'required|min:1|max:64',
            'prenom'     => 'required|min:1|max:64',
            'sexe'         => 'required',
            'date_naissance'         => 'required',
            'date_deces'         => 'required',
        ]);
        $user = auth()->userOrFail();
        $acteDeces = new ActeDeces();
        $acteDeces->n_acte     = $request->input('n_acte');
        $acteDeces->province_id = $request->input('province_id');
        $acteDeces->region_id = $request->input('region_id');
        $acteDeces->commune_id = $request->input('commune_id');
        $acteDeces->nom   = $request->input('nom');
        $acteDeces->prenom = $request->input('prenom');
        $acteDeces->date_declaration = $request->input('date_declaration');
        $acteDeces->sexe = $request->input('sexe');
        $acteDeces->date_naissance = $request->input('date_naissance');
        $acteDeces->date_deces = $request->input('date_deces');
        $acteDeces->age = $request->input('age');
        $acteDeces->date_etablissement = $request->input('date_etablissement');
        $acteDeces->profession = $request->input('profession');
        $acteDeces->statut_matrimonial = $request->input('statut_matrimonial');       
        $acteDeces->created_by = $user->id;
        $acteDeces->save();
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
        $commune = DB::table('acte_deces')
        ->join('users', 'users.id', '=', 'acte_deces.created_by')
        ->join('regions', 'regions.id', '=', 'acte_deces.region_id')
        ->join('provinces', 'provinces.id', '=', 'acte_deces.province_id')
        ->join('communes', 'communes.id', '=', 'acte_deces.commune_id')
        ->select('acte_deces.*', 'users.name as author', 'regions.region as region', 'communes.commune as commune', 'provinces.province as province')
        ->where('acte_deces.id', '=', $id)
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
        $acteDeces = DB::table('acte_deces')->where('id', '=', $id)->first();
        $regions = DB::table('regions')->select('regions.region as label', 'regions.id as value')->get();
        $provinces = DB::table('provinces')->select('provinces.province as label', 'provinces.id as value')->get();
        $communes = DB::table('communes')->select('communes.commune as label', 'communes.id as value')->get();
        return response()->json( [ 'provinces' => $provinces, 'regions' => $regions, 'communes' => $communes, 'acteDeces'=>$acteDeces ] );
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
            'n_acte'             => 'required|min:1|max:64',
            'nom'     => 'required|min:1|max:64',
            'prenom'     => 'required|min:1|max:64',
            'sexe'         => 'required',
            'date_naissance'         => 'required',
            'date_deces'         => 'required',
        ]);
        $user = auth()->userOrFail();
        $acteDeces = ActeDeces::find($id);
        $acteDeces->n_acte     = $request->input('n_acte');
        $acteDeces->province_id = $request->input('province_id');
        $acteDeces->region_id = $request->input('region_id');
        $acteDeces->commune_id = $request->input('commune_id');
        $acteDeces->nom   = $request->input('nom');
        $acteDeces->prenom = $request->input('prenom');
        $acteDeces->date_declaration = $request->input('date_declaration');
        $acteDeces->sexe = $request->input('sexe');
        $acteDeces->date_naissance = $request->input('date_naissance');
        $acteDeces->date_deces = $request->input('date_deces');
        $acteDeces->age = $request->input('age');
        $acteDeces->date_etablissement = $request->input('date_etablissement');
        $acteDeces->profession = $request->input('profession');
        $acteDeces->statut_matrimonial = $request->input('statut_matrimonial');
        $acteDeces->updated_by = $user->id;
        $acteDeces->save();
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
        $acte_deces = ActeDeces::find($id);
        if($acte_deces){
            $acte_deces->delete();
        }
        return response()->json( ['status' => 'success'] );
    }
}
