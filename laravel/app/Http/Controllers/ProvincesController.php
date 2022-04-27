<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Provinces;

class ProvincesController extends Controller
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
        $provinces = DB::table('provinces')
        ->join('users', 'users.id', '=', 'provinces.users_id')
        ->join('regions', 'regions.id', '=', 'provinces.region_id')
        ->select('provinces.*', 'users.name as author', 'regions.region as region')
        ->get();
        return response()->json( $provinces );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $regions = DB::table('regions')->select('regions.region as label', 'regions.id as value')->get();
        return response()->json( $regions );
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
            'code'             => 'required|min:1|max:64',
            'province'             => 'required|min:1|max:64',
            'region_id'         => 'required'
        ]);
        $user = auth()->userOrFail();
        $province = new Provinces();
        $province->code     = $request->input('code');
        $province->province   = $request->input('province');
        $province->region_id = $request->input('region_id');
        $province->cheflieu   = $request->input('cheflieu');
        $province->lon   = $request->input('lon');
        $province->lat   = $request->input('lat');
        $province->users_id = $user->id;
        $province->save();
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
        $province = DB::table('provinces')
        ->join('users', 'users.id', '=', 'provinces.users_id')
        ->join('regions', 'regions.id', '=', 'provinces.region_id')
        ->select('provinces.*', 'users.name as author', 'regions.name as regions')
        ->where('provinces.id', '=', $id)
        ->first();
        return response()->json( $province );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $province = DB::table('provinces')->where('id', '=', $id)->first();
        $regions = DB::table('regions')->select('regions.region as label', 'regions.id as value')->get();
        return response()->json( [ 'regions' => $regions, 'province' => $province ] );
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
            'code'             => 'required|min:1|max:64',
            'province'             => 'required|min:1|max:64',
            'region_id'         => 'required',
            
        ]);
        $province = Provinces::find($id);
        $province->code     = $request->input('code');
        $province->province   = $request->input('province');
        $province->region_id = $request->input('region_id');
        $province->cheflieu   = $request->input('cheflieu');
        $province->lon   = $request->input('lon');
        $province->lat   = $request->input('lat');
       
        $province->save();
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
        $province = Provinces::find($id);
        if($province){
            $province->delete();
        }
        return response()->json( ['status' => 'success'] );
    }
}
