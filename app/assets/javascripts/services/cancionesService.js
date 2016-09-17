creasic.service('cancionesService', ['$http', function($http) {

    this.crearCancion = function(cancion) {
        var url = "cancion/crear_cancion";

        return $http.post(url, cancion);
    };

    this.obtenerCanciones = function(){
        return $http.get('cancion/obtener_canciones');
    };

    var config = {
        headers: {
            'X-HTTP-Method-Override': 'POST'
        }
    };

}]);