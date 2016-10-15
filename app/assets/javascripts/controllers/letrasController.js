creasic.controller('letrasCtrl', ['$scope', 'letrasService', function ($scope, letrasService) {

    letrasService.obtenerTodasLasLetras().then(function(response){
        $scope.letras = [];

        angular.forEach(response.data, function(letra_json) {
            $scope.letras.push(Letra.llenarDesde(letra_json))
        });
    });

}]);