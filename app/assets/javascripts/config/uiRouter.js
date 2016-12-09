creasic.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

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
        templateUrl: 'views/perfil',
        controller: 'perfilCtrl',
        resolve: {
            usuarioActual: function($rootScope, usuariosService) {
                return usuariosService.obtenerUsuario($rootScope.usuario.id).then(function(usuario) {
                    return Usuario.llenarDesde(usuario);
                });
            }
        }
    };

    var usuariosState = {
        parent: 'app',
        abstract: true,
        name: 'usuarios',
        url: 'usuarios',
        template: '<ui-view/>'
    };

    var todosLosUsuariosState = {
        name: 'usuarios.todos',
        url: '',
        templateUrl: 'views/usuarios',
        controller: 'usuariosCtrl'
    };

    var verUsuarioState = {
        name: 'usuarios.ver',
        url: '/{nombre}',
        templateUrl: 'views/usuario',
        controller: 'usuarioCtrl',
        params: {
            id: '',
            nombre: ''
        },
        resolve: {
            usuario: function($stateParams, usuariosService) {
                return usuariosService.obtenerUsuario($stateParams.id).then(function(usuario) {
                   return Usuario.llenarDesde(usuario);
                });
            }
        }
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
            modoEdicion: function() {
                return true;
            }
        }
    };

    var cancionesState = {
        parent: 'app',
        name: 'canciones',
        url: 'canciones',
        templateUrl: 'views/canciones'
    };

    var cerrarSesionState = {
        parent: 'app',
        name: 'cerrarSesion'
    };

    $stateProvider.state(appParentState);
    $stateProvider.state(homeState);
    $stateProvider.state(perfilState);
    $stateProvider.state(usuariosState);
    $stateProvider.state(todosLosUsuariosState);
    $stateProvider.state(verUsuarioState);
    $stateProvider.state(letrasState);
    $stateProvider.state(crearLetraState);
    $stateProvider.state(secuenciasDeAcordesState);
    $stateProvider.state(todasLasSecuenciasDeAcordesState);
    $stateProvider.state(crearSecuenciaDeAcordesState);
    $stateProvider.state(verSecuenciaDeAcordesState);
    $stateProvider.state(todasLasletrasState);
    $stateProvider.state(verLetraState);
    $stateProvider.state(cancionesState);
    $stateProvider.state(cerrarSesionState);
});

creasic.run(function($rootScope, toastService) {
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
        // Aca podemos capturar errores que vengan del server. Habria que retirar la logica
        // que tenemos hoy en dia para mostrar. En vez de capturar cada error, mostrar nosotros los que vengan
        // cuando queremos o sino que se encargue esto.
        // event.preventDefault();
        // toastService.mostrarError('No pudimos encontrar lo que buscabas.');
    });
});