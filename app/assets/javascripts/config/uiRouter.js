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
        abstract: true,
        name: 'letras',
        url: 'letras',
        template: '<ui-view/>'
    };

    var todasLasletrasState = {
        name: 'letras.todas',
        url: '',
        templateUrl: 'views/letras',
        controller: 'letrasCtrl'
    };

    var crearLetraState = {
        name: 'letras.crear',
        url: '/crear',
        templateUrl: 'views/crear_letra',
        controller: 'crearLetraCtrl'
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
    $stateProvider.state(todasLasletrasState);
    $stateProvider.state(crearLetraState);
    $stateProvider.state(acordesState);
    $stateProvider.state(cancionesState);
    $stateProvider.state(ingresarState);
    $stateProvider.state(registrarState);
    $stateProvider.state(perfilState);
    $stateProvider.state(cerrarSesionState);
});