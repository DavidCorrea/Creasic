creasic.service('comentariosAnidadosService', ['$http', function($http) {

    this.crearComentarioAnidado = function(comentarioAnidado) {
        return $http.post('comentarios_anidados/crear', comentarioAnidado);
    };

    this.obtenerTodosLosComentariosAnidados = function(comentario_id){
        return $http.get('comentarios_anidados/todos/' + comentario_id);
    };

}]);