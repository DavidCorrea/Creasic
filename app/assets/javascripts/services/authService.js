creasic.service('authService', ['$http', '$rootScope', 'lock', 'authManager', function($http, $rootScope, lock, authManager) {

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
            return Usuario.llenarDesde(JSON.parse(localStorage.getItem('usuario')));
        }
    };

    this.guardarInformacionDeSesion = function() {
        var self = this;

        lock.on('authenticated', function(authResult) {
            localStorage.setItem('id_token', authResult.idToken);
            authManager.authenticate();

            lock.getProfile(authResult.idToken, function(error, response) {
                localStorage.setItem('usuario', JSON.stringify(response));
                $http.post('/usuarios/crear', {id_externo: response.user_id, email: response.email});
                self.actualizarSesion();
            });
        });
    };

    this.actualizarSesion = function() {
        $rootScope.usuario = this.sesionActual();
        $rootScope.haySesion = this.haySesion();
    };

}]);