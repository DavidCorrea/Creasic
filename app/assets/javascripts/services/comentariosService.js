creasic.service('comentariosService', ['$http', function($http) {

    this.agregarComentario = function(comentario) {
        return $http.post('comentarios/comentar/' + comentario.letra_id, comentario);
    };

    this.agregarRespuesta = function(respuesta) {
        return $http.post('comentarios/responder/' + respuesta.comentario_id, respuesta);
    };

}]);