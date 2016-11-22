creasic.controller('perfilCtrl', ['$scope', '$rootScope', 'usuariosService', 'toastService', 'navegacionService', function ($scope, $rootScope, usuariosService, toastService, navegacionService) {

    usuariosService.obtenerUsuario($rootScope.usuario.id).then(function(usuario) {
        $scope.usuario = usuario;
    });

    $scope.guardar = function() {
        usuariosService.editarUsuario($scope.usuario).then(function(response) {
            $scope.usuario = Usuario.llenarDesde(response.data);
            toastService.mostrarMensaje("Tu perfil fue editado correctamente!");
            navegacionService.llevarAHome();
        });
    };

    $scope.volver = function() {
        navegacionService.llevarAHome();
    };

}]);