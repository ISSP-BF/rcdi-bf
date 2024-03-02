import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () =>
    import ('@/containers/TheContainer')

// Views
const Dashboard = () =>
    import ('@/views/Dashboard')

const Colors = () =>
    import ('@/views/theme/Colors')
const Typography = () =>
    import ('@/views/theme/Typography')

const Charts = () =>
    import ('@/views/charts/Charts')
const Widgets = () =>
    import ('@/views/widgets/Widgets')

// Views - Components
const Cards = () =>
    import ('@/views/base/Cards')
const Forms = () =>
    import ('@/views/base/Forms')
const Switches = () =>
    import ('@/views/base/Switches')
const Tables = () =>
    import ('@/views/base/Tables')
const Tabs = () =>
    import ('@/views/base/Tabs')
const Breadcrumbs = () =>
    import ('@/views/base/Breadcrumbs')
const Carousels = () =>
    import ('@/views/base/Carousels')
const Collapses = () =>
    import ('@/views/base/Collapses')
const Jumbotrons = () =>
    import ('@/views/base/Jumbotrons')
const ListGroups = () =>
    import ('@/views/base/ListGroups')
const Navs = () =>
    import ('@/views/base/Navs')
const Navbars = () =>
    import ('@/views/base/Navbars')
const Paginations = () =>
    import ('@/views/base/Paginations')
const Popovers = () =>
    import ('@/views/base/Popovers')
const ProgressBars = () =>
    import ('@/views/base/ProgressBars')
const Tooltips = () =>
    import ('@/views/base/Tooltips')

// Views - Buttons
const StandardButtons = () =>
    import ('@/views/buttons/StandardButtons')
const ButtonGroups = () =>
    import ('@/views/buttons/ButtonGroups')
const Dropdowns = () =>
    import ('@/views/buttons/Dropdowns')
const BrandButtons = () =>
    import ('@/views/buttons/BrandButtons')

// Views - Icons
const CoreUIIcons = () =>
    import ('@/views/icons/CoreUIIcons')
const Brands = () =>
    import ('@/views/icons/Brands')
const Flags = () =>
    import ('@/views/icons/Flags')

// Views - Notifications
const Alerts = () =>
    import ('@/views/notifications/Alerts')
const Badges = () =>
    import ('@/views/notifications/Badges')
const Modals = () =>
    import ('@/views/notifications/Modals')

// Views - Pages
const Page404 = () =>
    import ('@/views/pages/Page404')
const Page500 = () =>
    import ('@/views/pages/Page500')
const Login = () =>
    import ('@/views/pages/Login')
const Register = () =>
    import ('@/views/pages/Register')

// Users
const Users = () =>
    import ('@/views/users/Users')
const User = () =>
    import ('@/views/users/User')
const EditUser = () =>
    import ('@/views/users/EditUser')
const ProfilUser = () =>
    import ('@/views/users/ProfilUser')
const CreateUser = () =>
    import ('@/views/users/CreateUser')

//Notes
const Notes = () =>
    import ('@/views/notes/Notes')
const Note = () =>
    import ('@/views/notes/Note')
const EditNote = () =>
    import ('@/views/notes/EditNote')
const CreateNote = () =>
    import ('@/views/notes/CreateNote')


//Regions
const Regions = () =>
    import ('@/views/regions/Regions')
const Region = () =>
    import ('@/views/regions/Region')
const EditRegion = () =>
    import ('@/views/regions/EditRegion')
const CreateRegion = () =>
    import ('@/views/regions/CreateRegion')

//FoireQuestions
const FoireQuestions = () =>
    import ('@/views/FoireQuestion/FoireQuestions')
const FoireQuestion = () =>
    import ('@/views/FoireQuestion/FoireQuestion')
const EditFoireQuestion = () =>
    import ('@/views/FoireQuestion/EditFoireQuestion')
const CreateFoireQuestion = () =>
    import ('@/views/FoireQuestion/CreateFoireQuestion')

//Provinces
const Provinces = () =>
    import ('@/views/provinces/Provinces')
const Province = () =>
    import ('@/views/provinces/Province')
const EditProvince = () =>
    import ('@/views/provinces/EditProvince')
const CreateProvince = () =>
    import ('@/views/provinces/CreateProvince')

//Communes
const Communes = () =>
    import ('@/views/communes/Communes')
const Commune = () =>
    import ('@/views/communes/Commune')
const EditCommune = () =>
    import ('@/views/communes/EditCommune')
const CreateCommune = () =>
    import ('@/views/communes/CreateCommune')

//Professions
const Professions = () =>
    import ('@/views/professions/Professions')
const Profession = () =>
    import ('@/views/professions/Profession')
const EditProfession = () =>
    import ('@/views/professions/EditProfession')
const CreateProfession = () =>
    import ('@/views/professions/CreateProfession')
    //Districts
const Districts = () =>
    import ('@/views/districts/Districts')
const District = () =>
    import ('@/views/districts/District')
const EditDistrict = () =>
    import ('@/views/districts/EditDistrict')
const CreateDistrict = () =>
    import ('@/views/districts/CreateDistrict')
    //FormationSanitaires
const FormationSanitaires = () =>
    import ('@/views/formation_sanitaires/FormationSanitaires')
const FormationSanitaire = () =>
    import ('@/views/formation_sanitaires/FormationSanitaire')
const EditFormationSanitaire = () =>
    import ('@/views/formation_sanitaires/EditFormationSanitaire')
const CreateFormationSanitaire = () =>
    import ('@/views/formation_sanitaires/CreateFormationSanitaire')


//ActeNaissances
const ActeNaissances = () =>
    import ('@/views/acte_naissances/ActeNaissances')
