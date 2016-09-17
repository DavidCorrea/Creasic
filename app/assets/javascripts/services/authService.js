creasic.service('authService', ['$http', 'Auth', function($http, Auth) {

    this.crearUsuario = function(usuario) {
        return Auth.register(usuario, config);
    };

    this.iniciarSesion = function(usuario) {
        return Auth.login(usuario, config);
    };

    this.cerrarSesion = function() {
        return Auth.logout(config);
    };

    this.sesionActual = function() {
        return Auth.currentUser();
    };

    this.existeSesion = function() {
        return Auth.isAuthenticated();
    };

    var config = {
        headers: {
            'X-HTTP-Method-Override': 'POST'
        }
    };

}]);