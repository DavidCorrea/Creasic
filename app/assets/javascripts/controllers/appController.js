creasic.controller("appCtrl", ['$scope', 'authService', 'authObserverService', function ($scope, authService, authObserverService) {

    $scope.existeSesion = authService.existeSesion();

    authObserverService.registerObserverCallback(function(usuario) {
        $scope.usuario = usuario;
        $scope.existeSesion = authService.existeSesion();
    });

    $scope.cerrarSesion = function() {
        authService.cerrarSesion($scope.usuario).then(function(usuarioViejo) {
            $scope.existeSesion = authService.existeSesion();
        }, function(response) {

        });
    };

}]);