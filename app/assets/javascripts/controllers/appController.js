creasic.controller("appCtrl", ['$scope', 'authService', function ($scope, authService) {

    $scope.iniciarSesion = function() {
        authService.iniciarSesion();
    };

    $scope.cerrarSesion = function() {
        authService.cerrarSesion();
    };

}]);