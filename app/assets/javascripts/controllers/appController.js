creasic.controller("appCtrl", ['$scope', '$rootScope', 'authService', 'navegacionService', function ($scope, $rootScope, authService, navegacionService) {

    $rootScope.usuario = authService.sesionActual();
    $rootScope.haySesion = authService.haySesion();

    $scope.iniciarSesion = function() {
        authService.iniciarSesion();
    };

    $scope.cerrarSesion = function() {
        authService.cerrarSesion();
        $rootScope.haySesion = authService.haySesion();
        $rootScope.usuario = null;
    };

    $scope.$on('sesionIniciada', function(event, args) {
        $rootScope.usuario = authService.sesionActual();
        $rootScope.haySesion = authService.haySesion();
    });

}]);