creasic.service('votosService', ['$http', function($http) {

    this.darVotoPositivo = function(voto) {
        return $http.post('votos/dar_voto_positivo/' + voto.votable_id, voto);
    };

    this.darVotoNegativo = function(voto) {
        return $http.post('votos/dar_voto_negativo/' + voto.votable_id, voto);
    };

    this.eliminarVoto = function(voto){
        return $http.post('votos/eliminar_voto/' + voto.id);
    }


}]);