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

    var perfilState = {
        parent: 'app',
        name: 'perfil',
        url: 'perfil',
        templateUrl: 'views/perfil'
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
        controller: 'letrasCtrl',
        resolve: {
            letras: function(letrasService) {
                return letrasService.obtenerTodasLasLetras().then(function(response){
                    return response.data.map(function(letra) {
                        return Letra.llenarDesde(letra);
                    });
                });
            }
        }
    };

    var crearLetraState = {
        name: 'letras.crear',
        url: '/crear',
        templateUrl: 'views/letra',
        controller: 'letraCtrl',
        resolve: {
            letra: function($rootScope) {
                return new Letra($rootScope.usuario.id);
            },
            modoEdicion: function() {
                return false;
            }
        }
    };

    var verLetraState = {
        name: 'letras.ver',
        url: '/{id}',
        templateUrl: 'views/letra',
        controller: 'letraCtrl',
        resolve: {
            letra: function($stateParams, letrasService) {
                return letrasService.obtenerLetra($stateParams.id).then(function(response) {
                    return Letra.llenarDesde(response.data);
                });
            },
            modoEdicion: function() {
                return true;
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
        templateUrl: 'views/secuencia_de_acordes',
        controller: 'secuenciaDeAcordesCtrl',
        resolve: {
            secuenciaDeAcordes: function($rootScope) {
                return new SecuenciaDeAcordes($rootScope.usuario.id);
            },
            notas: function(notasService) {
                return notasService.todasLasNotas().then(function(response) {
                    return response;
                });
            },
            modoEdicion: function() {
                return false;
            }
        }
    };

    var verSecuenciaDeAcordesState = {
        name: 'secuenciasDeAcordes.ver',
        url: '/{id}',
        templateUrl: 'views/secuencia_de_acordes',
        controller: 'secuenciaDeAcordesCtrl',
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
            },
            modoEdicion: function() {
                return true;
            }
        }
    };

    var cancionesState = {
        parent: 'app',
        abstract: true,
        name: 'canciones',
        url: 'canciones',
        template: '<ui-view/>'
    };

    var todasLasCancionesState = {
        name: 'canciones.todas',
        url: '',
        templateUrl: 'views/canciones',
        controller: 'cancionesCtrl',
        resolve: {
            canciones: function(cancionesService) {
                return cancionesService.obtenerTodasLasCanciones().then(function(response){
                    return response.data.map(function(cancion) {
                        return Cancion.llenarDesde(cancion);
                    });
                });
            }
        }
    };
    var crearCancionState = {
        name: 'canciones.crear',
        url: '/crear',
        templateUrl: 'views/cancion',
        controller: 'cancionCtrl',
        resolve: {
            cancion: function($rootScope) {
                return new Cancion($rootScope.usuario.id);
            },
            modoEdicion: function() {
                return false;
            }
        }
    };

    var verCancionState = {
        name: 'canciones.ver',
        url: '/{id}',
        templateUrl: 'views/cancion',
        controller: 'cancionCtrl',
        resolve: {
            cancion: function($stateParams, cancionesService) {
                return cancionesService.obtenerCancion($stateParams.id).then(function(response) {
                    return Cancion.llenarDesde(response.data);
                });
            },
            modoEdicion: function() {
                return true;
            }
        }
    };


    var cerrarSesionState = {
        parent: 'app',
        name: 'cerrarSesion'
    };

    $stateProvider.state(appParentState);
    $stateProvider.state(homeState);
    $stateProvider.state(perfilState);
    $stateProvider.state(letrasState);
    $stateProvider.state(crearLetraState);
    $stateProvider.state(secuenciasDeAcordesState);
    $stateProvider.state(todasLasSecuenciasDeAcordesState);
    $stateProvider.state(crearSecuenciaDeAcordesState);
    $stateProvider.state(verSecuenciaDeAcordesState);
    $stateProvider.state(todasLasletrasState);
    $stateProvider.state(verLetraState);
    $stateProvider.state(cancionesState);
    $stateProvider.state(todasLasCancionesState);
    $stateProvider.state(crearCancionState);
    $stateProvider.state(verCancionState);
    $stateProvider.state(cerrarSesionState);
});