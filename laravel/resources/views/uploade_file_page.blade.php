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
                        Pages
                    </li>
                    <li class="sidebar-item active">
                        <a data-bs-target="#dashboards" data-bs-toggle="collapse" class="sidebar-link">
                            <i class="align-middle" data-feather="sliders"></i> <span class="align-middle">Dashboards</span>
                        </a>
                        <ul id="dashboards" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                            <li class="sidebar-item active"><a class='sidebar-link' href="">Analytics</a></li>
                            <li class="sidebar-item"><a class='sidebar-link' href="">E-Commerce</a></li>
                            <li class="sidebar-item"><a class='sidebar-link' href="">Crypto</a></li>
                        </ul>
                    </li>
                </ul>
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

            <main class="d-flex w-100 h-100">
                <div class="container d-flex flex-column">
                    <div class="row vh-100">
                        <div class="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
                            <div class="d-table-cell align-middle">

                                <div class="text-center mt-4">
                                    <h1 class="h4">Importation de données des formations sanitaires</h1>
                                </div>

                                <div class="card">
                                    <div class="card-body">
                                        <div class="m-sm-3">
                                            <form action="{{ route('uploade_file_store') }}" method="POST" enctype="multipart/form-data">
                                                @csrf
                                                <div class="mb-3">
                                                    <input class="form-control form-control-lg" type="file" name="file" />
                                                </div>
                                                <div class="d-grid gap-2 mt-3">
                                                    <button class='btn btn-lg btn-primary' type="submit"><i class="fas fa-upload"></i> Importer</button>
                                                </div>
                                                <div class="j-response-card"></div>
                                            </form>
                                        </div>
                                    </div>
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
        $(document).ready(function() {
            const responseDiv = document.querySelector('.j-response-card');
            var text = @json(session('error'));
            if (text) {
                responseDiv.innerHTML = '<p class="text-danger">' + text + '</p>';
                return;
            }

            const succes_responseDiv = document.querySelector('.j-response-card');
            var success = @json(session('success'));
            if (success) {
                succes_responseDiv.innerHTML = '<p class="text-success">' + success + '</p>';
                return;
            }
        });

        document.querySelector('input[type="file"]').addEventListener('change', function() {
            const allowedExtensions = ['csv', 'xls', 'xlsx']; // Extensions autorisées
            const maxFileSize = 5 * 1024 * 1024; // Taille maximale (1 Mo)

            const file = this.files[0];
            const responseDiv = document.querySelector('.j-response-card');
            responseDiv.innerHTML = '';

            if (file) {
                const fileName = file.name;
                const fileSize = file.size;
                const fileExtension = fileName.split('.').pop().toLowerCase();

                if (!allowedExtensions.includes(fileExtension)) {
                    responseDiv.innerHTML = '<p class="text-danger">Format non valide. Les extensions autorisées sont : csv, xls, xlsx.</p>';
                    this.value = '';
                    return;
                }

                if (fileSize > maxFileSize) {
                    responseDiv.innerHTML = '<p class="text-danger">Le fichier est trop volumineux. La taille maximale autorisée est de 1 Mo.</p>';
                    this.value = '';
                    return;
                }

                responseDiv.innerHTML = '<p class="text-success">Fichier valide : ' + fileName + '</p>';
            }
        });

        document.querySelector('form').addEventListener('submit', function(e) {
            const fileInput = document.querySelector('input[type="file"]');
            if (!fileInput.value) {
                e.preventDefault(); // Empêche la soumission
                document.querySelector('.j-response-card').innerHTML = '<p class="text-danger">Veuillez sélectionner un fichier valide avant de soumettre.</p>';
                return;
            }
            this.submit();
        });
    </script>

</body>

</html>