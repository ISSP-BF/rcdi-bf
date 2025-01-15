<?php

use Dotenv\Dotenv;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Schema;

function formatDate($date)
{
    return date('d/m/Y', strtotime($date));
}

function createFormationSanitaireNewDatasTable()
{
    Schema::create('formation_sanitaire_new_datas', function (Blueprint $table) {
        $table->id();
        $table->integer('formation_sanitaires_id')->unsigned();
        $table->integer('annee_id')->nullable();
        $table->string('commune')->nullable();
        $table->string('gps_latitude')->nullable();
        $table->string('gps_longitude')->nullable();
        $table->string('q113')->nullable();
        $table->string('q117')->nullable();
        $table->integer('effectif_medspeci')->nullable();
        $table->integer('effectif_medgen')->nullable();
        $table->integer('effectif_attach')->nullable();
        $table->integer('sagef')->nullable();
        $table->integer('infirmier')->nullable();
        $table->integer('autrep')->nullable();
        $table->boolean('log')->default(0);
        $table->integer('nbre_log')->nullable();
        $table->boolean('bloc')->default(0);
        $table->boolean('unitsoin')->default(0);
        $table->boolean('energ_el')->default(0);
        $table->boolean('energiesolaire')->default(0);
        $table->boolean('source_eau')->default(0);
        $table->boolean('incinerateur')->default(0);
        $table->boolean('q8408a_1')->default(0);
        $table->boolean('q8408a_2')->default(0);
        $table->boolean('q8408a_3')->default(0);
        $table->boolean('q8408a_4')->default(0);
        $table->boolean('q8408a_5')->default(0);
        $table->boolean('q8408a_6')->default(0);
        $table->boolean('q8408a_7')->default(0);
        $table->boolean('q8408a_8')->default(0);
        $table->boolean('q8408a_9')->default(0);
        $table->boolean('q8408a_10')->default(0);
        $table->boolean('q8502a_1')->default(0);
        $table->boolean('q8502a_2')->default(0);
        $table->boolean('q8502a_3')->default(0);
        $table->boolean('q8502a_4')->default(0);
        $table->boolean('q8502a_5')->default(0);
        $table->boolean('q8502a_6')->default(0);
        $table->boolean('bf6657a_1')->default(0);
        $table->boolean('bf6657a_2')->default(0);
        $table->boolean('bf6657a_3')->default(0);
        $table->boolean('bf6657a_4')->default(0);
        $table->boolean('bf6696a_1')->default(0);
        $table->boolean('bf6696a_2')->default(0);
        $table->boolean('bf6696a_3')->default(0);
        $table->boolean('bf6696a_4')->default(0);
        $table->boolean('bf6696a_5')->default(0);
        $table->boolean('bf6696a_6')->default(0);
        $table->boolean('bf129_03')->default(0);
        $table->boolean('q8902a_1')->default(0);
        $table->boolean('q8902a_2')->default(0);
        $table->boolean('q8902a_bf178')->default(0);
        $table->boolean('q8902a_3')->default(0);
        $table->boolean('q8902a_4')->default(0);
        $table->boolean('q8902a_5')->default(0);
        $table->boolean('q9114a_1')->default(0);
        $table->boolean('q9114a_2')->default(0);
        $table->boolean('q9114a_3')->default(0);
        $table->boolean('q9114a_4')->default(0);
        $table->boolean('q9114a_5')->default(0);
        $table->boolean('q9114a_6')->default(0);
        $table->boolean('q9114a_7')->default(0);
        $table->boolean('q9114a_8')->default(0);
        $table->boolean('q9114a_9')->default(0);
        $table->boolean('q9114a_10')->default(0);
        $table->boolean('q9114a_11')->default(0);
        $table->boolean('q9114a_12')->default(0);
        $table->boolean('q9114a_13')->default(0);
        $table->boolean('q9114a_14')->default(0);
        $table->boolean('disponi_amb')->default(0);
        $table->boolean('nb_ambulance')->default(0);
        $table->boolean('offre_service_1')->default(0);
        $table->boolean('offre_service_2')->default(0);
        $table->boolean('offre_service_3')->default(0);
        $table->boolean('offre_service_4')->default(0);
        $table->boolean('offre_service_5')->default(0);
        $table->boolean('offre_service_6')->default(0);
        $table->boolean('offre_service_7')->default(0);
        $table->boolean('offre_service_8')->default(0);
        $table->boolean('offre_service_9')->default(0);
        $table->boolean('offre_service_10')->default(0);
        $table->boolean('offre_service_11')->default(0);
        $table->boolean('offre_service_12')->default(0);
        $table->boolean('offre_service_13')->default(0);
        $table->boolean('offre_service_14')->default(0);
        $table->boolean('q201_1')->default(0);
        $table->boolean('q201_2')->default(0);
        $table->boolean('q201_3')->default(0);
        $table->boolean('bf126')->default(0);
        $table->boolean('q9309_1')->default(0);
        $table->boolean('q9309_2')->default(0);
        $table->boolean('q9309_3')->default(0);
        $table->boolean('q9309_4')->default(0);
        $table->boolean('q9309_5')->default(0);
        $table->boolean('q9309_6')->default(0);
        $table->boolean('q9309_7')->default(0);
        $table->boolean('q9309_8')->default(0);
        $table->boolean('q9309_9')->default(0);
        $table->timestamps();
    });
}

if (!function_exists('set_active')) {
    function set_active($uri, $output = 'active')
    {
        if (is_array($uri)) {
            foreach ($uri as $u) {
                if (Route::is($u)) {
                    return $output;
                }
            }
        } else {
            if (Route::is($uri)) {
                return $output;
            }
        }
    }
}

function formatDateToFrench($date)
{
    $dateObject = DateTime::createFromFormat('Y-m', $date);
    if (!$dateObject) {
        return "Date invalide";
    }
    setlocale(LC_TIME, 'fr_FR.UTF-8');
    return strftime('%B %Y', $dateObject->getTimestamp());
}

function createOrLoadEnvForDatabase($dbName)
{
    if (empty($dbName)) {
        loadEnv(base_path('.env'));
        return;
    }

    $envFilePath = base_path(".env.{$dbName}");
    if (!File::exists($envFilePath)) {
        File::copy(base_path('.env'), $envFilePath);
        $envContents = File::get($envFilePath);
        $envContents = preg_replace('/DB_DATABASE=.*/', "DB_DATABASE={$dbName}", $envContents);
        File::put($envFilePath, $envContents);
    }
    loadEnv($envFilePath);
}

function loadEnv($envFilePath)
{
    if (!file_exists($envFilePath)) {
        throw new \Exception("Le fichier .env pour la base de données n'existe pas: {$envFilePath}");
    }
    $dotenv = Dotenv::createMutable(dirname($envFilePath), basename($envFilePath));
    $dotenv->load();
    foreach ($_ENV as $key => $value) {
        putenv("$key=$value");
    }
    DB::purge('mysql');
    config()->set('database.connections.mysql.database', env('DB_DATABASE'));
    Artisan::call('config:clear');
    DB::reconnect('mysql');
}

function configDB($db_name)
{
    if (!isset($db_name)) {
        throw new \Exception("La base de données {$db_name} n'existe pas.");
    }
    config()->set('database.connections.mysql.database', $db_name);
    // config()->set('database.connections.mysql.username', $db_name);
    DB::disconnect('mysql');
    DB::purge('mysql');
    DB::reconnect('mysql');
    if (app()->configurationIsCached()) {
        Artisan::call('config:clear');
    }
}
