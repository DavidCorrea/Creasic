creasic.service('usuariosService', ['$http', 'bienvenidaService', function($http, bienvenidaService) {

    var self = this;

    this.crearUsuario = function(usuario) {
        return $http.post('usuarios/crear', usuarioParaBackend(usuario));
    };

    this.editarUsuario = function(usuario) {
        return $http.post('usuarios/editar/' + usuario.id, usuarioParaBackend(usuario));
    };

    this.todos = function() {
        return $http.get('usuarios/todos');
    };

    this.obtenerUsuario = function(idUsuario) {
        return $http.get('usuarios/ver/' + idUsuario).then(function(response) {
            return response.data;
        });
    };

    this.nombreEstaDisponible = function(posibleNombreDeUsuario) {
        return $http.get('usuarios/nombre_esta_disponible/' + posibleNombreDeUsuario);
    };

    this.loguearUsuario = function(informacionUsuario, callback) {
        var usuarioALoguear = Usuario.llenarDesde(informacionUsuario);

        this.existeUsuario(usuarioALoguear).then(function(existeUsuario) {
            existeUsuario ? callback(usuarioALoguear) : self.registrarUsuario(usuarioALoguear, callback)
        });
    };

    this.existeUsuario = function(usuario) {
        return $http.get('usuarios/existe/' + usuario.id).then(function(response) {
            return response.data
        });
    };

    this.registrarUsuario = function(usuario, callback) {
        bienvenidaService.mostrarEleccionDeNombre(function (nombreDeUsuario) {
            usuario.nombre = nombreDeUsuario;
            self.crearUsuario(usuario);
            callback(usuario);
        });
    };

    function usuarioParaBackend(usuario) {
        usuario.id_externo = usuario.id;
        return usuario;
    }

}]);