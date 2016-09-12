creasic.controller("ingresoCtrl", ['$scope', 'authService', 'toastService', 'navegacionService', function ($scope, authService, toastService, navegacionService) {

    $scope.usuario = {
        email: '',
        password: ''
    };

    $scope.loguearUsuario = function() {
        authService.iniciarSesion($scope.usuario).then(function(usuarioRegistrado) {
            console.log(usuarioRegistrado);
            navegacionService.llevarAHome();
            toastService.mostrarMensaje('Ingreso satisfactorio.');
        }, function(response) {
            console.log(response);
        });

        $scope.usuario = {
            email: '',
            password: ''
        };
    };

}]);

