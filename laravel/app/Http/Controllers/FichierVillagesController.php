<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\FichierVillage;

class FichierVillagesController extends Controller
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
        $fichierVillage = FichierVillage::all();
        return response()->json($fichierVillage);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //$statuses = DB::table('status')->select('status.name as label', 'status.id as value')->get();
        return response()->json( $statuses );
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
            // 'code'             => 'required|min:1|max:64',
            'region'             => 'required|min:1|max:64'
        ]);
        $user = auth()->userOrFail();
        $region = new FichierVillage();
        $region->code     = $request->input('code');
        $region->region   = $request->input('region');
        $region->created_by = $user->id;
        $region->save();
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
        $region = DB::table('fichierVillage')
        ->join('users', 'users.id', '=', 'fichierVillage.users_id')
        ->select('fichierVillage.*')
        ->where('fichierVillage.id', '=', $id)
        ->first();
        return response()->json( $region );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $region = DB::table('fichierVillage')->where('id', '=', $id)->first();
        return response()->json( ['region' => $region ] );
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
        //var_dump('bazinga');
        //die();
        $validatedData = $request->validate([
            // 'code'             => 'required|min:1|max:64',
            'region'             => 'required|min:1|max:64',
        ]);
        $region = FichierVillage::find($id);
        $region->code     = $request->input('code');
        $region->region   = $request->input('region');
        $region->updated = 1;
        $region->save();
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
        $region = FichierVillage::find($id);
        if($region){
            $region->delete();
        }
        return response()->json( ['status' => 'success'] );
    }
}
