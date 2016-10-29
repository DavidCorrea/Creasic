creasic.service('notasService', ['$http', function($http) {

    this.todasLasNotas = function() {
        return $http.get('notas/todas').then(function(response) {
            return response.data;
        });
    };

}]);