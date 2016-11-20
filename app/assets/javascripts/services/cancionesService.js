creasic.service('cancionesService', ['$http', function($http) {

    this.crearCancion = function(cancion) {
        return $http.post('canciones/crear', cancion);
    };

    this.obtenerTodasLasCanciones = function(){
        return $http.get('canciones/todas');
    };

    this.obtenerCancion = function(id) {
        return $http.get('canciones/ver/' + id);
    };

    this.editarCancion = function(nuevaCancion) {
        return $http.post('canciones/editar/' + nuevaCancion.id, nuevaCancion);
    };

}]);