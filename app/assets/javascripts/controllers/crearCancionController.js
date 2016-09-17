creasic.controller("crearCancionCtrl", ['$scope', '$http', 'crearCancionService', 'toastService', 'navegacionService', function ($scope, $http, crearCancionService, toastService, navegacionService) {

    $scope.cancion = {
        titulo: '',
        letra: ''
    };

    $scope.guardarCancion = function(){
        crearCancionService.crearCancion($scope.cancion)
    };

}]);
