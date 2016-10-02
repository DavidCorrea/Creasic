creasic.controller("ingresoCtrl", ['$scope', 'authService', 'toastService', 'navegacionService', function ($scope, authService, toastService, navegacionService) {

    $scope.usuario = new Usuario();

    $scope.loguearUsuario = function() {
        authService.iniciarSesion($scope.usuario).then(function() {
            navegacionService.llevarAHome();
            toastService.mostrarMensaje('Ingreso satisfactorio.');
        }, function(response) {

        });
    };

}]);

