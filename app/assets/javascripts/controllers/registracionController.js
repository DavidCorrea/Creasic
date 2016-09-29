creasic.controller("registracionCtrl", ['$scope', 'authService', 'toastService', 'navegacionService', function ($scope, authService, toastService, navegacionService) {

    $scope.nuevoUsuario = new Usuario();

    $scope.registrarUsuario = function() {
        authService.crearUsuario($scope.nuevoUsuario).then(function(usuarioRegistrado) {
            toastService.mostrarMensaje('Usuario creado correctamente.');
            navegacionService.llevarAIngresar();
        }, function(response) {

        });
    };

}]);
