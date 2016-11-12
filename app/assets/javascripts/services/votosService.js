creasic.service('votosService', ['$http', function($http) {

    this.darVoto = function(voto) {
        return $http.post('votos/dar_voto/' + voto.votable_id, voto);
    };

    this.eliminarVoto = function(voto){
        return $http.post('votos/eliminar_voto/' + voto.id);
    }


}]);