creasic.service('letrasService', ['$http', function($http) {

    this.crearLetra = function(cancion) {
        return $http.post('letras/crear', cancion);
    };

    this.obtenerTodasLasLetras = function(){
        return $http.get('letras/todas');
    };

}]);