const ActeNaissance = () =>
    import ('@/views/acte_naissances/ActeNaissance')
const EditActeNaissance = () =>
    import ('@/views/acte_naissances/EditActeNaissance')
const CreateActeNaissance = () =>
    import ('@/views/acte_naissances/CreateActeNaissance')

//ActeDeces
const ActeDecess = () =>
    import ('@/views/acte_deces/ActeDecesl')
const ActeDeces = () =>
    import ('@/views/acte_deces/ActeDeces')
const EditActeDeces = () =>
    import ('@/views/acte_deces/EditActeDeces')
const CreateActeDeces = () =>
    import ('@/views/acte_deces/CreateActeDeces')

//ActeMariages
const ActeMariages = () =>
    import ('@/views/acte_mariages/ActeMariages')
const ActeMariage = () =>
    import ('@/views/acte_mariages/ActeMariage')
const EditActeMariage = () =>
    import ('@/views/acte_mariages/EditActeMariage')
const CreateActeMariage = () =>
    import ('@/views/acte_mariages/CreateActeMariage')

//ConsultationPrenatales
const ConsultationPrenatales = () =>
    import ('@/views/consultation_prenatales/ConsultationPrenatales')
const ConsultationPrenatale = () =>
    import ('@/views/consultation_prenatales/ConsultationPrenatale')
const EditConsultationPrenatale = () =>
    import ('@/views/consultation_prenatales/EditConsultationPrenatale')
const CreateConsultationPrenatale = () =>
    import ('@/views/consultation_prenatales/CreateConsultationPrenatale')

//Ptmes
const Ptmes = () =>
    import ('@/views/ptmes/Ptmes')
const Ptme = () =>
    import ('@/views/ptmes/Ptme')
const EditPtme = () =>
    import ('@/views/ptmes/EditPtme')
const CreatePtme = () =>
    import ('@/views/ptmes/CreatePtme')

//Accouchements
const Accouchements = () =>
    import ('@/views/accouchements/Accouchements')
const Accouchement = () =>
    import ('@/views/accouchements/Accouchement')
const EditAccouchement = () =>
    import ('@/views/accouchements/EditAccouchement')
const CreateAccouchement = () =>
    import ('@/views/accouchements/CreateAccouchement')


//ConsultationPostnatales
const ConsultationPostnatales = () =>
    import ('@/views/consultation_postnatales/ConsultationPostnatales')
const ConsultationPostnatale = () =>
    import ('@/views/consultation_postnatales/ConsultationPostnatale')
const EditConsultationPostnatale = () =>
    import ('@/views/consultation_postnatales/EditConsultationPostnatale')
const CreateConsultationPostnatale = () =>
    import ('@/views/consultation_postnatales/CreateConsultationPostnatale')

//VaccinationEnfants
const VaccinationEnfants = () =>
    import ('@/views/vaccination_enfants/VaccinationEnfants')
const VaccinationEnfant = () =>
    import ('@/views/vaccination_enfants/VaccinationEnfant')
const EditVaccinationEnfant = () =>
    import ('@/views/vaccination_enfants/EditVaccinationEnfant')
const CreateVaccinationEnfant = () =>
    import ('@/views/vaccination_enfants/CreateVaccinationEnfant')


//PlanificationFamiliales
const PlanificationFamiliales = () =>
    import ('@/views/planification_familiales/PlanificationFamiliales')
const PlanificationFamiliale = () =>
    import ('@/views/planification_familiales/PlanificationFamiliale')
const EditPlanificationFamiliale = () =>
    import ('@/views/planification_familiales/EditPlanificationFamiliale')
const CreatePlanificationFamiliale = () =>
    import ('@/views/planification_familiales/CreatePlanificationFamiliale')

//MorbilitePaludismes
const MorbilitePaludismes = () =>
    import ('@/views/morbilite_paludismes/MorbilitePaludismes')
const MorbilitePaludisme = () =>
    import ('@/views/morbilite_paludismes/MorbilitePaludisme')
const EditMorbilitePaludisme = () =>
    import ('@/views/morbilite_paludismes/EditMorbilitePaludisme')
const CreateMorbilitePaludisme = () =>
    import ('@/views/morbilite_paludismes/CreateMorbilitePaludisme')

//ServiceCuratifs
const ServiceCuratifs = () =>
    import ('@/views/service_curatifs/ServiceCuratifs')
const ServiceCuratif = () =>
    import ('@/views/service_curatifs/ServiceCuratif')
const EditServiceCuratif = () =>
    import ('@/views/service_curatifs/EditServiceCuratif')
const CreateServiceCuratif = () =>
    import ('@/views/service_curatifs/CreateServiceCuratif')
    //SystemeInformationSanitaires
const SystemeInformationSanitaires = () =>
    import ('@/views/systeme_information_sanitaires/SystemeInformationSanitaires')
const SystemeInformationSanitaire = () =>
    import ('@/views/systeme_information_sanitaires/SystemeInformationSanitaire')
const EditSystemeInformationSanitaire = () =>
    import ('@/views/systeme_information_sanitaires/EditSystemeInformationSanitaire')
const CreateSystemeInformationSanitaire = () =>
    import ('@/views/systeme_information_sanitaires/CreateSystemeInformationSanitaire')

//IndicateurCarteSanitaires
const IndicateurCarteSanitaires = () =>
    import ('@/views/indicateur_carte_sanitaires/IndicateurCarteSanitaires')
const IndicateurCarteSanitaire = () =>
    import ('@/views/indicateur_carte_sanitaires/IndicateurCarteSanitaire')
const EditIndicateurCarteSanitaire = () =>
    import ('@/views/indicateur_carte_sanitaires/EditIndicateurCarteSanitaire')
