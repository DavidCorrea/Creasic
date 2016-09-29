creasic.service('letrasService', ['$http', function($http) {

    this.crearLetra = function(cancion) {
        return $http.post('letra/crear', cancion);
    };

    this.obtenerTodasLasLetras = function(){
        return $http.get('letra/obtener_letras');
    };

}]);