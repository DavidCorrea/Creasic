creasic.service('authService', ['$http', '$rootScope', 'lock', 'authManager', 'usuariosService', 'navegacionService',
    function($http, $rootScope, lock, authManager, usuariosService, navegacionService) {

    this.iniciarSesion = function() {
        lock.show();
    };

    this.cerrarSesion = function() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('usuario');
        $rootScope.haySesion = this.haySesion();
        $rootScope.usuario = null;
        authManager.unauthenticate();
    };

    this.haySesion = function() {
        return localStorage.getItem('usuario') !== null;
    };

    this.sesionActual = function() {
        if(this.haySesion()) {
            var usuarioStorage = JSON.parse(localStorage.getItem('usuario'));
            return Usuario.llenarDesde(usuarioStorage);
        }
    };

    this.actualizarSesion = function() {
        $rootScope.usuario = this.sesionActual();
        $rootScope.haySesion = this.haySesion();
    };

    this.guardarInformacionDeSesion = function() {
        var self = this;

        lock.on('authenticated', function(authResult) {
            localStorage.setItem('id_token', authResult.idToken);
            authManager.authenticate();

            lock.getProfile(authResult.idToken, function(error, informacionUsuario) {
                usuariosService.loguearUsuario(informacionUsuario, function(usuario) {
                    localStorage.setItem('usuario', JSON.stringify(usuario));
                    self.actualizarSesion();
                    navegacionService.llevarAHome();
                });
            });
        });
    };

}]);