const CreateIndicateurCarteSanitaire = () =>
    import ('@/views/indicateur_carte_sanitaires/CreateIndicateurCarteSanitaire')

//PreScolaires
const PreScolaires = () =>
    import ('@/views/pre_scolaires/PreScolaires')
const PreScolaire = () =>
    import ('@/views/pre_scolaires/PreScolaire')
const EditPreScolaire = () =>
    import ('@/views/pre_scolaires/EditPreScolaire')
const CreatePreScolaire = () =>
    import ('@/views/pre_scolaires/CreatePreScolaire')

//Primaires
const Primaires = () =>
    import ('@/views/primaires/Primaires')
const Primaire = () =>
    import ('@/views/primaires/Primaire')
const EditPrimaire = () =>
    import ('@/views/primaires/EditPrimaire')
const CreatePrimaire = () =>
    import ('@/views/primaires/CreatePrimaire')

//PostPrimaires
const PostPrimaires = () =>
    import ('@/views/post_primaires/PostPrimaires')
const PostPrimaire = () =>
    import ('@/views/post_primaires/PostPrimaire')
const EditPostPrimaire = () =>
    import ('@/views/post_primaires/EditPostPrimaire')
const CreatePostPrimaire = () =>
    import ('@/views/post_primaires/CreatePostPrimaire')

//OldIndicateurs
const OldIndicateurs = () =>
    import ('@/views/indicateurs-old/Indicateurs')
const OldIndicateur = () =>
    import ('@/views/indicateurs-old/Indicateur')
const OldEditIndicateur = () =>
    import ('@/views/indicateurs-old/EditIndicateur')
const OldCreateIndicateur = () =>
    import ('@/views/indicateurs-old/CreateIndicateur')
    // Fichier village
const FichierVillages = () =>
    import ('@/views/indicateurs-old/FichierVillages')
    // Fichier village
const MultiSelect = () =>
    import ('@/views/indicateurs-old/MultiSelect')




//Groupes
const Groupes = () =>
    import ('@/views/groupes/Groupes')
const Groupe = () =>
    import ('@/views/groupes/Groupe')
const EditGroupe = () =>
    import ('@/views/groupes/EditGroupe')
const CreateGroupe = () =>
    import ('@/views/groupes/CreateGroupe')


//Dashboards
const Dashboards = () =>
    import ('@/views/dashboards/Dashboards')
const Dashboard2 = () =>
    import ('@/views/dashboards/Dashboard')
const EditDashboard = () =>
    import ('@/views/dashboards/EditDashboard')
const CreateDashboard = () =>
    import ('@/views/dashboards/CreateDashboard')


//Dashboards
const DashboardItems = () =>
    import ('@/views/dashboard_items/DashboardItems')
const DashboardItem = () =>
    import ('@/views/dashboard_items/DashboardItem')
const EditDashboardItem = () =>
    import ('@/views/dashboard_items/EditDashboardItem')
const CreateDashboardItem = () =>
    import ('@/views/dashboard_items/CreateDashboardItem')

//Dashboards_vue
const Dashboards_vue = () =>
    import ('@/views/dashboards_vues/Dashboards_vue')

//SousGroupes
const SousGroupes = () =>
    import ('@/views/sous_groupes/SousGroupes')
const SousGroupe = () =>
    import ('@/views/sous_groupes/SousGroupe')
const EditSousGroupe = () =>
    import ('@/views/sous_groupes/EditSousGroupe')
const CreateSousGroupe = () =>
    import ('@/views/sous_groupes/CreateSousGroupe')

//Desagregations
const Desagregations = () =>
    import ('@/views/desagregations/Desagregations')
const Desagregation = () =>
    import ('@/views/desagregations/Desagregation')
const EditDesagregation = () =>
    import ('@/views/desagregations/EditDesagregation')
const CreateDesagregation = () =>
    import ('@/views/desagregations/CreateDesagregation')

//Sous Indicateur
const SousIndicateurs = () =>
    import ('@/views/sous_indicateurs/SousIndicateurs')
const SousIndicateur = () =>
    import ('@/views/sous_indicateurs/SousIndicateur')
const EditSousIndicateur = () =>
    import ('@/views/sous_indicateurs/EditSousIndicateur')
const CreateSousIndicateur = () =>
    import ('@/views/sous_indicateurs/CreateSousIndicateur')

//Indicateurs
const Indicateurs = () =>
    import ('@/views/indicateurs/Indicateurs')
const Indicateur = () =>
    import ('@/views/indicateurs/Indicateur')
const EditIndicateur = () =>
    import ('@/views/indicateurs/EditIndicateur')
const CreateIndicateur = () =>
    import ('@/views/indicateurs/CreateIndicateur')


//Donnees
const Donnees = () =>
    import ('@/views/donnees/Donnees')
const Donnee = () =>
    import ('@/views/donnees/Donnee')
const EditDonnee = () =>
    import ('@/views/donnees/EditDonnee')
const CreateDonnee = () =>
    import ('@/views/donnees/CreateDonnee')

//Ecoles
const Ecoles = () =>
    import ('@/views/ecoles/Ecoles')
const Ecole = () =>
    import ('@/views/ecoles/Ecole')
const EditEcole = () =>
    import ('@/views/ecoles/EditEcole')
const CreateEcole = () =>
    import ('@/views/ecoles/CreateEcole')

//Roles
const Roles = () =>
    import ('@/views/roles/Roles')
const Role = () =>
    import ('@/views/roles/Role')
const EditRole = () =>
    import ('@/views/roles/EditRole')
const CreateRole = () =>
    import ('@/views/roles/CreateRole')

