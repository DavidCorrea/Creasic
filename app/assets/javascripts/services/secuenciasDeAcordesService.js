creasic.service('secuenciasDeAcordesService', ['$http', function($http) {

    this.crearSecuencia = function(secuencia) {
        secuencia.acordes.map(function(acorde) {
            acorde.nota_ids = acorde.notas.map(function(nota) {
               return nota.id;
            });
        });
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
        nuevaSecuencia.acordes.map(function(acorde) {
            acorde.nota_ids = acorde.notas.map(function(nota) {
                return nota.id;
            });
        });
        nuevaSecuencia.acordes_attributes = nuevaSecuencia.acordes;
        return $http.post('secuencias_de_acordes/editar/' + nuevaSecuencia.id, nuevaSecuencia);
    };

}]);