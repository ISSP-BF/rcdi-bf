<!DOCTYPE html>
<html lang="fr">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Cartographie des formations sanitaires RCDI">
    <meta name="author" content="NANA Abdoul Faycal">
    <meta name="keywords" content="rcdi, Cartographie, formations sanitaires, issp, NANA Abdoul, NANA Faycal, NANA Abdoul Faycal">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="preconnect" href="https://fonts.gstatic.com/">
    <link rel="shortcut icon" href="{{ URL::asset('favicon.ico') }}" />

    <link rel="canonical" href="index.html" />

    <title>Cartographie des formations sanitaires RCDI</title>

    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&amp;display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>


    <!-- BEGIN SETTINGS -->
    <!-- Remove this after purchasing -->
    <link class="js-stylesheet" href="{{ URL::asset('css/light.css') }}" rel="stylesheet">
    <link class="js-stylesheet" href="{{ URL::asset('assets/css/light.css') }}" rel="stylesheet">
    <!-- <script src="{{ URL::asset('js/settings.js') }}"></script> -->
    <!-- <script src="{{ URL::asset('assets/js/settings.js') }}"></script> -->
    <script src="{{ URL::asset('assets/js/app.js') }}"></script>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>

    <style>
        body {
            opacity: 0;
        }
    </style>
    <!-- END SETTINGS -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-120946860-10"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-120946860-10', {
            'anonymize_ip': true
        });
    </script>
</head>
<!--
  HOW TO USE: 
  data-theme: default (default), dark, light, colored
  data-layout: fluid (default), boxed
  data-sidebar-position: left (default), right
  data-sidebar-layout: default (default), compact
-->