//Bread
const Breads = () =>
    import ('@/views/bread/Breads')
const Bread = () =>
    import ('@/views/bread/Bread')
const EditBread = () =>
    import ('@/views/bread/EditBread')
const CreateBread = () =>
    import ('@/views/bread/CreateBread')
const DeleteBread = () =>
    import ('@/views/bread/DeleteBread')

//Resources
const Resources = () =>
    import ('@/views/resources/Resources')
const CreateResource = () =>
    import ('@/views/resources/CreateResources')
const Resource = () =>
    import ('@/views/resources/Resource')
const EditResource = () =>
    import ('@/views/resources/EditResource')
const DeleteResource = () =>
    import ('@/views/resources/DeleteResource')

//Email
const Emails = () =>
    import ('@/views/email/Emails')
const CreateEmail = () =>
    import ('@/views/email/CreateEmail')
const EditEmail = () =>
    import ('@/views/email/EditEmail')
const ShowEmail = () =>
    import ('@/views/email/ShowEmail')
const SendEmail = () =>
    import ('@/views/email/SendEmail')

const Menus = () =>
    import ('@/views/menu/MenuIndex')
const CreateMenu = () =>
    import ('@/views/menu/CreateMenu')
const EditMenu = () =>
    import ('@/views/menu/EditMenu')
const DeleteMenu = () =>
    import ('@/views/menu/DeleteMenu')

const MenuElements = () =>
    import ('@/views/menuElements/ElementsIndex')
const CreateMenuElement = () =>
    import ('@/views/menuElements/CreateMenuElement')
const EditMenuElement = () =>
    import ('@/views/menuElements/EditMenuElement')
const ShowMenuElement = () =>
    import ('@/views/menuElements/ShowMenuElement')
const DeleteMenuElement = () =>
    import ('@/views/menuElements/DeleteMenuElement')

const Media = () =>
    import ('@/views/media/Media')


Vue.use(Router)

let router = new Router({
    mode: 'hash', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'active',
    scrollBehavior: () => ({ y: 0 }),
    routes: configRoutes()
})


router.beforeEach((to, from, next) => {
    let roles = localStorage.getItem("roles");
    if (roles != null) {
        roles = roles.split(',')
    }
    if (to.matched.some(record => record.meta.requiresAdmin)) {
        if (roles != null && roles.indexOf('admin') >= 0) {
            next()
        } else {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        }
    } else if (to.matched.some(record => record.meta.requiresUser)) {
        if (roles != null && (roles.indexOf('user') >= 0 || roles.indexOf('default') >= 0)) {
            next()
        } else {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        }
    } else {
        next()
    }
})

export default router

