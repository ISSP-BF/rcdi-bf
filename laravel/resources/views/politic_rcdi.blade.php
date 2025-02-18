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

<body data-theme="default" data-layout="fluid" data-sidebar-position="left" data-sidebar-layout="default">
    <div class="row">
        <div class="col-lg-12">
            <div>
                <!-- Tab panes -->
                <div class="tab-content pt-4 text-muted">
                    <div class="tab-pane active" id="overview-tab" role="tabpanel">
                        <div class="row">
                            <!--end col-->
                            <div class="col-xxl-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title mb-3">Politique de Confidentialité pour l'Application "RCDI-Mobile"</h5>
                                        <p>Cette politique de confidentialité régit la manière dont "RCDI-Mobile" collecte, utilise, maintient et divulgue les informations collectées auprès des utilisateurs (ci-après "Utilisateurs") de l'application "RCDI-Mobile".</p>

                                        <h5 class="card-title mb-3">Collecte et Utilisation des Informations"</h5>
                                        <p>L'application "RCDI-Mobile" collecte uniquement l'email et le mot de passe des utilisateurs lors de l'inscription. Ces informations sont utilisés pour vérifier l'authentification des utilisateurs.</p>

                                        <h5 class="card-title mb-3">Protection des Informations</h5>
                                        <p>Nous adoptons des pratiques appropriées de collecte, de stockage et de traitement des données pour protéger contre tout accès non autorisé, altération, divulgation ou destruction des informations collectées, y compris les numéros de téléphone des utilisateurs.</p>

                                        <h5 class="card-title mb-3">Partage des Informations</h5>
                                        <p>"RCDI-Mobile" ne partage aucune information des utilisateurs avec des tiers.</p>

                                        <h5 class="card-title mb-3">Acceptation de ces Termes</h5>
                                        <p>En utilisant l'application "RCDI-Mobile", vous signifiez votre acceptation de cette politique de confidentialité. Si vous n'acceptez pas cette politique, veuillez ne pas utiliser notre application.</p>

                                    </div>
                                    <!--end card-body-->
                                </div><!-- end card -->
                            </div>
                            <!--end col-->
                        </div>
                        <!--end row-->
                    </div>
                </div>
                <!--end tab-content-->
            </div>
        </div>
        <!--end col-->
    </div>
</body>

</html>