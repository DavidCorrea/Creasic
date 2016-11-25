creasic.controller("bienvenidaCtrl", ['$scope', '$mdDialog', 'usuariosService', 'toastService', function ($scope, $mdDialog, usuariosService, toastService) {

    $scope.nombreDeUsuario = '';

    $scope.elegirNombre = function() {
        usuariosService.nombreEstaDisponible($scope.nombreDeUsuario).then(function(response) {
            $scope.nombreEstaDisponible = response.data;

            if($scope.nombreEstaDisponible) {
                $mdDialog.hide($scope.nombreDeUsuario);
            } else {
                toastService.mostrarError("Lo sentimos. El nombre elegido no esta disponible.");
            }
        });
    };

    $scope.noPuedeElegir = function() {
        return $scope.nombreDeUsuario.length < 3;
    };

}]);