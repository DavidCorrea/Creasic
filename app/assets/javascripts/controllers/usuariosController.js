creasic.controller('usuariosCtrl', ['$scope', 'usuariosService', function ($scope, usuariosService) {

    usuariosService.todos().then(function(response) {
        $scope.usuarios = response.data.map(function(usuario) {
            return Usuario.llenarDesde(usuario);
        });
    });

}]);