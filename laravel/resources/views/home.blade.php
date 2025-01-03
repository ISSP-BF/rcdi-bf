@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                    <div class="alert alert-success" role="alert">
                        {{ session('status') }}
                    </div>
                    @endif

                    You are logged in!
                </div>
            </div>
        </div>
    </div>
</div>
@endsection





<li class="sidebar-item">
    <a data-bs-target="#dashboards" data-bs-toggle="collapse" class="sidebar-link collapsed">
        <i class="align-middle" data-feather="home"></i> <span class="align-middle">Infrastructures</span>
    </a>
    <ul id="dashboards" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="log">
                <span class="form-check-label">
                    Disponibilité de logement
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="bloc">
                <span class="form-check-label">
                    Existence d'un bloc opératoire
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="unitsoin">
                <span class="form-check-label">
                    Existence d'une unité de soins intensif
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="energ_el">
                <span class="form-check-label">
                    Accès à l’énergie électrique (Sonabel)
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="energiesolaire">
                <span class="form-check-label">
                    Existence d’énergie solaire au sein du centre de santé
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="source_eau">
                <span class="form-check-label">
                    Existence d'une source améliorée d'eau
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="incinerateur">
                <span class="form-check-label">
                    Existence d'un incinérateur
                </span>
            </label>
        </li>
    </ul>
</li>
<li class="sidebar-item">
    <a data-bs-target="#pages" data-bs-toggle="collapse" class="sidebar-link collapsed">
        <i class="align-middle" data-feather="layout"></i> <span class="align-middle">Services</span>
    </a>
    <ul id="pages" class="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="offre_service_1">
                <span class="form-check-label">
                    Prise en Charge Intégrée des Maladies de l'Enfant (PCIME)
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="offre_service_2">
                <span class="form-check-label">
                    Services de santé des adolescents
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="offre_service_3">
                <span class="form-check-label">
                    Services de planification familiale
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="offre_service_4">
                <span class="form-check-label">
                    Services de consultation prénatale (CPN)
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="offre_service_5">
                <span class="form-check-label">
                    services de Prévention/éradication de la transmission mère-enfant (PTME/eTME)
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="offre_service_6">
                <span class="form-check-label">
                    Service de Traitement préventif intermittent (TPI) pendant la grossesse
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="offre_service_7">
                <span class="form-check-label">
                    Services d'accouchement
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="offre_service_8">
                <span class="form-check-label">
                    Services SONUB
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="offre_service_9">
                <span class="form-check-label">
                    Services SONUC
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="offre_service_10">
                <span class="form-check-label">
                    Services de soins au nouveau né
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="offre_service_11">
                <span class="form-check-label">
                    Services de soins au nouveau né en bonne santé
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="offre_service_12">
                <span class="form-check-label">
                    Service de soins aux faibles poids de naissances, prématurés et nouveaux nés mal
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="offre_service_13">
                <span class="form-check-label">
                    Services de consultation postnatale (CPoN)
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="offre_service_14">
                <span class="form-check-label">
                    Services de soins après avortement
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q201_1">
                <span class="form-check-label">
                    N'importe quel service de vaccination
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q201_2">
                <span class="form-check-label">
                    Services de vaccination des enfants
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q201_3">
                <span class="form-check-label">
                    Services de vaccination des adolescents
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="bf126">
                <span class="form-check-label">
                    Services d'interruption sécurisée de grossesse autorisée par la loi
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q9309_1">
                <span class="form-check-label">
                    Administration parentérale d'antibiotiques
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q9309_2">
                <span class="form-check-label">
                    Administration parentérale d'ocytocine
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q9309_3">
                <span class="form-check-label">
                    Administration parentérale de sulfate de magnésium
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q9309_4">
                <span class="form-check-label">
                    Accouchement vaginal assisté
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q9309_5">
                <span class="form-check-label">
                    Extraction manuelle du placenta
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q9309_6">
                <span class="form-check-label">
                    Extraction des produits retenus après l'accouchement
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q9309_7">
                <span class="form-check-label">
                    Réanimation néonatale
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q9309_8">
                <span class="form-check-label">
                    Césarienne
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q9309_9">
                <span class="form-check-label">
                    Transfusion sanguine
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="bf129_03">
                <span class="form-check-label">
                    Planification familiale après avortement
                </span>
            </label>
        </li>
    </ul>
</li>
<li class="sidebar-item">
    <a href="#auth" data-bs-toggle="collapse" class="sidebar-link collapsed">
        <i class="align-middle" data-feather="users"></i> <span class="align-middle">Personnels</span>
    </a>
    <ul id="auth" class="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="effectif_medspeci">
                <span class="form-check-label">
                    Nombre de médecins spécialistes
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="effectif_medgen">
                <span class="form-check-label">
                    Nombre de médecins généralistes
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="effectif_attach">
                <span class="form-check-label">
                    Nombre d'attachés de santé
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="sagef">
                <span class="form-check-label">
                    Nombre de sage-femmes et maieuticiens
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="infirmier">
                <span class="form-check-label">
                    Nombre d'infirmiers (IDE, IB)
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="autrep">
                <span class="form-check-label">
                    Effectif des autres agents de santé
                </span>
            </label>
        </li>
    </ul>
