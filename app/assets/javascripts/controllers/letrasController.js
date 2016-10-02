creasic.controller('letrasCtrl', ['$scope', 'letrasService', function ($scope, letrasService) {

    letrasService.obtenerTodasLasLetras().then(function(response){
        $scope.letras = [];

        response.data.map(function(letra_json) {
            $scope.letras.push(Letra.llenarDesde(letra_json))
        });
    })

}]);