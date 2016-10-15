creasic.service('letrasService', ['$http', function($http) {

    this.crearLetra = function(letra) {
        return $http.post('letras/crear', letra);
    };

    this.obtenerTodasLasLetras = function(){
        return $http.get('letras/todas');
    };

    this.obtenerLetra = function(id) {
        return $http.get('letras/ver/' + id);
    };

    this.editarLetra = function(nuevaLetra) {
        return $http.post('letras/editar/' + nuevaLetra.id, nuevaLetra);
    };

    this.agregarComentario = function(comentario) {
        return $http.post('letras/comentar/' + comentario.letra_id, comentario);
    };

    this.agregarRespuesta = function(respuesta) {
        return $http.post('letras/responder/' + respuesta.comentario_id, respuesta);
    };

}]);