creasic.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    var appParentState = {
        name: 'app',
        url: '/',
        templateUrl: 'views/app',
        controller: 'appCtrl'
    };

    var homeState = {
        parent: 'app',
        name: 'home',
        url: 'home',
        templateUrl: 'views/home'
    };

    var letrasState = {
        parent: 'app',
        name: 'letras',
        url: 'letras',
        templateUrl: 'views/letras'
    };

    var acordesState = {
        parent: 'app',
        name: 'acordes',
        url: 'acordes',
        templateUrl: 'views/acordes'
    };

    var cancionesState = {
        parent: 'app',
        name: 'canciones',
        url: 'canciones',
        templateUrl: 'views/canciones'
    };

    var registrarState = {
        parent: 'app',
        name: 'registrar',
        url: 'registrar',
        templateUrl: 'views/registrar',
        controller: 'registracionCtrl'
    };

    var ingresarState = {
        parent: 'app',
        name: 'ingresar',
        url: 'ingresar',
        templateUrl: 'views/ingresar',
        controller: 'ingresoCtrl'
    };

    var crearCancionState = {
        name: 'crearCancion',
        url: '/crearCancion',
        templateUrl: 'views/crear_cancion',
        controller: 'crearCancionCtrl'

    };

    var perfilState = {
        parent: 'app',
        name: 'perfil',
        url: 'perfil',
        templateUrl: 'views/perfil'
    };

    var cerrarSesionState = {
        parent: 'app',
        name: 'cerrarSesion'
    };


    $stateProvider.state(appParentState);
    $stateProvider.state(homeState);
    $stateProvider.state(letrasState);
    $stateProvider.state(acordesState);
    $stateProvider.state(cancionesState);
    $stateProvider.state(ingresarState);
    $stateProvider.state(registrarState);
    $stateProvider.state(crearCancionState);
    $stateProvider.state(perfilState);
    $stateProvider.state(cerrarSesionState);
});
