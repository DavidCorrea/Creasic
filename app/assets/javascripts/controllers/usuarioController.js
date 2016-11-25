creasic.controller('usuarioCtrl', ['$scope', 'usuario', 'navegacionService', function ($scope, usuario, navegacionService) {

    $scope.usuario = usuario;

    $scope.volver = function() {
        navegacionService.llevarAUsuarios();
    }

}]);