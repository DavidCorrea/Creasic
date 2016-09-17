creasic.controller("registracionCtrl", ['$scope', 'authService', 'toastService', 'navegacionService', function ($scope, authService, toastService, navegacionService) {

    $scope.nuevo_usuario = {
        nombre_de_usuario: '',
        email: '',
        password: '',
        confirmacion_de_password: ''
    };

    $scope.registrarUsuario = function() {
        authService.crearUsuario($scope.nuevo_usuario).then(function(usuarioRegistrado) {
            toastService.mostrarMensaje('Usuario creado correctamente.');
            navegacionService.llevarAIngresar();
        }, function(response) {

        });
    };

}]);
