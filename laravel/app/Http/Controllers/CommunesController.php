<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Communes;

class CommunesController extends Controller
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
        $communes = DB::table('communes')
        ->join('users', 'users.id', '=', 'communes.users_id')
        ->join('provinces', 'provinces.id', '=', 'communes.province_id')
        ->select('communes.*', 'users.name as author', 'provinces.province as province')
        ->get();
        return response()->json( $communes );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $provinces = DB::table('provinces')->select('provinces.province as label', 'provinces.id as value')->get();
        return response()->json( $provinces );
    }

    public function list()
    {
        $communes = DB::table('communes')->select('communes.commune as label', 'communes.id as value')->get();
        return response()->json( $communes );
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
            'commune'             => 'required|min:1|max:64',
            'province_id'         => 'required'
        ]);
        $user = auth()->userOrFail();
        $commune = new Communes();
        $commune->code     = $request->input('code');
        $commune->commune   = $request->input('commune');
        $commune->province_id = $request->input('province_id');
        $commune->users_id = $user->id;
        $commune->save();
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
        $commune = DB::table('communes')
        ->join('users', 'users.id', '=', 'communes.users_id')
        ->join('provinces', 'provinces.id', '=', 'communes.province_id')
        ->select('communes.*', 'users.name as author', 'provinces.name as provinces')
        ->where('communes.id', '=', $id)
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
        $commune = DB::table('communes')->where('id', '=', $id)->first();
        $provinces = DB::table('provinces')->select('provinces.province as label', 'provinces.id as value')->get();
        return response()->json( [ 'provinces' => $provinces, 'commune' => $commune ] );
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
            'commune'             => 'required|min:1|max:64',
            'province_id'         => 'required',
            
        ]);
        $commune = Communes::find($id);
        $commune->code     = $request->input('code');
        $commune->commune   = $request->input('commune');
        $commune->province_id = $request->input('province_id');       
        $commune->save();
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
        $commune = Communes::find($id);
        if($commune){
            $commune->delete();
        }
        return response()->json( ['status' => 'success'] );
    }
}
