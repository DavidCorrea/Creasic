creasic.service('registracionService', ['$http', 'Auth', function($http, Auth) {

    this.registrarUsuario = function(usuario) {
        return Auth.register(usuario, config);
    };

    var config = {
        headers: {
            'X-HTTP-Method-Override': 'POST'
        }
    };

}]);