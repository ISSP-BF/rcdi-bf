<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Districts;

class DistrictsController extends Controller
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
        $districts = DB::table('districts')
        ->join('users', 'users.id', '=', 'districts.created_by')
        ->join('regions', 'regions.id', '=', 'districts.region_id')
        ->join('provinces', 'provinces.id', '=', 'districts.province_id')
        ->select('districts.*', 'users.name as author', 'regions.region as region', 'provinces.province as province')
        ->get();
        return response()->json( $districts );
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
        return response()->json( ['regions'=>$regions,'provinces'=>$provinces] );
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
            'nom_district'     => 'required|min:1|max:64',
            'province_id'         => 'required',
            'region_id'         => 'required'
        ]);
        $user = auth()->userOrFail();
        $district = new Districts();
        $district->code     = $request->input('code');
        $district->nom_district   = $request->input('nom_district');
        $district->province_id = $request->input('province_id');
        $district->region_id = $request->input('region_id');
        $district->nom_majore = $request->input('nom_majore');
        $district->lon = $request->input('lon');
        $district->lat = $request->input('lat');
        $district->superficie = $request->input('superficie');
        $district->created_by = $user->id;
        $district->save();
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
        $district = DB::table('districts')
        ->join('users', 'users.id', '=', 'districts.created_by')
        ->join('regions', 'regions.id', '=', 'districts.region_id')
        ->join('provinces', 'provinces.id', '=', 'districts.province_id')
        ->select('districts.*', 'users.name as author', 'regions.region as region', 'provinces.province as province')
        ->where('districts.id', '=', $id)
        ->first();
        return response()->json( $district );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $district = DB::table('districts')->where('id', '=', $id)->first();
        $regions = DB::table('regions')->select('regions.region as label', 'regions.id as value')->get();
        $provinces = DB::table('provinces')->select('provinces.province as label', 'provinces.id as value')->get();
        return response()->json( [ 'provinces' => $provinces, 'regions' => $regions, 'district' => $district ] );
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
            'nom_district'     => 'required|min:1|max:64',
            'province_id'      => 'required',
            'region_id'        => 'required'
        ]);
        $user = auth()->userOrFail();
        $district = Districts::find($id);
        $district->code     = $request->input('code');
        $district->nom_district   = $request->input('nom_district');
        $district->province_id = $request->input('province_id');
        $district->region_id = $request->input('region_id');
        $district->nom_majore = $request->input('nom_majore');
        $district->lon = $request->input('lon');
        $district->lat = $request->input('lat');
        $district->superficie = $request->input('superficie');
        $district->updated_by = $user->id;
        $district->save();
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
        $district = Districts::find($id);
        if($district){
            $district->delete();
        }
        return response()->json( ['status' => 'success'] );
    }
}
