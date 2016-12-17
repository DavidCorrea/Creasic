creasic.controller('perfilCtrl', ['$scope', 'usuarioActual', 'usuariosService', 'toastService', 'navegacionService', function ($scope, usuarioActual, usuariosService, toastService, navegacionService) {

    $scope.usuario = usuarioActual;

    $scope.guardar = function() {
        usuariosService.editarUsuario($scope.usuario).then(function(response) {
            $scope.usuario = Usuario.llenarDesde(response.data);
            toastService.mostrarMensaje("¡Tu perfil fue editado correctamente!");
            navegacionService.llevarAHome();
        });
    };

    $scope.volver = function() {
        navegacionService.llevarAHome();
    };

}]);