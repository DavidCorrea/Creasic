creasic.config(function($stateProvider) {
    var homeState = {
        name: 'home',
        url: '/home',
        templateUrl: 'views/home'
    };

    var letrasState = {
        name: 'letras',
        url: '/letras',
        templateUrl: 'views/letras'
    };

    var acordesState = {
        name: 'acordes',
        url: '/acordes',
        templateUrl: 'views/acordes'
    };

    var cancionesState = {
        name: 'canciones',
        url: '/canciones',
        templateUrl: 'views/canciones'
    };

    var registrarState = {
        name: 'registrar',
        url: '/registrar',
        templateUrl: 'views/registrar',
        controller: 'registracionCtrl'
    };

    var ingresarState = {
        name: 'ingresar',
        url: '/ingresar',
        templateUrl: 'views/ingresar'
    };

    var crearCancionState = {
        name: 'crearCancion',
        url: '/crearCancion',
        templateUrl: 'views/crear_cancion',
        controller: 'crearCancionCtrl'

    }

    $stateProvider.state(homeState);
    $stateProvider.state(letrasState);
    $stateProvider.state(acordesState);
    $stateProvider.state(cancionesState);
    $stateProvider.state(ingresarState);
    $stateProvider.state(registrarState);
    $stateProvider.state(crearCancionState);
});
