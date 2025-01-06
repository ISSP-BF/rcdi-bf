<?php

namespace App\Imports;

use App\Models\FormationSanitaireNewDatas;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class ImportFormationSanitaireNewDatas implements ToModel, WithHeadingRow
{
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {
        // dd($row);
        if ($row['commune'] == "Manga") {
            config()->set('database.connections.mysql.database', 'rcdib2270922_2ncj5');
            config()->set('database.connections.mysql.username', 'rcdib2270922_2ncj5');
        } elseif ($row['commune'] == "Tenado") {
            config()->set('database.connections.mysql.database', 'rcdib2270922_3s7qqy');
            config()->set('database.connections.mysql.username', 'rcdib2270922_3s7qqy');
        }
        DB::disconnect('mysql');
        DB::purge('mysql');
        DB::reconnect('mysql');
        if (app()->configurationIsCached()) {
            Artisan::call('config:clear');
        }
        if (!Schema::hasTable('formation_sanitaire_new_datas')) {
            createFormationSanitaireNewDatasTable();
        }

        $exist_data = FormationSanitaireNewDatas::where('annee_id', $row['annee_id'])->where('commune', $row['commune'])->where('formation_sanitaires_id', $row['localisation_id'])->first();
        if ($exist_data) {
            $exist_data->update([
                'formation_sanitaires_id' => $row['localisation_id'],
                'annee_id' => $row['annee_id'],
                'commune' => $row['commune'],
                'gps_latitude' => $row['gps_latitude'],
                'gps_longitude' => $row['gps_longitude'],
                'q113' => $row['q113'],
                'q117' => $row['q117'],
                'effectif_medspeci' => $row['effectif_medspeci'],
                'effectif_medgen' => $row['effectif_medgen'],
                'effectif_attach' => $row['effectif_attach'],
                'sagef' => $row['sagef'],
                'infirmier' => $row['infirmier'],
                'autrep' => $row['autrep'],
                'log' => $row['log'],
                'nbre_log' => $row['nbre_log'],
                'bloc' => $row['bloc'],
                'unitsoin' => $row['unitsoin'],
                'energ_el' => $row['energ_el'],
                'energiesolaire' => $row['energiesolaire'],
                'source_eau' => $row['source_eau'],
                'incinerateur' => $row['incinerateur'],
                'q8408a_1' => $row['q8408a_1'],
                'q8408a_2' => $row['q8408a_2'],
                'q8408a_3' => $row['q8408a_3'],
                'q8408a_4' => $row['q8408a_4'],
                'q8408a_5' => $row['q8408a_5'],
                'q8408a_6' => $row['q8408a_6'],
                'q8408a_7' => $row['q8408a_7'],
                'q8408a_8' => $row['q8408a_8'],
                'q8408a_9' => $row['q8408a_9'],
                'q8408a_10' => $row['q8408a_10'],
                'q8502a_1' => $row['q8502a_1'],
                'q8502a_2' => $row['q8502a_2'],
                'q8502a_3' => $row['q8502a_3'],
                'q8502a_4' => $row['q8502a_4'],
                'q8502a_5' => $row['q8502a_5'],
                'q8502a_6' => $row['q8502a_6'],
                'bf6657a_1' => $row['bf6657a_1'],
                'bf6657a_2' => $row['bf6657a_2'],
                'bf6657a_3' => $row['bf6657a_3'],
                'bf6657a_4' => $row['bf6657a_4'],
                'bf6696a_1' => $row['bf6696a_1'],
                'bf6696a_2' => $row['bf6696a_2'],
                'bf6696a_3' => $row['bf6696a_3'],
                'bf6696a_4' => $row['bf6696a_4'],
                'bf6696a_5' => $row['bf6696a_5'],
                'bf6696a_6' => $row['bf6696a_6'],
                'bf129_03' => $row['bf129_03'],
                'q8902a_1' => $row['q8902a_1'],
                'q8902a_2' => $row['q8902a_2'],
                'q8902a_bf178' => $row['q8902a_bf178'],
                'q8902a_3' => $row['q8902a_3'],
                'q8902a_4' => $row['q8902a_4'],
                'q8902a_5' => $row['q8902a_5'],
                'q9114a_1' => $row['q9114a_1'],
                'q9114a_2' => $row['q9114a_2'],
                'q9114a_3' => $row['q9114a_3'],
                'q9114a_4' => $row['q9114a_4'],
                'q9114a_5' => $row['q9114a_5'],
                'q9114a_6' => $row['q9114a_6'],
                'q9114a_7' => $row['q9114a_7'],
                'q9114a_8' => $row['q9114a_8'],
                'q9114a_9' => $row['q9114a_9'],
                'q9114a_10' => $row['q9114a_10'],
                'q9114a_11' => $row['q9114a_11'],
                'q9114a_12' => $row['q9114a_12'],
                'q9114a_13' => $row['q9114a_13'],
                'q9114a_14' => $row['q9114a_14'],
                'disponi_amb' => $row['disponi_amb'],
                'nb_ambulance' => $row['nb_ambulance'],
                'offre_service_1' => $row['offre_service_1'],
                'offre_service_2' => $row['offre_service_2'],
                'offre_service_3' => $row['offre_service_3'],
                'offre_service_4' => $row['offre_service_4'],
                'offre_service_5' => $row['offre_service_5'],
                'offre_service_6' => $row['offre_service_6'],
                'offre_service_7' => $row['offre_service_7'],
                'offre_service_8' => $row['offre_service_8'],
                'offre_service_9' => $row['offre_service_9'],
                'offre_service_10' => $row['offre_service_10'],
                'offre_service_11' => $row['offre_service_11'],
                'offre_service_12' => $row['offre_service_12'],
                'offre_service_13' => $row['offre_service_13'],
                'offre_service_14' => $row['offre_service_14'],
                'q201_1' => $row['q201_1'],
                'q201_2' => $row['q201_2'],
                'q201_3' => $row['q201_3'],
                'bf126' => $row['bf126'],
                'q9309_1' => $row['q9309_1'],
                'q9309_2' => $row['q9309_2'],
                'q9309_3' => $row['q9309_3'],
                'q9309_4' => $row['q9309_4'],
                'q9309_5' => $row['q9309_5'],
                'q9309_6' => $row['q9309_6'],
                'q9309_7' => $row['q9309_7'],
                'q9309_8' => $row['q9309_8'],
                'q9309_9' => $row['q9309_9'],
            ]);
            $data = $exist_data;
        } else {
            $data = FormationSanitaireNewDatas::create([
                'formation_sanitaires_id' => $row['localisation_id'],
                'annee_id' => $row['annee_id'],
                'commune' => $row['commune'],
                'gps_latitude' => $row['gps_latitude'],
                'gps_longitude' => $row['gps_longitude'],
                'q113' => $row['q113'],
                'q117' => $row['q117'],
                'effectif_medspeci' => $row['effectif_medspeci'],
                'effectif_medgen' => $row['effectif_medgen'],
                'effectif_attach' => $row['effectif_attach'],
                'sagef' => $row['sagef'],
                'infirmier' => $row['infirmier'],
                'autrep' => $row['autrep'],
                'log' => $row['log'],
                'nbre_log' => $row['nbre_log'],
                'bloc' => $row['bloc'],
                'unitsoin' => $row['unitsoin'],
                'energ_el' => $row['energ_el'],
                'energiesolaire' => $row['energiesolaire'],
                'source_eau' => $row['source_eau'],
                'incinerateur' => $row['incinerateur'],
                'q8408a_1' => $row['q8408a_1'],
                'q8408a_2' => $row['q8408a_2'],
                'q8408a_3' => $row['q8408a_3'],
                'q8408a_4' => $row['q8408a_4'],
                'q8408a_5' => $row['q8408a_5'],
                'q8408a_6' => $row['q8408a_6'],
                'q8408a_7' => $row['q8408a_7'],
                'q8408a_8' => $row['q8408a_8'],
                'q8408a_9' => $row['q8408a_9'],
                'q8408a_10' => $row['q8408a_10'],
                'q8502a_1' => $row['q8502a_1'],
                'q8502a_2' => $row['q8502a_2'],
                'q8502a_3' => $row['q8502a_3'],
                'q8502a_4' => $row['q8502a_4'],
                'q8502a_5' => $row['q8502a_5'],
                'q8502a_6' => $row['q8502a_6'],
                'bf6657a_1' => $row['bf6657a_1'],
                'bf6657a_2' => $row['bf6657a_2'],
                'bf6657a_3' => $row['bf6657a_3'],
                'bf6657a_4' => $row['bf6657a_4'],
                'bf6696a_1' => $row['bf6696a_1'],
                'bf6696a_2' => $row['bf6696a_2'],
                'bf6696a_3' => $row['bf6696a_3'],
                'bf6696a_4' => $row['bf6696a_4'],
                'bf6696a_5' => $row['bf6696a_5'],
                'bf6696a_6' => $row['bf6696a_6'],
                'bf129_03' => $row['bf129_03'],
                'q8902a_1' => $row['q8902a_1'],
                'q8902a_2' => $row['q8902a_2'],
                'q8902a_bf178' => $row['q8902a_bf178'],
                'q8902a_3' => $row['q8902a_3'],
                'q8902a_4' => $row['q8902a_4'],
                'q8902a_5' => $row['q8902a_5'],
                'q9114a_1' => $row['q9114a_1'],
                'q9114a_2' => $row['q9114a_2'],
                'q9114a_3' => $row['q9114a_3'],
                'q9114a_4' => $row['q9114a_4'],
                'q9114a_5' => $row['q9114a_5'],
                'q9114a_6' => $row['q9114a_6'],
                'q9114a_7' => $row['q9114a_7'],
                'q9114a_8' => $row['q9114a_8'],
                'q9114a_9' => $row['q9114a_9'],
                'q9114a_10' => $row['q9114a_10'],
                'q9114a_11' => $row['q9114a_11'],
                'q9114a_12' => $row['q9114a_12'],
                'q9114a_13' => $row['q9114a_13'],
                'q9114a_14' => $row['q9114a_14'],
                'disponi_amb' => $row['disponi_amb'],
                'nb_ambulance' => $row['nb_ambulance'],
                'offre_service_1' => $row['offre_service_1'],
                'offre_service_2' => $row['offre_service_2'],
                'offre_service_3' => $row['offre_service_3'],
                'offre_service_4' => $row['offre_service_4'],
                'offre_service_5' => $row['offre_service_5'],
                'offre_service_6' => $row['offre_service_6'],
                'offre_service_7' => $row['offre_service_7'],
                'offre_service_8' => $row['offre_service_8'],
                'offre_service_9' => $row['offre_service_9'],
                'offre_service_10' => $row['offre_service_10'],
                'offre_service_11' => $row['offre_service_11'],
                'offre_service_12' => $row['offre_service_12'],
                'offre_service_13' => $row['offre_service_13'],
                'offre_service_14' => $row['offre_service_14'],
                'q201_1' => $row['q201_1'],
                'q201_2' => $row['q201_2'],
                'q201_3' => $row['q201_3'],
                'bf126' => $row['bf126'],
                'q9309_1' => $row['q9309_1'],
                'q9309_2' => $row['q9309_2'],
                'q9309_3' => $row['q9309_3'],
                'q9309_4' => $row['q9309_4'],
                'q9309_5' => $row['q9309_5'],
                'q9309_6' => $row['q9309_6'],
                'q9309_7' => $row['q9309_7'],
                'q9309_8' => $row['q9309_8'],
                'q9309_9' => $row['q9309_9'],
            ]);
        }

        return $data;

        // return new FormationSanitaireNewDatas([
        //     //
        // ]);
    }
}
