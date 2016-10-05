creasic.service('authService', ['$http', '$rootScope', 'lock', 'authManager', function($http, $rootScope, lock, authManager) {

    this.iniciarSesion = function() {
        lock.show();
    };

    this.cerrarSesion = function() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('usuario');
        authManager.unauthenticate();
    };

    this.haySesion = function() {
        return $rootScope.isAuthenticated;
    };

    this.sesionActual = function() {
        return localStorage.getItem('usuario');
    };

    this.guardarInformacionDeSesion = function() {
        lock.on('authenticated', function(authResult) {
            localStorage.setItem('id_token', authResult.idToken);
            authManager.authenticate();

            lock.getProfile(authResult.idToken, function(error, response) {
                localStorage.setItem('usuario', Usuario.llenarDesde(response));
                $rootScope.$broadcast('sesionIniciada');
                $http.post('/usuarios/crear', {id_externo: response.user_id});
            });
        });
    };

}]);