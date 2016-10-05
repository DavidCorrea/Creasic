creasic.controller("appCtrl", ['$scope', 'authService', 'navegacionService', function ($scope, authService, navegacionService) {

    $scope.iniciarSesion = function() {
        authService.iniciarSesion();
    };

    $scope.cerrarSesion = function() {
        authService.cerrarSesion();
        $scope.haySesion = authService.haySesion();
    };

    $scope.$on('sesionIniciada', function(event, args) {
        $scope.usuario = authService.sesionActual();
        $scope.haySesion = authService.haySesion();
    });

}]);