</li>
<li class="sidebar-item">
    <a data-bs-target="#ui" data-bs-toggle="collapse" class="sidebar-link collapsed">
        <i class="align-middle" data-feather="briefcase"></i> <span class="align-middle">Matériels et équipements</span>
    </a>
    <ul id="ui" class="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q8408a_1">
                <span class="form-check-label">
                    Disponibilité de: œstrogène et progestérone oral combiné
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q8408a_2">
                <span class="form-check-label">
                    Disponibilité de: progestérone oral
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q8408a_3">
                <span class="form-check-label">
                    Disponibilité de: Progestérone et œstrogène combiné injectable
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q8408a_4">
                <span class="form-check-label">
                    Disponibilité de: progestérone injectable
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q8408a_5">
                <span class="form-check-label">
                    Disponibilité de: Condoms masculins
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q8408a_6">
                <span class="form-check-label">
                    Disponibilité de: Condoms féminins
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q8408a_7">
                <span class="form-check-label">
                    Disponibilité de: Implant
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q8408a_8">
                <span class="form-check-label">
                    Disponibilité de: contraceptifs d'urgence
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q8408a_9">
                <span class="form-check-label">
                    Disponibilité de: DIU
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q8408a_10">
                <span class="form-check-label">
                    Disponibilité de: Collier
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q8502a_1">
                <span class="form-check-label">
                    Tensiomètre
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q8502a_2">
                <span class="form-check-label">
                    stéthoscope fœtal/pinard
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q8502a_3">
                <span class="form-check-label">
                    Balance pour adulte
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q8502a_4">
                <span class="form-check-label">
                    lit d'examen
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q8502a_5">
                <span class="form-check-label">
                    Mesureur de Bande
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q8502a_6">
                <span class="form-check-label">
                    Moustiquaires
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="bf6657a_1">
                <span class="form-check-label">
                    Disponibilité de: Test rapide d'hémoglobine / hématocrite (papier de tournesol)
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="bf6657a_2">
                <span class="form-check-label">
                    Disponibilité de: Test rapide de syphilis
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="bf6657a_3">
                <span class="form-check-label">
                    Disponibilité de: Bandelette urinaire pour le dosage de la protéinurie
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="bf6657a_4">
                <span class="form-check-label">
                    Disponibilité de: Test d'urine pour la grossesse (TIG)
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="bf6696a_1">
                <span class="form-check-label">
                    Médicaments et Diagnostic: Test rapide du VIH
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="bf6696a_2">
                <span class="form-check-label">
                    Médicaments et Diagnostic: Papier filtre pour tache de sang sèche
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="bf6696a_3">
                <span class="form-check-label">
                    Médicaments et Diagnostic: Sirop de névirapine
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="bf6696a_4">
                <span class="form-check-label">
                    Médicaments et Diagnostic: Sirop de zidovudine
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="bf6696a_5">
                <span class="form-check-label">
                    Médicaments et Diagnostic: Sirop de cotrimoxazole
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="bf6696a_6">
                <span class="form-check-label">
                    Médicaments et Diagnostic: Prophylaxie ARV maternelle 1ere ligne
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q8902a_1">
                <span class="form-check-label">
                    Soins postavortum, disponibilité : aspirateur à vide
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q8902a_2">
                <span class="form-check-label">
                    Soins postavortum, disponibilité :kit Dilatation &Curetage
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q8902a_bf178">
                <span class="form-check-label">
                    Soins postavortum, disponibilité :canule (4, 5, 6, 7, 8, 9, 10, 12, 14mm)
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q8902a_3">
                <span class="form-check-label">
                    Soins postavortum, disponibilité :spéculum
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q8902a_4">
                <span class="form-check-label">
                    Soins postavortum, disponibilité :antiseptique pour le lavage du vagin et du co
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q8902a_5">
                <span class="form-check-label">
                    Soins postavortum, disponibilité :gants stériles
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q9114a_1">
                <span class="form-check-label">
                    Disponibilité du vaccin: vaccin contre la rougeole et diluant
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q9114a_2">
                <span class="form-check-label">
                    Disponibilité du vaccin: DPT+Hib+HepB
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q9114a_3">
                <span class="form-check-label">
                    Disponibilité du vaccin: vaccin antipoliomyélitique oral
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q9114a_4">
                <span class="form-check-label">
                    Disponibilité du vaccin: vaccin BCG et diluant
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q9114a_5">
                <span class="form-check-label">
                    Disponibilité du vaccin: vaccin antirotavirus
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q9114a_6">
                <span class="form-check-label">
                    Disponibilité du vaccin: vaccin antipneumococcique
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q9114a_7">
                <span class="form-check-label">
                    Disponibilité du vaccin: VPI
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q9114a_8">
                <span class="form-check-label">
                    Disponibilité du vaccin: VPH
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q9114a_9">
                <span class="form-check-label">
                    Disponibilité du vaccin: anatoxine tétanique ou TD
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q9114a_10">
                <span class="form-check-label">
                    Disponibilité du vaccin: vaccin antirabique
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q9114a_11">
                <span class="form-check-label">
                    Disponibilité du vaccin: grippe
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q9114a_12">
                <span class="form-check-label">
                    Disponibilité du vaccin: typhoïde
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q9114a_13">
                <span class="form-check-label">
                    Disponibilité du vaccin: fièvre jaune
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="q9114a_14">
                <span class="form-check-label">
                    Disponibilité du vaccin: méningite à méningocoques
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="disponi_amb">
                <span class="form-check-label">
                    Disponibilité des ambulances:
                </span>
            </label>
        </li>
        <li class="sidebar-item sidebar-link">
            <label class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="nb_ambulance">
                <span class="form-check-label">
                    Nombre des ambulances:
                </span>
            </label>
        </li>
    </ul>
</li>