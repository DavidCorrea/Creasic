creasic.service('secuenciasDeAcordesService', ['$http', function($http) {

    this.crear = function(secuencia) {
        secuencia.acordes_attributes = secuencia.acordes;
        return $http.post('secuencias_de_acordes/crear', secuencia);
    };

    this.todas = function(){
        return $http.get('secuencias_de_acordes/todas');
    };

    this.ver = function(id) {
        return $http.get('secuencias_de_acordes/ver/' + id);
    };

    this.editar = function(nuevaSecuencia) {
        nuevaSecuencia.acordes_attributes = nuevaSecuencia.acordes;
        debugger;
        return $http.post('secuencias_de_acordes/editar/' + nuevaSecuencia.id, nuevaSecuencia);
    };

}]);