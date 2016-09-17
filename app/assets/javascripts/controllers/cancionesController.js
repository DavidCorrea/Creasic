creasic.controller('cancionesCtrl', ['$scope', 'cancionesService', function ($scope, cancionesService) {

    cancionesService.obtenerCanciones().then(function(response){
        $scope.canciones = response.data;
    })

}]);