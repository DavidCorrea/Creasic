creasic.controller("registracionCtrl", ['$scope', 'registracionService', 'toastService', 'navegacionService', function ($scope, registracionService, toastService, navegacionService) {

    $scope.nuevo_usuario = {
        nombre_de_usuario: '',
        email: '',
        password: '',
        confirmacion_de_password: ''
    };

    $scope.registrarUsuario = function() {
        $scope.hubo_errores = false;

        //TODO: Mejores errores. These ones suck.
        registracionService.registrarUsuario($scope.nuevo_usuario).then(function(usuarioRegistrado) {
            console.log(usuarioRegistrado);
            toastService.mostrarMensaje('Usuario creado correctamente.');
            navegacionService.llevarAIngresar();
        }, function(response) {
            console.log(response);
            $scope.hubo_errores = true;
            $scope.errores = response.data.errors;
        });
    };

}]);
