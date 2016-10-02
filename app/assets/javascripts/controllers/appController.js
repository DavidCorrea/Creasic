creasic.controller("appCtrl", ['$scope', 'authService', 'navegacionService', function ($scope, authService, navegacionService) {

    authService.sesionActual().then(function(usuario) {
        $scope.usuario = usuario;
        $scope.existeSesion = authService.existeSesion();
    }, function() {
        navegacionService.llevarAHome();
    });

    $scope.cerrarSesion = function() {
        authService.cerrarSesion($scope.usuario).then(function(usuarioViejo) {
            $scope.existeSesion = authService.existeSesion();
            navegacionService.llevarAHome();
        });
    };

    $scope.$on('devise:new-session', function(event, usuario) {
        $scope.usuario = usuario;
        $scope.existeSesion = authService.existeSesion();
    });

}]);