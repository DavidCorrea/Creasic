creasic.controller('verLetraCtrl', ['$scope', '$stateParams', 'letrasService', function ($scope, $stateParams, letrasService) {

    letrasService.obtenerLetra($stateParams.id).then(function(response){
        $scope.letra = Letra.llenarDesde(response.data);
    });

}]);