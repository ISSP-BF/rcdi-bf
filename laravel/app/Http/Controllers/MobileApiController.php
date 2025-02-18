<?php

namespace App\Http\Controllers;

use App\Models\Commune;
use App\Models\DashboardItem;
use App\Models\Desagregation;
use App\Models\Donnee;
use App\Models\FichierVillage;
use App\Models\Groupe;
use App\Models\Indicateur;
use App\Models\IndicateurOptimise;
use App\Models\SousGroupe;
use App\Models\SousIndicateur;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class MobileApiController extends Controller
{
    public function mobile_login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        foreach ($databases as $db) {
            configDB($db);
            try {
                if ($token = auth()->attempt($validator->validated())) {
                    createOrLoadEnvForDatabase($db);
                    return response()->json([
                        'success' => true,
                        'token' => $token,
                        'token_type' => 'bearer',
                        'expires_in' => auth()->factory()->getTTL() * 500000,
                        'user' => auth()->user(),
                    ]);
                }
            } catch (\Exception $e) {
                continue;
            }
        }
    }

    public function mobile_register(Request $request)
    {
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        $db_select = array_rand(array_flip($databases));
        configDB($db_select);
        $validate = Validator::make($request->all(), [
            'name'      => 'required',
            'email'     => 'required|email|unique:users',
            'password'  => 'required|min:4|confirmed',
        ]);
        if ($validate->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validate->errors()
            ], 422);
        }
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->status = 'Active';
        try {
            $user->save();
            return response()->json(['status' => 'success'], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'errors' => $e->getMessage(),
            ], 422);
        };
    }

    public function mobile_acte_naissances()
    {
        $datas = collect();
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        foreach ($databases as $db) {
            try {
                configDB($db);
                $data = DB::table('acte_naissances')
                    ->leftJoin('provinces', function ($join) {
                        $join->on('acte_naissances.province_id', '=', 'provinces.id');
                    })
                    ->leftJoin('communes', function ($join) {
                        $join->on('acte_naissances.commune_id', '=', 'communes.id');
                    })
                    ->leftJoin('regions', function ($join) {
                        $join->on('acte_naissances.region_id', '=', 'regions.id');
                    })
                    ->leftJoin('users', function ($join) {
                        $join->on('acte_naissances.created_by', '=', 'users.id');
                    })
                    ->leftJoin('users as users2', function ($join) {
                        $join->on('acte_naissances.updated_by', '=', 'users2.id');
                    })
                    ->leftJoin('formation_sanitaires', function ($join) {
                        $join->on('acte_naissances.formation_sanitaire_id', '=', 'formation_sanitaires.id');
                    })
                    ->select(
                        'acte_naissances.*',
                        'users.name as author',
                        'regions.region as region',
                        'communes.commune as commune',
                        'provinces.province as province',
                        'formation_sanitaires.nom_structure as formationSanitaire'
                    )->orderBy('id', 'desc')->get();

                $datas = $datas->merge($data);
            } catch (\Exception $e) {
                logger()->error("Erreur lors de la recupération des données : " . $e->getMessage());
            }
        }

        if ($datas->count() > 0) {
            return response()->json([
                'status' => 'success',
                'count' => $datas->count(),
                'results' => $datas,
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'results' => 'No data found'
            ], 422);
        }
    }

    public function mobile_acte_deces()
    {
        $datas = collect();
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        foreach ($databases as $db) {
            try {
                configDB($db);
                $data = DB::table('acte_deces')
                    ->leftJoin('provinces', function ($join) {
                        $join->on('acte_deces.province_id', '=', 'provinces.id');
                    })
                    ->leftJoin('communes', function ($join) {
                        $join->on('acte_deces.commune_id', '=', 'communes.id');
                    })
                    ->leftJoin('regions', function ($join) {
                        $join->on('acte_deces.region_id', '=', 'regions.id');
                    })
                    ->leftJoin('users', function ($join) {
                        $join->on('acte_deces.created_by', '=', 'users.id');
                    })
                    ->leftJoin('professions', function ($join) {
                        $join->on('acte_deces.profession_id', '=', 'professions.id');
                    })
                    ->leftJoin('users as users2', function ($join) {
                        $join->on('acte_deces.updated_by', '=', 'users2.id');
                    })
                    ->select('acte_deces.*', 'professions.metier as profession', 'users.name as author', 'communes.commune as commune', 'regions.region as region', 'provinces.province as province')
                    ->get();

                $datas = $datas->merge($data);
            } catch (\Exception $e) {
                logger()->error("Erreur lors de la recupération des données : " . $e->getMessage());
            }
        }

        if ($datas->count() > 0) {
            return response()->json([
                'status' => 'success',
                'count' => $datas->count(),
                'results' => $datas,
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'results' => 'No data found'
            ], 422);
        }
    }

    public function mobile_acte_mariages()
    {
        $datas = collect();
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        foreach ($databases as $db) {
            try {
                configDB($db);
                $data = DB::table('acte_mariages')

                    ->leftJoin('provinces', function ($join) {
                        $join->on('acte_mariages.province_id', '=', 'provinces.id');
                    })
                    ->leftJoin('communes', function ($join) {
                        $join->on('acte_mariages.commune_id', '=', 'communes.id');
                    })
                    ->leftJoin('regions', function ($join) {
                        $join->on('acte_mariages.region_id', '=', 'regions.id');
                    })
                    ->leftJoin('users', function ($join) {
                        $join->on('acte_mariages.created_by', '=', 'users.id');
                    })
                    ->leftJoin('users as users2', function ($join) {
                        $join->on('acte_mariages.updated_by', '=', 'users2.id');
                    })
                    ->leftJoin('professions as profession_conjoint', function ($join) {
                        $join->on('acte_mariages.profession_conjoint_id', '=', 'profession_conjoint.id');
                    })
                    ->leftJoin('professions as profession_conjointe', function ($join) {
                        $join->on('acte_mariages.profession_conjointe_id', '=', 'profession_conjointe.id');
                    })
                    ->select('acte_mariages.*', 'profession_conjointe.metier as profession_conjointe', 'profession_conjoint.metier as profession_conjoint', 'users.name as author', 'communes.commune as commune', 'regions.region as region', 'provinces.province as province')
                    ->get();

                $datas = $datas->merge($data);
            } catch (\Exception $e) {
                logger()->error("Erreur lors de la recupération des données : " . $e->getMessage());
            }
        }

        if ($datas->count() > 0) {
            return response()->json([
                'status' => 'success',
                'count' => $datas->count(),
                'results' => $datas,
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'results' => 'No data found'
            ], 422);
        }
    }

    public function mobile_consultation_prenatales()
    {
        $datas = collect();
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        foreach ($databases as $db) {
            try {
                configDB($db);
                $data = DB::table('consultation_prenatales')

                    ->leftJoin('provinces', function ($join) {
                        $join->on('consultation_prenatales.province_id', '=', 'provinces.id');
                    })
                    ->leftJoin('communes', function ($join) {
                        $join->on('consultation_prenatales.commune_id', '=', 'communes.id');
                    })
                    ->leftJoin('regions', function ($join) {
                        $join->on('consultation_prenatales.region_id', '=', 'regions.id');
                    })
                    ->leftJoin('users', function ($join) {
                        $join->on('consultation_prenatales.created_by', '=', 'users.id');
                    })
                    ->leftJoin('districts', function ($join) {
                        $join->on('consultation_prenatales.district_id', '=', 'districts.id');
                    })
                    ->leftJoin('formation_sanitaires', function ($join) {
                        $join->on('consultation_prenatales.formation_sanitaire_id', '=', 'formation_sanitaires.id');
                    })
                    ->select(
                        'consultation_prenatales.*',
                        'users.name as author',
                        'districts.nom_district as district',
                        'regions.region as region',
                        'provinces.province as province',
                        'communes.commune as commune',
                        'formation_sanitaires.nom_structure as formation_sanitaire'
                    )
                    ->get();

                $datas = $datas->merge($data);
            } catch (\Exception $e) {
                logger()->error("Erreur lors de la recupération des données : " . $e->getMessage());
            }
        }

        if ($datas->count() > 0) {
            return response()->json([
                'status' => 'success',
                'count' => $datas->count(),
                'results' => $datas,
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'results' => 'No data found'
            ], 422);
        }
    }

    public function mobile_consultation_postnatales()
    {
        $datas = collect();
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        foreach ($databases as $db) {
            try {
                configDB($db);
                $data = DB::table('consultation_postnatales')

                    ->leftJoin('provinces', function ($join) {
                        $join->on('consultation_postnatales.province_id', '=', 'provinces.id');
                    })
                    ->leftJoin('communes', function ($join) {
                        $join->on('consultation_postnatales.commune_id', '=', 'communes.id');
                    })
                    ->leftJoin('regions', function ($join) {
                        $join->on('consultation_postnatales.region_id', '=', 'regions.id');
                    })
                    ->leftJoin('users', function ($join) {
                        $join->on('consultation_postnatales.created_by', '=', 'users.id');
                    })
                    ->leftJoin('districts', function ($join) {
                        $join->on('consultation_postnatales.district_id', '=', 'districts.id');
                    })
                    ->leftJoin('formation_sanitaires', function ($join) {
                        $join->on('consultation_postnatales.formation_sanitaire_id', '=', 'formation_sanitaires.id');
                    })
                    ->select(
                        'consultation_postnatales.*',
                        'users.name as author',
                        'districts.nom_district as district',
                        'regions.region as region',
                        'provinces.province as province',
                        'communes.commune as commune',
                        'formation_sanitaires.nom_structure as formation_sanitaire'
                    )
                    ->get();

                $datas = $datas->merge($data);
            } catch (\Exception $e) {
                logger()->error("Erreur lors de la recupération des données : " . $e->getMessage());
            }
        }

        if ($datas->count() > 0) {
            return response()->json([
                'status' => 'success',
                'count' => $datas->count(),
                'results' => $datas,
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'results' => 'No data found'
            ], 422);
        }
    }

    public function mobile_ptmes()
    {
        $datas = collect();
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        foreach ($databases as $db) {
            try {
                configDB($db);
                $data = DB::table('ptmes')
                    ->join('users', 'users.id', '=', 'ptmes.created_by')
                    ->join('regions', 'regions.id', '=', 'ptmes.region_id')
                    ->join('provinces', 'provinces.id', '=', 'ptmes.province_id')
                    ->join('communes', 'communes.id', '=', 'ptmes.commune_id')
                    ->join('districts', 'districts.id', '=', 'ptmes.district_id')
                    ->join('formation_sanitaires', 'formation_sanitaires.id', '=', 'ptmes.formation_sanitaire_id')
                    ->select(
                        'ptmes.*',
                        'users.name as author',
                        'districts.nom_district as district',
                        'regions.region as region',
                        'provinces.province as province',
                        'communes.commune as commune',
                        'formation_sanitaires.nom_structure as formation_sanitaire'
                    )
                    ->get();

                $datas = $datas->merge($data);
            } catch (\Exception $e) {
                logger()->error("Erreur lors de la recupération des données : " . $e->getMessage());
            }
        }

        if ($datas->count() > 0) {
            return response()->json([
                'status' => 'success',
                'count' => $datas->count(),
                'results' => $datas,
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'results' => 'No data found'
            ], 422);
        }
    }

    public function mobile_accouchements()
    {
        $datas = collect();
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        foreach ($databases as $db) {
            try {
                configDB($db);
                $data = DB::table('accouchements')

                    ->leftJoin('provinces', function ($join) {
                        $join->on('accouchements.province_id', '=', 'provinces.id');
                    })
                    ->leftJoin('communes', function ($join) {
                        $join->on('accouchements.commune_id', '=', 'communes.id');
                    })
                    ->leftJoin('regions', function ($join) {
                        $join->on('accouchements.region_id', '=', 'regions.id');
                    })
                    ->leftJoin('users', function ($join) {
                        $join->on('accouchements.created_by', '=', 'users.id');
                    })
                    ->leftJoin('districts', function ($join) {
                        $join->on('accouchements.district_id', '=', 'districts.id');
                    })
                    ->leftJoin('formation_sanitaires', function ($join) {
                        $join->on('accouchements.formation_sanitaire_id', '=', 'formation_sanitaires.id');
                    })
                    ->select(
                        'accouchements.*',
                        'users.name as author',
                        'districts.nom_district as district',
                        'regions.region as region',
                        'provinces.province as province',
                        'communes.commune as commune',
                        'formation_sanitaires.nom_structure as formation_sanitaire'
                    )
                    ->get();

                $datas = $datas->merge($data);
            } catch (\Exception $e) {
                logger()->error("Erreur lors de la recupération des données : " . $e->getMessage());
            }
        }

        if ($datas->count() > 0) {
            return response()->json([
                'status' => 'success',
                'count' => $datas->count(),
                'results' => $datas,
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'results' => 'No data found'
            ], 422);
        }
    }

    public function mobile_vaccination_enfants()
    {
        $datas = collect();
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        foreach ($databases as $db) {
            try {
                configDB($db);
                $data = DB::table('vaccination_enfants')
                    ->join('users', 'users.id', '=', 'vaccination_enfants.created_by')
                    ->join('regions', 'regions.id', '=', 'vaccination_enfants.region_id')
                    ->join('provinces', 'provinces.id', '=', 'vaccination_enfants.province_id')
                    ->join('communes', 'communes.id', '=', 'vaccination_enfants.commune_id')
                    ->join('districts', 'districts.id', '=', 'vaccination_enfants.district_id')
                    ->join('formation_sanitaires', 'formation_sanitaires.id', '=', 'vaccination_enfants.formation_sanitaire_id')
                    ->select(
                        'vaccination_enfants.*',
                        'users.name as author',
                        'districts.nom_district as district',
                        'regions.region as region',
                        'provinces.province as province',
                        'communes.commune as commune',
                        'formation_sanitaires.nom_structure as formation_sanitaire'
                    )
                    ->get();

                $datas = $datas->merge($data);
            } catch (\Exception $e) {
                logger()->error("Erreur lors de la recupération des données : " . $e->getMessage());
            }
        }

        if ($datas->count() > 0) {
            return response()->json([
                'status' => 'success',
                'count' => $datas->count(),
                'results' => $datas,
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'results' => 'No data found'
            ], 422);
        }
    }

    public function mobile_planification_familiales()
    {
        $datas = collect();
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        foreach ($databases as $db) {
            try {
                configDB($db);
                $data = DB::table('planification_familiales')
                    ->join('users', 'users.id', '=', 'planification_familiales.created_by')
                    ->join('regions', 'regions.id', '=', 'planification_familiales.region_id')
                    ->join('provinces', 'provinces.id', '=', 'planification_familiales.province_id')
                    ->join('communes', 'communes.id', '=', 'planification_familiales.commune_id')
                    ->join('districts', 'districts.id', '=', 'planification_familiales.district_id')
                    ->join('formation_sanitaires', 'formation_sanitaires.id', '=', 'planification_familiales.formation_sanitaire_id')
                    ->select(
                        'planification_familiales.*',
                        'users.name as author',
                        'districts.nom_district as district',
                        'regions.region as region',
                        'provinces.province as province',
                        'communes.commune as commune',
                        'formation_sanitaires.nom_structure as formation_sanitaire'
                    )
                    ->get();

                $datas = $datas->merge($data);
            } catch (\Exception $e) {
                logger()->error("Erreur lors de la recupération des données : " . $e->getMessage());
            }
        }

        if ($datas->count() > 0) {
            return response()->json([
                'status' => 'success',
                'count' => $datas->count(),
                'results' => $datas,
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'results' => 'No data found'
            ], 422);
        }
    }

    public function mobile_morbilite_paludismes()
    {
        $datas = collect();
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        foreach ($databases as $db) {
            try {
                configDB($db);
                $data = DB::table('morbilite_paludismes')
                    ->join('users', 'users.id', '=', 'morbilite_paludismes.created_by')
                    ->join('regions', 'regions.id', '=', 'morbilite_paludismes.region_id')
                    ->join('provinces', 'provinces.id', '=', 'morbilite_paludismes.province_id')
                    ->join('communes', 'communes.id', '=', 'morbilite_paludismes.commune_id')
                    ->join('districts', 'districts.id', '=', 'morbilite_paludismes.district_id')
                    ->join('formation_sanitaires', 'formation_sanitaires.id', '=', 'morbilite_paludismes.formation_sanitaire_id')
                    ->select(
                        'morbilite_paludismes.*',
                        'users.name as author',
                        'districts.nom_district as district',
                        'regions.region as region',
                        'provinces.province as province',
                        'communes.commune as commune',
                        'formation_sanitaires.nom_structure as formation_sanitaire'
                    )
                    ->get();

                $datas = $datas->merge($data);
            } catch (\Exception $e) {
                logger()->error("Erreur lors de la recupération des données : " . $e->getMessage());
            }
        }

        if ($datas->count() > 0) {
            return response()->json([
                'status' => 'success',
                'count' => $datas->count(),
                'results' => $datas,
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'results' => 'No data found'
            ], 422);
        }
    }

    public function mobile_service_curatifs()
    {
        $datas = collect();
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        foreach ($databases as $db) {
            try {
                configDB($db);
                $data = DB::table('service_curatifs')
                    ->join('users', 'users.id', '=', 'service_curatifs.created_by')
                    ->join('regions', 'regions.id', '=', 'service_curatifs.region_id')
                    ->join('provinces', 'provinces.id', '=', 'service_curatifs.province_id')
                    ->join('communes', 'communes.id', '=', 'service_curatifs.commune_id')
                    ->join('districts', 'districts.id', '=', 'service_curatifs.district_id')
                    ->join('formation_sanitaires', 'formation_sanitaires.id', '=', 'service_curatifs.formation_sanitaire_id')
                    ->select(
                        'service_curatifs.*',
                        'users.name as author',
                        'districts.nom_district as district',
                        'regions.region as region',
                        'provinces.province as province',
                        'communes.commune as commune',
                        'formation_sanitaires.nom_structure as formation_sanitaire'
                    )
                    ->get();

                $datas = $datas->merge($data);
            } catch (\Exception $e) {
                logger()->error("Erreur lors de la recupération des données : " . $e->getMessage());
            }
        }

        if ($datas->count() > 0) {
            return response()->json([
                'status' => 'success',
                'count' => $datas->count(),
                'results' => $datas,
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'results' => 'No data found'
            ], 422);
        }
    }

    public function mobile_systeme_information_sanitaires()
    {
        $datas = collect();
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        foreach ($databases as $db) {
            try {
                configDB($db);
                $data = DB::table('systeme_information_sanitaires')
                    ->join('users', 'users.id', '=', 'systeme_information_sanitaires.created_by')
                    ->join('regions', 'regions.id', '=', 'systeme_information_sanitaires.region_id')
                    ->join('provinces', 'provinces.id', '=', 'systeme_information_sanitaires.province_id')
                    ->join('communes', 'communes.id', '=', 'systeme_information_sanitaires.commune_id')
                    ->join('districts', 'districts.id', '=', 'systeme_information_sanitaires.district_id')
                    ->join('formation_sanitaires', 'formation_sanitaires.id', '=', 'systeme_information_sanitaires.formation_sanitaire_id')
                    ->select(
                        'systeme_information_sanitaires.*',
                        'users.name as author',
                        'districts.nom_district as district',
                        'regions.region as region',
                        'provinces.province as province',
                        'communes.commune as commune',
                        'formation_sanitaires.nom_structure as formation_sanitaire'
                    )
                    ->get();

                $datas = $datas->merge($data);
            } catch (\Exception $e) {
                logger()->error("Erreur lors de la recupération des données : " . $e->getMessage());
            }
        }

        if ($datas->count() > 0) {
            return response()->json([
                'status' => 'success',
                'count' => $datas->count(),
                'results' => $datas,
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'results' => 'No data found'
            ], 422);
        }
    }

    public function mobile_indicateur_carte_sanitaires()
    {
        $datas = collect();
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        foreach ($databases as $db) {
            try {
                configDB($db);
                $data = DB::table('indicateur_carte_sanitaires')
                    ->join('users', 'users.id', '=', 'indicateur_carte_sanitaires.created_by')
                    ->join('regions', 'regions.id', '=', 'indicateur_carte_sanitaires.region_id')
                    ->join('provinces', 'provinces.id', '=', 'indicateur_carte_sanitaires.province_id')
                    ->join('communes', 'communes.id', '=', 'indicateur_carte_sanitaires.commune_id')
                    ->join('districts', 'districts.id', '=', 'indicateur_carte_sanitaires.district_id')
                    ->join('formation_sanitaires', 'formation_sanitaires.id', '=', 'indicateur_carte_sanitaires.formation_sanitaire_id')
                    ->select(
                        'indicateur_carte_sanitaires.*',
                        'users.name as author',
                        'districts.nom_district as district',
                        'regions.region as region',
                        'provinces.province as province',
                        'communes.commune as commune',
                        'formation_sanitaires.nom_structure as formation_sanitaire'
                    )
                    ->get();
                $datas = $datas->merge($data);
            } catch (\Exception $e) {
                logger()->error("Erreur lors de la recupération des données : " . $e->getMessage());
            }
        }

        if ($datas->count() > 0) {
            return response()->json([
                'status' => 'success',
                'count' => $datas->count(),
                'results' => $datas,
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'results' => 'No data found'
            ], 422);
        }
    }

    public function mobile_pre_scolaires()
    {
        $datas = collect();
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        foreach ($databases as $db) {
            try {
                configDB($db);
                $data = DB::table('pre_scolaires')

                    ->leftJoin('provinces', function ($join) {
                        $join->on('pre_scolaires.province_id', '=', 'provinces.id');
                    })
                    ->leftJoin('communes', function ($join) {
                        $join->on('pre_scolaires.commune_id', '=', 'communes.id');
                    })
                    ->leftJoin('regions', function ($join) {
                        $join->on('pre_scolaires.region_id', '=', 'regions.id');
                    })
                    ->leftJoin('users', function ($join) {
                        $join->on('pre_scolaires.created_by', '=', 'users.id');
                    })
                    ->leftJoin('users as users2', function ($join) {
                        $join->on('pre_scolaires.updated_by', '=', 'users2.id');
                    })
                    ->select(
                        'pre_scolaires.*',
                        'users.name as created_by',
                        'users2.name as updated_by',
                        'regions.region as region',
                        'provinces.province as province',
                        'communes.commune as commune',
                        DB::raw('(CASE WHEN pre_scolaires.ExistenceEspacesRecreatif = 1 THEN "OUI" ELSE "NON" END) AS ExistenceEspacesRecreatif'),
                        DB::raw('(CASE WHEN pre_scolaires.ExistenceDispositifHygiene = 1 THEN "OUI" ELSE "NON" END) AS ExistenceDispositifHygiene'),
                        DB::raw('(CASE WHEN pre_scolaires.ExistenceCantine = 1 THEN "OUI" ELSE "NON" END) AS ExistenceCantine'),
                        DB::raw('(CASE WHEN pre_scolaires.SourceDotationEtat = 1 THEN "OUI" ELSE "NON" END) AS SourceDotationEtat'),
                        DB::raw('(CASE WHEN pre_scolaires.SourceDotationPartenaire = 1 THEN "OUI" ELSE "NON" END) AS SourceDotationPartenaire'),
                        DB::raw('(CASE WHEN pre_scolaires.SourceDotationEndogene = 1 THEN "OUI" ELSE "NON" END) AS SourceDotationEndogene'),
                        DB::raw('(CASE WHEN pre_scolaires.ExistanceBacOrdure = 1 THEN "OUI" ELSE "NON" END) AS ExistanceBacOrdure'),
                        DB::raw('(CASE WHEN pre_scolaires.ExistanceSourceEauAmeliore = 1 THEN "OUI" ELSE "NON" END) AS ExistanceSourceEauAmeliore')
                    )
                    ->get();
                $datas = $datas->merge($data);
            } catch (\Exception $e) {
                logger()->error("Erreur lors de la recupération des données : " . $e->getMessage());
            }
        }

        if ($datas->count() > 0) {
            return response()->json([
                'status' => 'success',
                'count' => $datas->count(),
                'results' => $datas,
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'results' => 'No data found'
            ], 422);
        }
    }

    public function mobile_primaires()
    {
        $datas = collect();
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        foreach ($databases as $db) {
            try {
                configDB($db);
                $data = DB::table('primaires')

                    ->leftJoin('provinces', function ($join) {
                        $join->on('primaires.province_id', '=', 'provinces.id');
                    })
                    ->leftJoin('communes', function ($join) {
                        $join->on('primaires.commune_id', '=', 'communes.id');
                    })
                    ->leftJoin('regions', function ($join) {
                        $join->on('primaires.region_id', '=', 'regions.id');
                    })
                    ->leftJoin('users', function ($join) {
                        $join->on('primaires.created_by', '=', 'users.id');
                    })
                    ->leftJoin('users as users2', function ($join) {
                        $join->on('primaires.updated_by', '=', 'users2.id');
                    })
                    ->select(
                        'primaires.*',
                        'users.name as created_by',
                        'users2.name as updated_by',
                        'regions.region as region',
                        'provinces.province as province',
                        'communes.commune as commune',
                        DB::raw('(CASE WHEN primaires.ExistenceEspacesRecreatif = 1 THEN "OUI" ELSE "NON" END) AS ExistenceEspacesRecreatif'),
                        DB::raw('(CASE WHEN primaires.ExistenceDispositifHygiene = 1 THEN "OUI" ELSE "NON" END) AS ExistenceDispositifHygiene'),
                        DB::raw('(CASE WHEN primaires.ExistenceCantine = 1 THEN "OUI" ELSE "NON" END) AS ExistenceCantine'),
                        DB::raw('(CASE WHEN primaires.SourceDotationEtat = 1 THEN "OUI" ELSE "NON" END) AS SourceDotationEtat'),
                        DB::raw('(CASE WHEN primaires.SourceDotationPartenaire = 1 THEN "OUI" ELSE "NON" END) AS SourceDotationPartenaire'),
                        DB::raw('(CASE WHEN primaires.SourceDotationEndogene = 1 THEN "OUI" ELSE "NON" END) AS SourceDotationEndogene'),
                        DB::raw('(CASE WHEN primaires.ExistanceBacOrdure = 1 THEN "OUI" ELSE "NON" END) AS ExistanceBacOrdure'),
                        DB::raw('(CASE WHEN primaires.ExistanceSourceEauAmeliore = 1 THEN "OUI" ELSE "NON" END) AS ExistanceSourceEauAmeliore')
                    )
                    ->get();
                $datas = $datas->merge($data);
            } catch (\Exception $e) {
                logger()->error("Erreur lors de la recupération des données : " . $e->getMessage());
            }
        }

        if ($datas->count() > 0) {
            return response()->json([
                'status' => 'success',
                'count' => $datas->count(),
                'results' => $datas,
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'results' => 'No data found'
            ], 422);
        }
    }

    public function mobile_post_primaires()
    {
        $datas = collect();
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        foreach ($databases as $db) {
            try {
                configDB($db);
                $data = DB::table('post_primaires')

                    ->leftJoin('provinces', function ($join) {
                        $join->on('post_primaires.province_id', '=', 'provinces.id');
                    })
                    ->leftJoin('communes', function ($join) {
                        $join->on('post_primaires.commune_id', '=', 'communes.id');
                    })
                    ->leftJoin('regions', function ($join) {
                        $join->on('post_primaires.region_id', '=', 'regions.id');
                    })
                    ->leftJoin('users', function ($join) {
                        $join->on('post_primaires.created_by', '=', 'users.id');
                    })
                    ->leftJoin('users as users2', function ($join) {
                        $join->on('post_primaires.updated_by', '=', 'users2.id');
                    })
                    ->select(
                        'post_primaires.*',
                        'users.name as created_by',
                        'users2.name as updated_by',
                        'regions.region as region',
                        'provinces.province as province',
                        'communes.commune as commune',
                        DB::raw('(CASE WHEN post_primaires.ExistenceEspacesRecreatif = 1 THEN "OUI" ELSE "NON" END) AS ExistenceEspacesRecreatif'),
                        DB::raw('(CASE WHEN post_primaires.ExistenceDispositifHygiene = 1 THEN "OUI" ELSE "NON" END) AS ExistenceDispositifHygiene'),
                        DB::raw('(CASE WHEN post_primaires.ExistenceCantine = 1 THEN "OUI" ELSE "NON" END) AS ExistenceCantine'),
                        DB::raw('(CASE WHEN post_primaires.SourceDotationEtat = 1 THEN "OUI" ELSE "NON" END) AS SourceDotationEtat'),
                        DB::raw('(CASE WHEN post_primaires.SourceDotationPartenaire = 1 THEN "OUI" ELSE "NON" END) AS SourceDotationPartenaire'),
                        DB::raw('(CASE WHEN post_primaires.SourceDotationEndogene = 1 THEN "OUI" ELSE "NON" END) AS SourceDotationEndogene'),
                        DB::raw('(CASE WHEN post_primaires.ExistanceBacOrdure = 1 THEN "OUI" ELSE "NON" END) AS ExistanceBacOrdure'),
                        DB::raw('(CASE WHEN post_primaires.ExistanceSourceEauAmeliore = 1 THEN "OUI" ELSE "NON" END) AS ExistanceSourceEauAmeliore')
                    )
                    ->get();
                $datas = $datas->merge($data);
            } catch (\Exception $e) {
                logger()->error("Erreur lors de la recupération des données : " . $e->getMessage());
            }
        }

        if ($datas->count() > 0) {
            return response()->json([
                'status' => 'success',
                'count' => $datas->count(),
                'results' => $datas,
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'results' => 'No data found'
            ], 422);
        }
    }

    public function mobile_fichier_villages()
    {
        $datas = collect();
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        foreach ($databases as $db) {
            try {
                configDB($db);
                $data = FichierVillage::all();
                $datas = $datas->merge($data);
            } catch (\Exception $e) {
                logger()->error("Erreur lors de la recupération des données : " . $e->getMessage());
            }
        }

        if ($datas->count() > 0) {
            return response()->json([
                'status' => 'success',
                'count' => $datas->count(),
                'results' => $datas,
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'results' => 'No data found'
            ], 422);
        }
    }

    public function mobile_groupes()
    {
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        $db_select = array_rand(array_flip($databases));
        configDB($db_select);
        try {
            $datas = Groupe::all();
        } catch (\Exception $e) {
            logger()->error("Erreur lors de la recupération des données : " . $e->getMessage());
        }
        if ($datas->count() > 0) {
            return response()->json([
                'status' => 'success',
                'count' => $datas->count(),
                'results' => $datas,
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'results' => 'No data found'
            ], 422);
        }
    }

    public function mobile_sous_groupes()
    {
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        $db_select = array_rand(array_flip($databases));
        configDB($db_select);
        try {
            $datas = SousGroupe::all();
        } catch (\Exception $e) {
            logger()->error("Erreur lors de la recupération des données : " . $e->getMessage());
        }
        if ($datas->count() > 0) {
            return response()->json([
                'status' => 'success',
                'count' => $datas->count(),
                'results' => $datas,
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'results' => 'No data found'
            ], 422);
        }
    }

    public function mobile_desagregations()
    {
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        $db_select = array_rand(array_flip($databases));
        configDB($db_select);
        try {
            $datas = Desagregation::all();
        } catch (\Exception $e) {
            logger()->error("Erreur lors de la recupération des données : " . $e->getMessage());
        }
        if ($datas->count() > 0) {
            return response()->json([
                'status' => 'success',
                'count' => $datas->count(),
                'results' => $datas,
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'results' => 'No data found'
            ], 422);
        }
    }

    public function mobile_indicateurs()
    {
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        $db_select = array_rand(array_flip($databases));
        configDB($db_select);
        try {
            $datas = Indicateur::all();
        } catch (\Exception $e) {
            logger()->error("Erreur lors de la recupération des données : " . $e->getMessage());
        }
        if ($datas->count() > 0) {
            return response()->json([
                'status' => 'success',
                'count' => $datas->count(),
                'results' => $datas,
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'results' => 'No data found'
            ], 422);
        }
    }

    public function mobile_sous_indicateurs()
    {
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        $db_select = array_rand(array_flip($databases));
        configDB($db_select);
        try {
            $datas = SousIndicateur::all();
        } catch (\Exception $e) {
            logger()->error("Erreur lors de la recupération des données : " . $e->getMessage());
        }
        if ($datas->count() > 0) {
            return response()->json([
                'status' => 'success',
                'count' => $datas->count(),
                'results' => $datas,
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'results' => 'No data found'
            ], 422);
        }
    }

    public function mobile_donnees()
    {
        $datas = collect();
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        foreach ($databases as $db) {
            try {
                configDB($db);
                // $data = Donnee::all();
                $data = Donnee::paginate(100);
                $datas = $datas->merge($data);
            } catch (\Exception $e) {
                logger()->error("Erreur lors de la recupération des données : " . $e->getMessage());
            }
        }

        if ($datas->count() > 0) {
            return response()->json([
                'status' => 'success',
                'count' => $datas->count(),
                'results' => $datas,
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'results' => 'No data found'
            ], 422);
        }
    }

    public function mobile_communes()
    {
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        $db_select = array_rand(array_flip($databases));
        configDB($db_select);
        try {
            $datas = Commune::all();
        } catch (\Exception $e) {
            logger()->error("Erreur lors de la recupération des données : " . $e->getMessage());
        }
        if ($datas->count() > 0) {
            return response()->json([
                'status' => 'success',
                'count' => $datas->count(),
                'results' => $datas,
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'results' => 'No data found'
            ], 422);
        }
    }

    public function mobile_provinces()
    {
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        $db_select = array_rand(array_flip($databases));
        configDB($db_select);
        try {
            $datas = DB::table('provinces')
                ->join('users', 'users.id', '=', 'provinces.users_id')
                ->join('regions', 'regions.id', '=', 'provinces.region_id')
                ->select('provinces.*', 'users.name as author', 'regions.region as region')
                ->get();
        } catch (\Exception $e) {
            logger()->error("Erreur lors de la recupération des données : " . $e->getMessage());
        }
        if ($datas->count() > 0) {
            return response()->json([
                'status' => 'success',
                'count' => $datas->count(),
                'results' => $datas,
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'results' => 'No data found'
            ], 422);
        }
    }

    public function mobile_regions()
    {
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        $db_select = array_rand(array_flip($databases));
        configDB($db_select);
        try {
            $datas = DB::table('regions')
                ->join('users', 'users.id', '=', 'regions.users_id')
                ->select('regions.*')
                ->get();
        } catch (\Exception $e) {
            logger()->error("Erreur lors de la recupération des données : " . $e->getMessage());
        }
        if ($datas->count() > 0) {
            return response()->json([
                'status' => 'success',
                'count' => $datas->count(),
                'results' => $datas,
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'results' => 'No data found'
            ], 422);
        }
    }

    public function mobile_notes()
    {
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        $db_select = array_rand(array_flip($databases));
        configDB($db_select);
        try {
            $datas = DB::table('notes')
                ->join('users', 'users.id', '=', 'notes.users_id')
                ->join('status', 'status.id', '=', 'notes.status_id')
                ->select('notes.*', 'users.name as author', 'status.name as status', 'status.class as status_class')
                ->get();
        } catch (\Exception $e) {
            logger()->error("Erreur lors de la recupération des données : " . $e->getMessage());
        }
        if ($datas->count() > 0) {
            return response()->json([
                'status' => 'success',
                'count' => $datas->count(),
                'results' => $datas,
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'results' => 'No data found'
            ], 422);
        }
    }

    public function mobile_indicateurs_findBy(Request $request)
    {
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        foreach ($databases as $db) {
            configDB($db);
            try {
                $indicateurs = DB::table('indicateursold')
                    ->leftJoin('provinces', function ($join) {
                        $join->on('indicateursold.province_id', '=', 'provinces.id');
                    })
                    ->leftJoin('communes', function ($join) {
                        $join->on('indicateursold.commune_id', '=', 'communes.id');
                    })
                    ->leftJoin('regions', function ($join) {
                        $join->on('indicateursold.region_id', '=', 'regions.id');
                    })
                    ->select(
                        'indicateursold.*',
                        'regions.region as region',
                        'provinces.province as province',
                        'communes.commune as commune'
                    );

                if (isset($request->commune_id) && $request->commune_id != null && $request->commune_id != 0) {
                    $indicateurs->where('indicateursold.commune_id', '=', $request['commune_id']);
                }
                if (isset($request->province_id) && $request->province_id != null && $request->province_id != 0) {
                    $indicateurs->where('indicateursold.province_id', '=', $request['province_id']);
                }
                if (isset($request->region_id) && $request->region_id != null && $request->region_id != 0) {
                    $indicateurs->where('indicateursold.region_id', '=', $request['region_id']);
                }
                if (isset($request->annee) && $request->annee != null && $request->annee != 0) {
                    $indicateurs->whereIn('indicateursold.annee', $request['annee'])->orderBy("annee", "ASC");
                    // $indicateurs->where('indicateursold.annee', '=', $request['annee'])->orderBy("annee","ASC");
                }
                if (isset($request->indicateur)) {
                    $indicateurs->where('indicateursold.indicateur', 'like', '%' . $request['indicateur'] . '%');
                }
                if (isset($request->groupe)) {
                    $indicateurs->where('indicateursold.groupe', 'like', '%' . $request['groupe'] . '%');
                }
                if (isset($request->id) && $request->id != null && $request->id != 0) {
                    $indicateurs->where('indicateursold.id', '=', $request['id']);
                }
                $indicateurs = $indicateurs->orderBy("annee", "ASC")->get();
                $datas = $indicateurs;
                // return response()->json($indicateurs);
            } catch (\Exception $e) {
                continue;
            }
        }

        if ($datas->count() > 0) {
            return response()->json([
                'status' => 'success',
                'count' => $datas->count(),
                'results' => $datas,
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'results' => 'No data found'
            ], 422);
        }
    }

    public function mobile_dashboard_items_findBy($dashboard_id)
    {
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        foreach ($databases as $db) {
            configDB($db);
            try {
                $dashboardItems = DashboardItem::where("dashboard_id", "=", $dashboard_id)->orderBy('i', 'DESC')->get();
                $datas = $dashboardItems;
            } catch (\Exception $e) {
                continue;
            }
        }
        if ($datas->count() > 0) {
            return response()->json([
                'status' => 'success',
                'count' => $datas->count(),
                'results' => $datas,
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'results' => 'No data found'
            ], 422);
        }
    }

    public function mobile_donnees_findBy(Request $request)
    {
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        foreach ($databases as $db) {
            configDB($db);
            try {
                $donnees = DB::table('donnees')->leftJoin('indicateurs', function ($join) {
                    $join->on('donnees.indicateur_id', '=', 'indicateurs.id');
                })->leftJoin('groupes', function ($join) {
                    $join->on('indicateurs.groupe_id', '=', 'groupes.id');
                })->leftJoin('sous_indicateurs', function ($join) {
                    $join->on('donnees.sous_indicateur_id', '=', 'sous_indicateurs.id');
                })->leftJoin('sous_groupes', function ($join) {
                    $join->on('indicateurs.sous_groupe_id', '=', 'sous_groupes.id');
                })->select("donnees.*", "groupes.libelle as groupe", "sous_groupes.libelle as sous_groupe", "indicateurs.libelle as indicateur");


                if (isset($request->indicateur_id) && $request->indicateur_id != null && $request->indicateur_id != 0) {
                    $donnees->where('donnees.indicateur_id', '=', $request['indicateur_id']);
                }
                if ($request['localisation_id'] != -1)
                    $donnees->where('donnees.localisation_id', '=', $request['localisation_id']);
                else {
                    $donnees->where('donnees.localisation_id', '!=', null);
                }
                if (isset($request->periode_value) && $request->periode_value != null && $request->periode_value != 0) {
                    $donnees->whereIn('donnees.periode_value', $request['periode_value']);
                }
                if (isset($request->periode) && $request->periode != null) {
                    $donnees->where('donnees.periode', 'like', $request['periode']);
                }

                // if(isset($request->groupe_id)){
                //     $donnees->where('groupes.id', '=', $request->groupe_id);
                // }
                if (isset($request->id) && $request->id != null && $request->id != 0) {
                    $donnees->where('donnees.id', '=', $request['id']);
                }
                if (isset($request->annee) && $request->annee != null && $request->annee != 0) {
                    $donnees->whereIn('donnees.annee', $request['annee'])->orderBy("annee", "ASC")->orderBy("periode_value", "ASC");
                }
                $datas = $donnees;
            } catch (\Exception $e) {
                continue;
            }
        }
        if ($datas->count() > 0) {
            return response()->json([
                'status' => 'success',
                'count' => $datas->count(),
                'results' => $datas,
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'results' => 'No data found'
            ], 422);
        }
    }

    public function mobile_indicateurs_findByGroupe($id)
    {
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        foreach ($databases as $db) {
            configDB($db);
            try {
                $indicateurs = IndicateurOptimise::select('*', 'libelle as label', 'id as value')->where('groupe_id', "=", $id)->get();
                $datas = $indicateurs;
            } catch (\Exception $e) {
                continue;
            }
        }
        if ($datas->count() > 0) {
            return response()->json([
                'status' => 'success',
                'count' => $datas->count(),
                'results' => $datas,
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'results' => 'No data found'
            ], 422);
        }
    }

    public function mobile_sous_groupes_findByGroupe($id)
    {
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        foreach ($databases as $db) {
            configDB($db);
            try {
                $sous_groupes = SousGroupe::select('*', 'libelle as label', 'id as value')->where('groupe_id', "=", $id)->get();
                $datas = $sous_groupes;
            } catch (\Exception $e) {
                continue;
            }
        }
        if ($datas->count() > 0) {
            return response()->json([
                'status' => 'success',
                'count' => $datas->count(),
                'results' => $datas,
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'results' => 'No data found'
            ], 422);
        }
    }

    public function mobile_donnees_findAnneeByIndicateur($indicateur_id)
    {
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        foreach ($databases as $db) {
            configDB($db);
            try {
                $annees = DB::table('donnees')->select('annee as label', 'annee as value')->distinct()->where("indicateur_id", "=", $indicateur_id)->orderBy('annee')->get();
                $datas = $annees;
            } catch (\Exception $e) {
                continue;
            }
        }
        if ($datas->count() > 0) {
            return response()->json([
                'status' => 'success',
                'count' => $datas->count(),
                'results' => $datas,
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'results' => 'No data found'
            ], 422);
        }
    }
}
