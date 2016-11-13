creasic.controller("appCtrl", ['$scope', '$rootScope', 'authService', 'navegacionService', function ($scope, $rootScope, authService, navegacionService) {

    $scope.iniciarSesion = function() {
        authService.iniciarSesion();
    };

    $scope.cerrarSesion = function() {
        authService.cerrarSesion();
    };

}]);