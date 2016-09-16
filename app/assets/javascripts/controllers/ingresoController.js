creasic.controller("ingresoCtrl", ['$scope', 'authService', 'authObserverService', 'toastService', 'navegacionService', function ($scope, authService, authObserverService, toastService, navegacionService) {

    $scope.usuario = {
        email: '',
        password: ''
    };

    $scope.loguearUsuario = function() {
        authService.iniciarSesion($scope.usuario).then(function(usuarioRegistrado) {
            navegacionService.llevarAHome();
            toastService.mostrarMensaje('Ingreso satisfactorio.');
            authObserverService.notifyObservers(usuarioRegistrado);
        }, function(response) {

        });
    };

}]);