function configRoutes() {
    return [{
            path: '/',
            redirect: '/dashboard',
            name: 'Accueil',
            component: TheContainer,
            children: [{
                    path: 'media',
                    name: 'Media',
                    component: Media,
                    meta: {
                        requiresAdmin: true
                    }
                },
                {
                    path: 'dashboard',
                    name: 'Tableau de bord',
                    component: Dashboard
                },
                {
                    path: 'colors',
                    name: 'Colors',
                    component: Colors,
                    meta: {
                        requiresUser: true
                    }
                },
                {
                    path: 'typography',
                    name: 'Typography',
                    component: Typography,
                    meta: {
                        requiresUser: true
                    }
                },
                {
                    path: 'charts',
                    name: 'Charts',
                    component: Charts,
                    meta: {
                        requiresUser: true
                    }
                },
                {
                    path: 'widgets',
                    name: 'Widgets',
                    component: Widgets,
                    meta: {
                        requiresUser: true
                    }
                },
                {
                    path: 'menu',
                    meta: { label: 'Menu' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: Menus,
                            meta: {
                                requiresAdmin: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create Menu' },
                            name: 'CreateMenu',
                            component: CreateMenu,
                            meta: {
                                requiresAdmin: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit Menu' },
                            name: 'EditMenu',
                            component: EditMenu,
                            meta: {
                                requiresAdmin: true
                            }
                        },
                        {
                            path: ':id/delete',
                            meta: { label: 'Delete Menu' },
                            name: 'DeleteMenu',
                            component: DeleteMenu,
                            meta: {
                                requiresAdmin: true
                            }
                        },
                    ]
                },
                {
                    path: 'menuelement',
                    meta: { label: 'MenuElement' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: ':menu/menuelement',
                            component: MenuElements,
                            meta: {
                                requiresAdmin: true
                            }
                        },
                        {
                            path: ':menu/menuelement/create',
                            meta: { label: 'Create Menu Element' },
                            name: 'Ajouter un element du menu',
                            component: CreateMenuElement,
                            meta: {
                                requiresAdmin: true
                            }
                        },
                        {
                            path: ':menu/menuelement/:id',
                            meta: { label: 'Menu Element Details' },
                            name: 'Menu Element',
                            component: ShowMenuElement,
                            meta: {
                                requiresAdmin: true
                            }
                        },
                        {
                            path: ':menu/menuelement/:id/edit',
                            meta: { label: 'Edit Menu Element' },
                            name: 'Modifier Menu Element',
                            component: EditMenuElement,
                            meta: {
                                requiresAdmin: true
                            }
                        },
                        {
                            path: ':menu/menuelement/:id/delete',
                            meta: { label: 'Delete Menu Element' },
                            name: 'Supprimer Menu Element',
                            component: DeleteMenuElement,
                            meta: {
                                requiresAdmin: true
                            }
                        },
                    ]
                },
                {
                    path: 'users',
                    meta: { label: 'Utilisateurs' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: Users,
                            meta: {
                                requiresAdmin: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create User' },
                            name: 'Ajouter un utilisateur',
                            component: CreateUser,
                            meta: {
                                requiresAdmin: true
                            }
                        },
                        {
                            path: 'profil',
                            meta: { label: 'Profil User' },
                            name: 'Profil utilisateur',
                            component: ProfilUser,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'User Details' },
                            name: 'Utilisateur',
                            component: User,
                            meta: {
                                requiresAdmin: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit User' },
                            name: 'Modifier utilisateur',
                            component: EditUser,
                            meta: {
                                requiresAdmin: true
                            }
                        },
                    ]
                },
                {
                    path: 'notes',
                    meta: { label: 'Notes' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: Notes,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create Note' },
                            name: 'Create Note',
                            component: CreateNote,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'Note Details' },
                            name: 'Note',
                            component: Note,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit Note' },
                            name: 'Edit Note',
                            component: EditNote,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },
                {
                    path: 'regions',
                    meta: { label: 'Regions' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: Regions,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create Region' },
                            name: 'Ajouter region',
                            component: CreateRegion,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'Region Details' },
                            name: 'Regions',
                            component: Region,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit Region' },
                            name: 'modifier Region',
                            component: EditRegion,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },
                {
                    path: 'foire-questions',
                    meta: { label: 'FoireQuestions' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: FoireQuestions
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create FoireQuestion' },
                            name: 'Ajouter foire-question',
                            component: CreateFoireQuestion,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'FoireQuestion Details' },
                            name: 'FoireQuestions',
                            component: FoireQuestion,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit FoireQuestion' },
                            name: 'modifier FoireQuestion',
                            component: EditFoireQuestion,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },

                {
                    path: 'provinces',
                    meta: { label: 'Provinces' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: Provinces,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create Province' },
                            name: 'Create Province',
                            component: CreateProvince,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'Province Details' },
                            name: 'Province',
                            component: Province,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit Province' },
                            name: 'Edit Province',
                            component: EditProvince,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },

                {
                    path: 'communes',
                    meta: { label: 'Communes' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: Communes,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create Commune' },
                            name: 'Create Commune',
                            component: CreateCommune,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'Commune Details' },
                            name: 'Commune',
                            component: Commune,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit Commune' },
                            name: 'Edit Commune',
                            component: EditCommune,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },


                {
                    path: 'professions',
                    meta: { label: 'Professions' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: Professions,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create Profession' },
                            name: 'Create Profession',
                            component: CreateProfession,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'Profession Details' },
                            name: 'Profession',
                            component: Profession,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit Profession' },
                            name: 'Edit Profession',
                            component: EditProfession,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },


                {
                    path: 'districts',
                    meta: { label: 'Districts' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: Districts,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create District' },
                            name: 'Create District',
                            component: CreateDistrict,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'District Details' },
                            name: 'District',
                            component: District,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit District' },
                            name: 'Edit District',
                            component: EditDistrict,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },

                {
                    path: 'formation_sanitaires',
                    meta: { label: 'FormationSanitaires' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: FormationSanitaires,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create FormationSanitaire' },
                            name: 'Create FormationSanitaire',
                            component: CreateFormationSanitaire,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'FormationSanitaire Details' },
                            name: 'FormationSanitaire',
                            component: FormationSanitaire,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit FormationSanitaire' },
                            name: 'Edit FormationSanitaire',
                            component: EditFormationSanitaire,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },

                {
                    path: 'acte_naissances',
                    meta: { label: 'ActeNaissances' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: ActeNaissances,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create ActeNaissance' },
                            name: 'Create ActeNaissance',
                            component: CreateActeNaissance,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'ActeNaissance Details' },
                            name: 'ActeNaissance',
                            component: ActeNaissance,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit ActeNaissance' },
                            name: 'Edit ActeNaissance',
                            component: EditActeNaissance,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },
                {
                    path: 'acte_deces',
                    meta: { label: 'Acte de décès' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: ActeDecess,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Ajout d\'un acte de décès' },
                            name: 'Ajout d\'un acte de décès',
                            component: CreateActeDeces,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'Details Acte décès' },
                            name: 'Acte décès',
                            component: ActeDeces,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Modification Acte décès' },
                            name: 'Modification Acte décès',
                            component: EditActeDeces,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },

                {
                    path: 'acte_mariages',
                    meta: { label: 'ActeMariages' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: ActeMariages,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Ajout d\'un acte de mariage' },
                            name: 'Ajout d\'un acte de mariage',
                            component: CreateActeMariage,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'Détail de l\'acte de mariage' },
                            name: 'Acte de Mariage',
                            component: ActeMariage,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Modification de l\'acte de mariage' },
                            name: 'Modification de l\'acte de mariage',
                            component: EditActeMariage,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },

                {
                    path: 'consultation_prenatales',
                    meta: { label: 'Consultation Prenatales' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: ConsultationPrenatales,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create Consultation Prenatale' },
                            name: 'Create ConsultationPrenatale',
                            component: CreateConsultationPrenatale,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'Consultation Prenatale Details' },
                            name: 'ConsultationPrenatale',
                            component: ConsultationPrenatale,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit Consultation Prenatale' },
                            name: 'Edit ConsultationPrenatale',
                            component: EditConsultationPrenatale,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },
                {
                    path: 'ptmes',
                    meta: { label: 'Prévention de la transmission mere enfants' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: Ptmes,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create Prévention de la transmission mere enfant' },
                            name: 'Create Ptme',
                            component: CreatePtme,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'Prévention de la transmission mere enfant Details' },
                            name: 'Ptme',
                            component: Ptme,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit Prévention de la transmission mere enfant' },
                            name: 'Edit Ptme',
                            component: EditPtme,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },

                {
                    path: 'accouchements',
                    meta: { label: 'Accouchements' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: Accouchements,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create Accouchement' },
                            name: 'Create Accouchement',
                            component: CreateAccouchement,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'Accouchement Details' },
                            name: 'Accouchement',
                            component: Accouchement,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit Accouchement' },
                            name: 'Edit Accouchement',
                            component: EditAccouchement,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },

                {
                    path: 'consultation_postnatales',
                    meta: { label: 'ConsultationPostnatales' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: ConsultationPostnatales,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create ConsultationPostnatale' },
                            name: 'Create ConsultationPostnatale',
                            component: CreateConsultationPostnatale,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'ConsultationPostnatale Details' },
                            name: 'ConsultationPostnatale',
                            component: ConsultationPostnatale,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit ConsultationPostnatale' },
                            name: 'Edit ConsultationPostnatale',
                            component: EditConsultationPostnatale,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },

                {
                    path: 'vaccination_enfants',
                    meta: { label: 'VaccinationEnfants' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: VaccinationEnfants,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create VaccinationEnfant' },
                            name: 'Create VaccinationEnfant',
                            component: CreateVaccinationEnfant,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'VaccinationEnfant Details' },
                            name: 'VaccinationEnfant',
                            component: VaccinationEnfant,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit VaccinationEnfant' },
                            name: 'Edit VaccinationEnfant',
                            component: EditVaccinationEnfant,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },

                {
                    path: 'planification_familiales',
                    meta: { label: 'PlanificationFamiliales' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: PlanificationFamiliales,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create PlanificationFamiliale' },
                            name: 'Create PlanificationFamiliale',
                            component: CreatePlanificationFamiliale,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'PlanificationFamiliale Details' },
                            name: 'PlanificationFamiliale',
                            component: PlanificationFamiliale,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit PlanificationFamiliale' },
                            name: 'Edit PlanificationFamiliale',
                            component: EditPlanificationFamiliale,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },

                {
                    path: 'morbilite_paludismes',
                    meta: { label: 'MorbilitePaludismes' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: MorbilitePaludismes,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create MorbilitePaludisme' },
                            name: 'Create MorbilitePaludisme',
                            component: CreateMorbilitePaludisme,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'MorbilitePaludisme Details' },
                            name: 'MorbilitePaludisme',
                            component: MorbilitePaludisme,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit MorbilitePaludisme' },
                            name: 'Edit MorbilitePaludisme',
                            component: EditMorbilitePaludisme,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },

                {
                    path: 'service_curatifs',
                    meta: { label: 'ServiceCuratifs' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: ServiceCuratifs,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create ServiceCuratif' },
                            name: 'Create ServiceCuratif',
                            component: CreateServiceCuratif,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'ServiceCuratif Details' },
                            name: 'ServiceCuratif',
                            component: ServiceCuratif,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit ServiceCuratif' },
                            name: 'Edit ServiceCuratif',
                            component: EditServiceCuratif,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },

                {
                    path: 'systeme_information_sanitaires',
                    meta: { label: 'SystemeInformationSanitaires' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: SystemeInformationSanitaires,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create SystemeInformationSanitaire' },
                            name: 'Create SystemeInformationSanitaire',
                            component: CreateSystemeInformationSanitaire,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'SystemeInformationSanitaire Details' },
                            name: 'SystemeInformationSanitaire',
                            component: SystemeInformationSanitaire,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit SystemeInformationSanitaire' },
                            name: 'Edit SystemeInformationSanitaire',
                            component: EditSystemeInformationSanitaire,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },

                {
                    path: 'indicateur_carte_sanitaires',
                    meta: { label: 'IndicateurCarteSanitaires' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: IndicateurCarteSanitaires,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create IndicateurCarteSanitaire' },
                            name: 'Create IndicateurCarteSanitaire',
                            component: CreateIndicateurCarteSanitaire,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'IndicateurCarteSanitaire Details' },
                            name: 'IndicateurCarteSanitaire',
                            component: IndicateurCarteSanitaire,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit IndicateurCarteSanitaire' },
                            name: 'Edit IndicateurCarteSanitaire',
                            component: EditIndicateurCarteSanitaire,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },

                {
                    path: 'pre_scolaires',
                    meta: { label: 'PreScolaires' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: PreScolaires,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create PreScolaire' },
                            name: 'Create PreScolaire',
                            component: CreatePreScolaire,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'PreScolaire Details' },
                            name: 'PreScolaire',
                            component: PreScolaire,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit PreScolaire' },
                            name: 'Edit PreScolaire',
                            component: EditPreScolaire,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },

                {
                    path: 'primaires',
                    meta: { label: 'Primaires' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: Primaires,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create Primaire' },
                            name: 'Create Primaire',
                            component: CreatePrimaire,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'Primaire Details' },
                            name: 'Primaire',
                            component: Primaire,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit Primaire' },
                            name: 'Edit Primaire',
                            component: EditPrimaire,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },

                {
                    path: 'post_primaires',
                    meta: { label: 'PostPrimaires' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: PostPrimaires,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create PostPrimaire' },
                            name: 'Create PostPrimaire',
                            component: CreatePostPrimaire,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'PostPrimaire Details' },
                            name: 'PostPrimaire',
                            component: PostPrimaire,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit PostPrimaire' },
                            name: 'Edit PostPrimaire',
                            component: EditPostPrimaire,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },

                {
                    path: 'indicateurs-old',
                    meta: { label: 'Indicateurs' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: OldIndicateurs,
                            meta: {
                                requiresUser: false
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create Indicateur' },
                            name: 'Create Indicateur',
                            component: OldCreateIndicateur,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'fichier-villages',
                            meta: { label: 'Fichier Villages' },
                            name: 'Fichier Villages',
                            component: FichierVillages,
                            meta: {
                                requiresUser: false
                            }
                        },
                        {
                            path: 'multi-select',
                            meta: { label: 'MultiSelect' },
                            name: 'MultiSelect',
                            component: MultiSelect,
                            meta: {
                                requiresUser: false
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'Indicateur Details' },
                            name: 'Indicateur',
                            component: OldIndicateur,
                            meta: {
                                requiresUser: false
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit Indicateur' },
                            name: 'Edit Indicateur',
                            component: OldEditIndicateur,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },

                {
                    path: 'groupes',
                    meta: { label: 'Groupes' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: Groupes,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create Groupe' },
                            name: 'Ajouter groupe',
                            component: CreateGroupe,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'Groupe Details' },
                            name: 'Groupes',
                            component: Groupe,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit Groupe' },
                            name: 'modifier Groupe',
                            component: EditGroupe,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },

                {
                    path: 'sous_groupes',
                    meta: { label: 'Sous Groupes' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: SousGroupes,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create Sous Groupe' },
                            name: 'Ajouter sous groupe',
                            component: CreateSousGroupe,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'Sous Groupe Details' },
                            name: 'SousGroupes',
                            component: SousGroupe,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit Groupe' },
                            name: 'modifier SOusGroupe',
                            component: EditSousGroupe,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },

                {
                    path: 'desagregations',
                    meta: { label: 'Desagregations' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: Desagregations,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create Desagregation' },
                            name: 'Ajouter desagregation',
                            component: CreateDesagregation,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'Desagregation Details' },
                            name: 'Desagregations',
                            component: Desagregation,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit Desagregation' },
                            name: 'modifier Desagregation',
                            component: EditDesagregation,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },

                {
                    path: 'sous_indicateurs',
                    meta: { label: 'SousIndicateurs' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: SousIndicateurs,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create SousIndicateur' },
                            name: 'Ajouter sous_indicateurs',
                            component: CreateSousIndicateur,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'SousIndicateur Details' },
                            name: 'SousIndicateurs',
                            component: SousIndicateur,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit SousIndicateur' },
                            name: 'modifier sous indicateur',
                            component: EditSousIndicateur,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },

                {
                    path: 'indicateurs',
                    meta: { label: 'Indicateurs' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: Indicateurs,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create Indicateur' },
                            name: 'Ajouter indicateurs',
                            component: CreateIndicateur,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'Indicateur Details' },
                            name: 'Indicateurs',
                            component: Indicateur,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit Indicateur' },
                            name: 'modifier indicateur',
                            component: EditIndicateur,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },

                {
                    path: 'donnees',
                    meta: { label: 'Donnees' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: Donnees,
                            meta: {
                                requiresUser: false
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create Donnee' },
                            name: 'Ajouter donnees',
                            component: CreateDonnee,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'Donnee Details' },
                            name: 'Donnees',
                            component: Donnee,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit Donnee' },
                            name: 'modifier donnee',
                            component: EditDonnee,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },

                {
                    path: 'ecoles',
                    meta: { label: 'Ecoles' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: Ecoles,
                            meta: {
                                requiresUser: false
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create Ecole' },
                            name: 'Ajouter ecoles',
                            component: CreateEcole,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'Ecole Details' },
                            name: 'Ecoles',
                            component: Ecole,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit Ecole' },
                            name: 'modifier ecole',
                            component: EditEcole,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },

                {
                    path: 'dashboards',
                    meta: { label: 'Dashboards' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: Dashboards,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create Dashboard' },
                            name: 'Ajouter dashboard',
                            component: CreateDashboard,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'Dashboard Details' },
                            name: 'Dashboards',
                            component: Dashboard2,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit Dashboard' },
                            name: 'modifier Dashboard',
                            component: EditDashboard,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },
                {
                    path: ':dashboard/dashboard-items',
                    meta: { label: 'Les requêtes' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: DashboardItems,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Création de la requête' },
                            name: 'Ajouter DashboardItem',
                            component: CreateDashboardItem,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'Détail de la requête' },
                            name: 'Détail de la requête',
                            component: DashboardItem,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edition de la requête' },
                            name: 'Edition de la requête',
                            component: EditDashboardItem,
                            meta: {
                                requiresUser: true
                            }
                        },
                    ]
                },
                {
                    path: 'dashboard-personalise/:id',
                    meta: { label: 'Tableau de board personnalisé' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                        path: '',
                        component: Dashboards_vue,
                        meta: {
                            requiresUser: false
                        }
                    }]
                },

                {
                    path: 'roles',
                    meta: { label: 'Roles' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: Roles,
                            meta: {
                                requiresAdmin: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create Role' },
                            name: 'Create Role',
                            component: CreateRole,
                            meta: {
                                requiresAdmin: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'Role Details' },
                            name: 'Role',
                            component: Role,
                            meta: {
                                requiresAdmin: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit Role' },
                            name: 'Edit Role',
                            component: EditRole,
                            meta: {
                                requiresAdmin: true
                            }
                        },
                    ]
                },
                {
                    path: 'bread',
                    meta: { label: 'Bread' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: Breads,
                            meta: {
                                requiresAdmin: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create Bread' },
                            name: 'CreateBread',
                            component: CreateBread,
                            meta: {
                                requiresAdmin: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'Bread Details' },
                            name: 'Bread',
                            component: Bread,
                            meta: {
                                requiresAdmin: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit Bread' },
                            name: 'Edit Bread',
                            component: EditBread,
                            meta: {
                                requiresAdmin: true
                            }
                        },
                        {
                            path: ':id/delete',
                            meta: { label: 'Delete Bread' },
                            name: 'Delete Bread',
                            component: DeleteBread,
                            meta: {
                                requiresAdmin: true
                            }
                        },
                    ]
                },
                {
                    path: 'email',
                    meta: { label: 'Emails' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '',
                            component: Emails,
                            meta: {
                                requiresAdmin: true
                            }
                        },
                        {
                            path: 'create',
                            meta: { label: 'Create Email Template' },
                            name: 'Create Email Template',
                            component: CreateEmail,
                            meta: {
                                requiresAdmin: true
                            }
                        },
                        {
                            path: ':id',
                            meta: { label: 'Show Email Template' },
                            name: 'Show Email Tempalte',
                            component: ShowEmail,
                            meta: {
                                requiresAdmin: true
                            }
                        },
                        {
                            path: ':id/edit',
                            meta: { label: 'Edit Email Tempalate' },
                            name: 'Edit Email Template',
                            component: EditEmail,
                            meta: {
                                requiresAdmin: true
                            }
                        },
                        {
                            path: ':id/sendEmail',
                            meta: { label: 'Send Email' },
                            name: 'Send Email',
                            component: SendEmail,
                            meta: {
                                requiresAdmin: true
                            }
                        },
                    ]
                },
                {
                    path: 'resource',
                    meta: { label: 'Resources' },
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: ':bread/resource',
                            component: Resources,
                        },
                        {
                            path: ':bread/resource/create',
                            meta: { label: 'Create Resource' },
                            name: 'CreateResource',
                            component: CreateResource
                        },
                        {
                            path: ':bread/resource/:id',
                            meta: { label: 'Resource Details' },
                            name: 'Resource',
                            component: Resource,
                        },
                        {
                            path: ':bread/resource/:id/edit',
                            meta: { label: 'Edit Resource' },
                            name: 'Edit Resource',
                            component: EditResource
                        },
                        {
                            path: ':bread/resource/:id/delete',
                            meta: { label: 'Delete Resource' },
                            name: 'Delete Resource',
                            component: DeleteResource
                        },
                    ]
                },
                {
                    path: 'base',
                    redirect: '/base/cards',
                    name: 'Base',
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: 'cards',
                            name: 'Cards',
                            component: Cards,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'forms',
                            name: 'Forms',
                            component: Forms,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'switches',
                            name: 'Switches',
                            component: Switches,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'tables',
                            name: 'Tables',
                            component: Tables,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'tabs',
                            name: 'Tabs',
                            component: Tabs,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'breadcrumb',
                            name: 'Breadcrumb',
                            component: Breadcrumbs,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'carousel',
                            name: 'Carousel',
                            component: Carousels,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'collapse',
                            name: 'Collapse',
                            component: Collapses,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'jumbotron',
                            name: 'Jumbotron',
                            component: Jumbotrons,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'list-group',
                            name: 'List Group',
                            component: ListGroups,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'navs',
                            name: 'Navs',
                            component: Navs,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'navbars',
                            name: 'Navbars',
                            component: Navbars,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'pagination',
                            name: 'Pagination',
                            component: Paginations,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'popovers',
                            name: 'Popovers',
                            component: Popovers,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'progress',
                            name: 'Progress',
                            component: ProgressBars,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'tooltips',
                            name: 'Tooltips',
                            component: Tooltips,
                            meta: {
                                requiresUser: true
                            }
                        }
                    ]
                },
                {
                    path: 'buttons',
                    redirect: '/buttons/standard-buttons',
                    name: 'Buttons',
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: 'buttons',
                            name: 'Standard Buttons',
                            component: StandardButtons,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'button-group',
                            name: 'Button Group',
                            component: ButtonGroups,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'dropdowns',
                            name: 'Dropdowns',
                            component: Dropdowns,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'brand-buttons',
                            name: 'Brand Buttons',
                            component: BrandButtons,
                            meta: {
                                requiresUser: true
                            }
                        }
                    ]
                },
                {
                    path: 'icon',
                    redirect: '/icons/coreui-icons',
                    name: 'CoreUI Icons',
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: 'coreui-icons',
                            name: 'Icons library',
                            component: CoreUIIcons,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'brands',
                            name: 'Brands',
                            component: Brands,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'flags',
                            name: 'Flags',
                            component: Flags,
                            meta: {
                                requiresUser: true
                            }
                        }
                    ]
                },
                {
                    path: 'notifications',
                    redirect: '/notifications/alerts',
                    name: 'Notifications',
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: 'alerts',
                            name: 'Alerts',
                            component: Alerts,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'badge',
                            name: 'Badge',
                            component: Badges,
                            meta: {
                                requiresUser: true
                            }
                        },
                        {
                            path: 'modals',
                            name: 'Modals',
                            component: Modals,
                            meta: {
                                requiresUser: true
                            }
                        }
                    ]
                }
            ]
        },
        {
            path: '/pages',
            redirect: '/pages/404',
            name: 'Pages',
            component: {
                render(c) { return c('router-view') }
            },
            children: [{
                    path: '404',
                    name: 'Page404',
                    component: Page404
                },
                {
                    path: '500',
                    name: 'Page500',
                    component: Page500
                },
            ]
        },
        {
            path: '/',
            redirect: '/login',
            name: 'Auth',
            component: {
                render(c) { return c('router-view') }
            },
            children: [{
                    path: 'login',
                    name: 'Login',
                    component: Login
                },
                {
                    path: 'register',
                    name: 'Register',
                    component: Register
                },
                {
                    path: 'dashboard-p',
                    name: 'Tableau de bord',
                    component: Dashboard
                },
            ]
        },
        {
            path: '*',
            name: '404',
            component: Page404
        }
    ]
}