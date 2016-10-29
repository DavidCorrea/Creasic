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

    var verLetraState = {
        name: 'letras.ver',
        url: '/{id}',
        templateUrl: 'views/ver_letra',
        controller: 'verLetraCtrl',
        resolve: {
            letra: function($stateParams, letrasService) {
                return letrasService.obtenerLetra($stateParams.id).then(function(response) {
                    return Letra.llenarDesde(response.data);
                });
            }
        }
    };

    var secuenciasDeAcordesState = {
        parent: 'app',
        abstract: true,
        name: 'secuenciasDeAcordes',
        url: 'secuenciasDeAcordes',
        template: '<ui-view/>'
    };

    var todasLasSecuenciasDeAcordesState = {
        name: 'secuenciasDeAcordes.todas',
        url: '',
        templateUrl: 'views/secuencias_de_acordes',
        controller: 'secuenciasDeAcordesCtrl',
        resolve: {
            secuenciasDeAcordes: function(secuenciasDeAcordesService) {
                return secuenciasDeAcordesService.todas().then(function(response) {
                    return response.data.map(function(secuenciaDeAcordes) {
                       return SecuenciaDeAcordes.llenarDesde(secuenciaDeAcordes);
                    });
                });
            }
        }
    };

    var crearSecuenciaDeAcordesState = {
        name: 'secuenciasDeAcordes.crear',
        url: '/crear',
        templateUrl: 'views/crear_secuencia_de_acordes',
        controller: 'crearSecuenciaDeAcordesCtrl',
        resolve: {
            notas: function(notasService) {
                return notasService.todasLasNotas().then(function(response) {
                    return response;
                });
            }
        }
    };

    var verSecuenciaDeAcordesState = {
        name: 'secuenciasDeAcordes.ver',
        url: '/{id}',
        templateUrl: 'views/ver_secuencia_de_acordes',
        controller: 'verSecuenciaDeAcordesCtrl',
        resolve: {
            secuenciaDeAcordes: function($stateParams, secuenciasDeAcordesService) {
                return secuenciasDeAcordesService.ver($stateParams.id).then(function(response) {
                    return SecuenciaDeAcordes.llenarDesde(response.data);
                });
            },
            notas: function(notasService) {
                return notasService.todasLasNotas().then(function(response) {
                    return response;
                });
            }
        }
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
    $stateProvider.state(crearLetraState);
    $stateProvider.state(secuenciasDeAcordesState);
    $stateProvider.state(todasLasSecuenciasDeAcordesState);
    $stateProvider.state(crearSecuenciaDeAcordesState);
    $stateProvider.state(verSecuenciaDeAcordesState);
    $stateProvider.state(todasLasletrasState);
    $stateProvider.state(verLetraState);
    $stateProvider.state(cancionesState);
    $stateProvider.state(ingresarState);
    $stateProvider.state(registrarState);
    $stateProvider.state(perfilState);
    $stateProvider.state(cerrarSesionState);
});