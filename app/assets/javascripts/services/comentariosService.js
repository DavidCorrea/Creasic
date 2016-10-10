creasic.service('comentariosService', ['$http', function($http) {

    this.crearComentario = function(comentario) {
        return $http.post('comentarios/crear', comentario);
    };

    this.obtenerTodosLosComentarios = function(letra_id){
        return $http.get('comentarios/todos/' + letra_id);
    };

}]);