<body data-theme="default" data-layout="fluid" data-sidebar-position="left" data-sidebar-layout="default">
    <div class="wrapper">
        <nav id="sidebar" class="sidebar js-sidebar">
            <div class="sidebar-content js-simplebar">
                <a class='sidebar-brand' href='#'>
                    <img src="{{ URL::asset('img/avatars/logo-full.png') }}" class="img-fluid rounded me-1" />
                </a>

                <ul class="sidebar-nav">
                    <li class="sidebar-header">
                        <!-- Pages -->
                        <!-- <div>
                            <label class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" value="option1">
                                <span class="form-check-label">
                                    1
                                </span>
                            </label>
                            <label class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" value="option2">
                                <span class="form-check-label">
                                    2
                                </span>
                            </label>
                            <label class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" value="option3" disabled>
                                <span class="form-check-label">
                                    3
                                </span>
                            </label>
                        </div> -->

                        <div>
                            <label class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inline-radios-example" value="option1">
                                <span class="form-check-label">Chart </span>
                            </label>
                            <label class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inline-radios-example" value="option2">
                                <span class="form-check-label">Grid </span>
                            </label>
                            <label class="form-check form-check-inline">
                                <input checked class="form-check-input" type="radio" name="inline-radios-example" value="option3">
                                <span class="form-check-label">Map</span>
                            </label>
                        </div>
                    </li>
                    <form action="{{ route('refresh_request') }}" method="POST" enctype="multipart/form-data" id="filterForm">
                        @csrf
                        <!-- <li class="sidebar-header">
                            Situation
                        </li> -->

                        <li class="sidebar-item">
                            <div>
                                <div class="mx-4">
                                    <label class="form-label">Année</label>
                                    <select class="form-select" id="anneeSelect">
                                        <option value="2024">2024</option>
                                        <option value="">Tout</option>
                                        <option value="2023">2023</option>
                                    </select>
                                </div>
                                <div class="mx-4">
                                    <label class="form-label">Milieu</label>
                                    <select class="form-select" id="regionSelect">
                                        <option value="">Tout</option>
                                        <option value="Rural">Rural</option>
                                        <option value="Urbain">Urbain</option>
                                    </select>
                                </div>
                                <div class="mx-4">
                                    <label class="form-label">Commune</label>
                                    <select class="form-select" id="communeSelect">
                                        <option value="0000">Tout</option>
                                        <option value="3006">Manga</option>
                                        <option value="2208">Ténado</option>
                                    </select>
                                </div>
                                <div class="mx-4">
                                    <label class="form-label">Type de formation</label>
                                    <select class="form-select" id="typeSelect">
                                        <option value="">Tout</option>
                                        <option value="Manga">CSPS</option>
                                        <option value="Ténado">CM</option>
                                        <option value="Ténado">CMA</option>
                                        <option value="Ténado">Cabinet de soin</option>
                                    </select>
                                </div>
                            </div>
                        </li>
                    </form>

                    <li class="sidebar-header">
                        Indicateurs
                    </li>
                    <li class="sidebar-item">
                        <a data-bs-target="#dashboards" data-bs-toggle="collapse" class="sidebar-link collapsed">
                            <i class="align-middle" data-feather="home"></i> <span class="align-middle">Infrastructures</span>
                        </a>
                        <ul id="dashboards" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option0">
                                    <span class="form-check-label">
                                        Disponibilité de logement
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option1">
                                    <span class="form-check-label">
                                        Nombre de logement pour le personnel
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Existence d'un bloc opératoire
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Existence d'une unité de soins intensif
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Accès à l’énergie électrique (Sonabel)
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Existence d’énergie solaire au sein du centre de santé
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Existence d'une source améliorée d'eau
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
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
                                    <input class="form-check-input" type="checkbox" value="option0">
                                    <span class="form-check-label">
                                        Prise en Charge Intégrée des Maladies de l'Enfant (PCIME)
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option1">
                                    <span class="form-check-label">
                                        Services de santé des adolescents
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Services de planification familiale
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Services de consultation prénatale (CPN)
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        services de Prévention/éradication de la transmission mère-enfant (PTME/eTME)
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Service de Traitement préventif intermittent (TPI) pendant la grossesse
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Services d'accouchement
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Services SONUB
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Services SONUC
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Services de soins au nouveau né
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Services de soins au nouveau né en bonne santé
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Service de soins aux faibles poids de naissances, prématurés et nouveaux nés mal
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Services de consultation postnatale (CPoN)
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Services de soins après avortement
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        N'importe quel service de vaccination
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Services de vaccination des enfants
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Services de vaccination des adolescents
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Services d'interruption sécurisée de grossesse autorisée par la loi
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Administration parentérale d'antibiotiques
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Administration parentérale d'ocytocine
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Administration parentérale de sulfate de magnésium
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Accouchement vaginal assisté
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Extraction manuelle du placenta
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Extraction des produits retenus après l'accouchement
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Réanimation néonatale
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Césarienne
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Transfusion sanguine
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
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
                                    <input class="form-check-input" type="checkbox" value="option0">
                                    <span class="form-check-label">
                                        Nombre de médecins spécialistes
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option1">
                                    <span class="form-check-label">
                                        Nombre de médecins généralistes
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Nombre d'attachés de santé
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Nombre de sage-femmes et maieuticiens
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Nombre d'infirmiers (IDE, IB)
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
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
                                    <input class="form-check-input" type="checkbox" value="option0">
                                    <span class="form-check-label">
                                        Disponibilité de: œstrogène et progestérone oral combiné
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option1">
                                    <span class="form-check-label">
                                        Disponibilité de: progestérone oral
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Disponibilité de: Progestérone et œstrogène combiné injectable
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Disponibilité de: progestérone injectable
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Disponibilité de: Condoms masculins
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Disponibilité de: Condoms féminins
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Disponibilité de: Implant
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Disponibilité de: contraceptifs d'urgence
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Disponibilité de: DIU
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Disponibilité de: Collier
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Tensiomètre
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        stéthoscope fœtal/pinard
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Balance pour adulte
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        lit d'examen
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Mesureur de Bande
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Moustiquaires
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Disponibilité de: Test rapide d'hémoglobine / hématocrite (papier de tournesol)
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Disponibilité de: Test rapide de syphilis
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Disponibilité de: Bandelette urinaire pour le dosage de la protéinurie
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Disponibilité de: Test d'urine pour la grossesse (TIG)
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Médicaments et Diagnostic: Test rapide du VIH
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Médicaments et Diagnostic: Papier filtre pour tache de sang sèche
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Médicaments et Diagnostic: Sirop de névirapine
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Médicaments et Diagnostic: Sirop de zidovudine
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Médicaments et Diagnostic: Sirop de cotrimoxazole
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Médicaments et Diagnostic: Prophylaxie ARV maternelle 1ere ligne
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Soins postavortum, disponibilité : aspirateur à vide
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Soins postavortum, disponibilité :kit Dilatation &Curetage
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Soins postavortum, disponibilité :canule (4, 5, 6, 7, 8, 9, 10, 12, 14mm)
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Soins postavortum, disponibilité :spéculum
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Soins postavortum, disponibilité :antiseptique pour le lavage du vagin et du co
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Soins postavortum, disponibilité :gants stériles
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Disponibilité du vaccin: vaccin contre la rougeole et diluant
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Disponibilité du vaccin: DPT+Hib+HepB
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Disponibilité du vaccin: vaccin antipoliomyélitique oral
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Disponibilité du vaccin: vaccin BCG et diluant
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Disponibilité du vaccin: vaccin antirotavirus
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Disponibilité du vaccin: vaccin antipneumococcique
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Disponibilité du vaccin: VPI
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Disponibilité du vaccin: VPH
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Disponibilité du vaccin: anatoxine tétanique ou TD
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Disponibilité du vaccin: vaccin antirabique
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Disponibilité du vaccin: grippe
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Disponibilité du vaccin: typhoïde
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Disponibilité du vaccin: fièvre jaune
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Disponibilité du vaccin: méningite à méningocoques
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Disponibilité des ambulances:
                                    </span>
                                </label>
                            </li>
                            <li class="sidebar-item sidebar-link">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2">
                                    <span class="form-check-label">
                                        Nombre des ambulances:
                                    </span>
                                </label>
                            </li>
                        </ul>
                    </li>


                    <!-- <li class="sidebar-item">
                        <a data-bs-target="#multi" data-bs-toggle="collapse" class="sidebar-link collapsed">
                            <i class="align-middle" data-feather="corner-right-down"></i> <span
                                class="align-middle">Multi Level</span>
                        </a>
                        <ul id="multi" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                            <li class="sidebar-item">
                                <a data-bs-target="#multi-2" data-bs-toggle="collapse"
                                    class="sidebar-link collapsed">Two Levels</a>
                                <ul id="multi-2" class="sidebar-dropdown list-unstyled collapse">
                                    <li class="sidebar-item">
                                        <a class="sidebar-link" href="#">Item 1</a>
                                    </li>
                                    <li class="sidebar-item">
                                        <a class="sidebar-link" href="#">Item 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="sidebar-item">
                                <a data-bs-target="#multi-3" data-bs-toggle="collapse"
                                    class="sidebar-link collapsed">Three Levels</a>
                                <ul id="multi-3" class="sidebar-dropdown list-unstyled collapse">
                                    <li class="sidebar-item">
                                        <a data-bs-target="#multi-3-1" data-bs-toggle="collapse"
                                            class="sidebar-link collapsed">Item 1</a>
                                        <ul id="multi-3-1" class="sidebar-dropdown list-unstyled collapse">
                                            <li class="sidebar-item">
                                                <a class="sidebar-link" href="#">Item 1</a>
                                            </li>
                                            <li class="sidebar-item">
                                                <a class="sidebar-link" href="#">Item 2</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="sidebar-item">
                                        <a class="sidebar-link" href="#">Item 2</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li> -->
                </ul>

                <div class="sidebar-cta">
                    <div class="sidebar-cta-content">
                        <!-- <strong class="d-inline-block mb-2">Weekly Sales Report</strong>
						<div class="mb-3 text-sm">
							Your weekly sales report is ready for download!
						</div> -->

                        <div class="d-grid">
                            <a href="#" class="btn btn-outline-primary" target="_blank">Télécharger les donnérs</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <div class="main">
            <nav class="navbar navbar-expand navbar-light navbar-bg">
                <a class="sidebar-toggle js-sidebar-toggle">
                    <i class="hamburger align-self-center"></i>
                </a>

                <form class="d-none d-sm-inline-block">
                    <div class="input-group input-group-navbar">
                        <input type="text" class="form-control" placeholder="Search…" aria-label="Search">
                        <button class="btn" type="button">
                            <i class="align-middle" data-feather="search"></i>
                        </button>
                    </div>
                </form>

                <!-- <ul class="navbar-nav d-none d-lg-flex">
                    <li class="nav-item px-2 dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="megaDropdown" role="button"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Mega Menu
                        </a>
                        <div class="dropdown-menu dropdown-menu-start dropdown-mega" aria-labelledby="megaDropdown">
                            <div class="d-md-flex align-items-start justify-content-start">
                                <div class="dropdown-mega-list">
                                    <div class="dropdown-header">UI Elements</div>
                                    <a class="dropdown-item" href="#">Alerts</a>
                                    <a class="dropdown-item" href="#">Buttons</a>
                                    <a class="dropdown-item" href="#">Cards</a>
                                    <a class="dropdown-item" href="#">Carousel</a>
                                    <a class="dropdown-item" href="#">General</a>
                                    <a class="dropdown-item" href="#">Grid</a>
                                    <a class="dropdown-item" href="#">Modals</a>
                                    <a class="dropdown-item" href="#">Tabs</a>
                                    <a class="dropdown-item" href="#">Typography</a>
                                </div>
                                <div class="dropdown-mega-list">
                                    <div class="dropdown-header">Forms</div>
                                    <a class="dropdown-item" href="#">Layouts</a>
                                    <a class="dropdown-item" href="#">Basic Inputs</a>
                                    <a class="dropdown-item" href="#">Input Groups</a>
                                    <a class="dropdown-item" href="#">Advanced Inputs</a>
                                    <a class="dropdown-item" href="#">Editors</a>
                                    <a class="dropdown-item" href="#">Validation</a>
                                    <a class="dropdown-item" href="#">Wizard</a>
                                </div>
                                <div class="dropdown-mega-list">
                                    <div class="dropdown-header">Tables</div>
                                    <a class="dropdown-item" href="#">Basic Tables</a>
                                    <a class="dropdown-item" href="#">Responsive Table</a>
                                    <a class="dropdown-item" href="#">Table with Buttons</a>
                                    <a class="dropdown-item" href="#">Column Search</a>
                                    <a class="dropdown-item" href="#">Muulti Selection</a>
                                    <a class="dropdown-item" href="#">Ajax Sourced Data</a>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="resourcesDropdown" role="button"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Resources
                        </a>
                        <div class="dropdown-menu" aria-labelledby="resourcesDropdown">
                            <a class="dropdown-item" href="https://adminkit.io/" target="_blank"><i
                                    class="align-middle me-1" data-feather="home"></i>
                                Homepage</a>
                            <a class="dropdown-item" href="https://adminkit.io/docs/" target="_blank"><i
                                    class="align-middle me-1" data-feather="book-open"></i>
                                Documentation</a>
                            <a class="dropdown-item" href="https://adminkit.io/docs/getting-started/changelog/"
                                target="_blank"><i class="align-middle me-1" data-feather="edit"></i> Changelog</a>
                        </div>
                    </li>
                </ul> -->

                <div class="navbar-collapse collapse">
                    <ul class="navbar-nav navbar-align">
                        <!-- <li class="nav-item dropdown">
                            <a class="nav-flag dropdown-toggle" href="#" id="languageDropdown"
                                data-bs-toggle="dropdown">
                                <img src="{{ URL::asset('assets/img/flags/fr.png') }}" alt="Français" />
                                </a>
                            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
                                <a class="dropdown-item" href="#">
                                    <img src="{{ URL::asset('assets/img/flags/fr.png') }}" alt="Français" width="20" class="align-middle me-1" />
                                    <span class="align-middle">Français</span>
                                </a>
                                <a class="dropdown-item" href="#">
                                    <img src="{{ URL::asset('assets/img/flags/us.png') }}" alt="Anglais" width="20" class="align-middle me-1" />
                                    <span class="align-middle">Anglais</span>
                                </a>
                            </div>
                        </li> -->
                        <li class="nav-item">
                            <a class="nav-icon js-fullscreen d-none d-lg-block" href="#">
                                <div class="position-relative">
                                    <i class="align-middle" data-feather="maximize"></i>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-icon pe-md-0 dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                <img src="{{ URL::asset('assets/img/avatars/avatar.jpg') }}" class="avatar img-fluid rounded" alt="Charles Hall" />
                            </a>
                            <div class="dropdown-menu dropdown-menu-end">
                                <a class='dropdown-item' href='pages-profile.html'><i class="align-middle me-1"
                                        data-feather="user"></i> Profil</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Déconnexion</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

            <main class="content">
                <div class="container-fluid p-0">

                    <div class="row mb-2 mb-xl-3">
                        <div class="col-auto d-none d-sm-block">
                            <h3><strong>RCDI</strong> Cartographie des formations sanitaires</h3>
                        </div>
                        <!-- 
						<div class="col-auto ms-auto text-end mt-n1">
							<a href="#" class="btn btn-light bg-white me-2">Invite a Friend</a>
							<a href="#" class="btn btn-primary">New Project</a>
						</div> -->
                    </div>

                    <div class="row">
                        <div class="col-12 col-md-3 col-xxl-3 d-flex order-1 order-xxl-1">
                            <div class="card flex-fill w-100">
                                <!-- <div class="card-header">
                                    <div class="card-actions float-end">
                                        <div class="dropdown position-relative">
                                            <a href="#" data-bs-toggle="dropdown" data-bs-display="static">
                                                <i class="align-middle" data-feather="more-horizontal"></i>
                                            </a>

                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 class="card-title mb-0">Browser Usage</h5>
                                </div> -->
                                <div class="card-body d-flex">
                                    <div class="align-self-center w-100">
                                        <div class="py-3">
                                            <div class="chart chart-xs">
                                                <canvas id="chartjs-dashboard-pie"></canvas>
                                            </div>
                                        </div>

                                        <table class="table mb-0">
                                            <tbody>
                                                <tr>
                                                    <td><i class="fas fa-circle text-primary fa-fw"></i>Nombre de CM</td>
                                                    <td class="text-end" id="cm_filtered"></td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fas fa-circle text-secondary fa-fw"></i> Nombre de CMA</td>
                                                    <td class="text-end" id="cma_filtered"></td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fas fa-circle text-success fa-fw"></i> Nombre de CSPS</td>
                                                    <td class="text-end" id="csps_filtered"></td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fas fa-circle text-info fa-fw"></i> Nombre de Cabinet de soins</td>
                                                    <td class="text-end" id="cabinet_filtered"></td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fas fa-circle text-primary fa-fw"></i>Nombre de Centre de kinésithérapie</td>
                                                    <td class="text-end" id="kine_filtered"></td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fas fa-circle text-warning fa-fw"></i> Nombre de médecins spécialistes</td>
                                                    <td class="text-end" id="effectif_medspeci"></td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fas fa-circle text-primary fa-fw"></i>Nombre de médecins généralistes</td>
                                                    <td class="text-end" id="effectif_medgen"></td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fas fa-circle text-secondary fa-fw"></i> Nombre d'attachés de santé</td>
                                                    <td class="text-end" id="effectif_attach"></td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fas fa-circle text-body-secondary fa-fw"></i> Nombre de Sage-femme</td>
                                                    <td class="text-end" id="sagef"></td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fas fa-circle text-body-tertiary fa-fw"></i> Nombre d'Infirmier</td>
                                                    <td class="text-end" id="infirmier"></td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fas fa-circle text-success fa-fw"></i> Effectif des autres agents de santé</td>
                                                    <td class="text-end" id="autrep"></td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fas fa-circle text-body-emphasis fa-fw"></i> Nombre de Logement</td>
                                                    <td class="text-end" id="nbre_log"></td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fas fa-circle text-danger fa-fw"></i> Nombre d'ambulances</td>
                                                    <td class="text-end" id="nb_ambulance"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-9 col-xxl-9 d-flex order-3 order-xxl-3">
                            <div class="card flex-fill w-100">

                                <div class="card-body px-4">
                                    <!-- <div id="world_map" style="height:600px;"></div> -->
                                    <div id="map" style="height:700px;"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            <footer class="footer">
                <div class="container-fluid">
                    <div class="row text-muted">
                        <div class="col-6 text-start">
                            <p class="mb-0">
                                <a href="#" target="_blank"
                                    class="text-muted"><strong>ISSP</strong></a> &copy;
                            </p>
                        </div>
                        <div class="col-6 text-end">
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <a class="text-muted" href="#">Support</a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="text-muted" href="#">Politiques de sécurité</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>

    <script>
        var map = L.map('map').setView([12.2418505, -1.5567604999999958], 7);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 20,
            // attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        var polygon = L.polygon([
            [51.509, -0.08],
            [51.503, -0.06],
            [51.51, -0.047],
        ], {
            color: 'red'
        }).addTo(map);

        // Récupération des tokens et éléments nécessaires
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        const regionSelect = document.getElementById('regionSelect');
        const communeSelect = document.getElementById('communeSelect');

        var markersGroup = L.layerGroup().addTo(map);

        document.addEventListener("DOMContentLoaded", function() {
            var results = @json($results);
            let effectif_medspeci = 0;
            let effectif_medgen = 0;
            let effectif_attach = 0;
            let sagef = 0;
            let infirmier = 0;
            let autrep = 0;
            let nbre_log = 0;
            let nb_ambulance = 0;

            results.forEach(result => {
                var marker = L.marker([result.lat, result.lon]);
                marker.bindPopup("<b>" + result.nom_structure + "</b><br><div class='d-grid'><a style='color:white' class='btn btn-lg btn-primary' href=''>voir plus</a></div>");
                markersGroup.addLayer(marker);

                effectif_medspeci += result.new_data[0].effectif_medspeci || 0;
                effectif_medgen += result.new_data[0].effectif_medgen || 0;
                effectif_attach += result.new_data[0].effectif_attach || 0;
                sagef += result.new_data[0].sagef || 0;
                infirmier += result.new_data[0].infirmier || 0;
                autrep += result.new_data[0].autrep || 0;
                nbre_log += result.new_data[0].nbre_log || 0;
                nb_ambulance += result.new_data[0].nb_ambulance || 0;
            });

            const cm_filtered = results.filter(item => item.new_data[0].q113 === 'CM' || item.new_data[0].q113 === 'centre médical').length;
            const cma_filtered = results.filter(item => item.new_data[0].q113 === 'CMA').length;
            const csps_filtered = results.filter(item => item.new_data[0].q113 === 'CSPS').length;
            const cabinet_filtered = results.filter(item => item.new_data[0].q113 === 'cabinet de soins infirmiers').length;
            const kine_filtered = results.filter(item => item.new_data[0].q113 === 'centre de kinésithérapie').length;

            document.getElementById('cm_filtered').innerHTML = cm_filtered;
            document.getElementById('cma_filtered').innerHTML = cma_filtered;
            document.getElementById('csps_filtered').innerHTML = csps_filtered;
            document.getElementById('cabinet_filtered').innerHTML = cabinet_filtered;
            document.getElementById('kine_filtered').innerHTML = kine_filtered;
            document.getElementById('effectif_medspeci').innerHTML = effectif_medspeci;
            document.getElementById('effectif_medgen').innerHTML = effectif_medgen;
            document.getElementById('effectif_attach').innerHTML = effectif_attach;
            document.getElementById('sagef').innerHTML = sagef;
            document.getElementById('infirmier').innerHTML = infirmier;
            document.getElementById('autrep').innerHTML = autrep;
            document.getElementById('nbre_log').innerHTML = nbre_log;
            document.getElementById('nb_ambulance').innerHTML = nb_ambulance;

            new Chart(document.getElementById("chartjs-dashboard-pie"), {
                type: "pie",
                data: {
                    labels: ["Nombre de CM", "Nombre de CMA", "Nombre de CSPS", "Nombre de Cabinet de soins", "Nombre de Medecins", "Nombre de Sage-femme", " Nombre d'Infirmier", "Nombre de Logement", "Nombre d'ambulances"],
                    datasets: [{
                        data: [4306, 3801, 1689, 3251, 4306, 3801, 1689, 3251, 4306],
                        backgroundColor: [
                            window.theme.primary,
                            window.theme.secondary,
                            window.theme.success,
                            window.theme.info,
                            window.theme.warning,
                            window.theme.secondary,
                            window.theme.primary,
                            window.theme.secondary,
                            window.theme.danger,
                            "#E8EAED"
                        ],
                        borderWidth: 5,
                        borderColor: window.theme.white
                    }]
                },
                options: {
                    responsive: !window.MSInputMethodContext,
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    cutoutPercentage: 60
                }
            });
        });

        // Fonction pour exécuter une requête à chaque changement
        async function handleFilterChange() {
            const region = regionSelect.value;
            const commune = communeSelect.value;

            try {
                const response = await axios.post("{{ route('refresh_request') }}", {
                    region: region,
                    commune: commune
                }, {
                    headers: {
                        'X-CSRF-TOKEN': csrfToken // Ajout du token CSRF pour Laravel
                    }
                });
                markersGroup.clearLayers();
                if (response.data.results.length > 0) {
                    // const cm_filtered = response.data.results.filter(item => item.new_data.q113 === 'CM').length;
                    const cm_filtered = response.data.results.filter(item => item.new_data[0].q113 === 'CM' || item.new_data[0].q113 === 'centre médical').length;
                    const cma_filtered = response.data.results.filter(item => item.new_data[0].q113 === 'CMA').length;
                    const csps_filtered = response.data.results.filter(item => item.new_data[0].q113 === 'CSPS').length;
                    const cabinet_filtered = response.data.results.filter(item => item.new_data[0].q113 === 'cabinet de soins infirmiers').length;
                    const kine_filtered = response.data.results.filter(item => item.new_data[0].q113 === 'centre de kinésithérapie').length;

                    document.getElementById('cm_filtered').innerHTML = cm_filtered;
                    document.getElementById('cma_filtered').innerHTML = cma_filtered;
                    document.getElementById('csps_filtered').innerHTML = csps_filtered;
                    document.getElementById('cabinet_filtered').innerHTML = cabinet_filtered;
                    document.getElementById('kine_filtered').innerHTML = kine_filtered;

                    let polygonCoordinates = [];
                    let effectif_medspeci = 0;
            let effectif_medgen = 0;
            let effectif_attach = 0;
            let sagef = 0;
            let infirmier = 0;
            let autrep = 0;
            let nbre_log = 0;
            let nb_ambulance = 0;
                    response.data.results.forEach(result => {
                        polygonCoordinates.push([result.new_data[0].gps_latitude, result.new_data[0].gps_longitude]);
                        var marker = L.marker([result.lat, result.lon]);
                        marker.bindPopup("<b>" + result.nom_structure + "</b><br><div class='d-grid'><a style='color:white' class='btn btn-lg btn-primary' href=''>voir plus</a></div>");
                        markersGroup.addLayer(marker);

                        effectif_medspeci += result.new_data[0].effectif_medspeci || 0;
                        effectif_medgen += result.new_data[0].effectif_medgen || 0;
                        effectif_attach += result.new_data[0].effectif_attach || 0;
                        sagef += result.new_data[0].sagef || 0;
                        infirmier += result.new_data[0].infirmier || 0;
                        autrep += result.new_data[0].autrep || 0;
                        nbre_log += result.new_data[0].nbre_log || 0;
                        nb_ambulance += result.new_data[0].nb_ambulance || 0;
                    });

                    document.getElementById('effectif_medspeci').innerHTML = effectif_medspeci;
                    document.getElementById('effectif_medgen').innerHTML = effectif_medgen;
                    document.getElementById('effectif_attach').innerHTML = effectif_attach;
                    document.getElementById('sagef').innerHTML = sagef;
                    document.getElementById('infirmier').innerHTML = infirmier;
                    document.getElementById('autrep').innerHTML = autrep;
                    document.getElementById('nbre_log').innerHTML = nbre_log;
                    document.getElementById('nb_ambulance').innerHTML = nb_ambulance;

                    var bounds = markersGroup.getBounds();
                    if (bounds.isValid()) {
                        map.fitBounds(bounds);
                    }

                    if (polygonCoordinates.length > 2) {
                        console.log(polygonCoordinates);
                        var polygon = L.polygon(polygonCoordinates, {
                            color: 'red',
                            weight: 2,
                            fillOpacity: 0.4
                        }).addTo(map);
                        polygon.bindPopup("Zone délimitée par les points sélectionnés.");
                    }

                } else {}
            } catch (error) {
                console.error("Erreur lors de la requête :", error);
            }
        }

        // Écouteurs d'événements pour les listes déroulantes
        regionSelect.addEventListener('change', handleFilterChange);
        communeSelect.addEventListener('change', handleFilterChange);
    </script>


</body>

</html>