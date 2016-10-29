creasic.controller('verLetraCtrl', ['$scope', 'letra', 'letrasService', 'comentariosService', function ($scope, letra, letrasService, comentariosService) {

    $scope.letra = letra;

    $scope.enModoEdicion = false;

    $scope.sePuedeEditar = function() {
        if(!$scope.haySesion)
            return false;
        return $scope.puedeSerEditadaPorUsuarioLogueado() && !$scope.enModoEdicion;
    };

    $scope.entrarModoEdicion = function() {
        $scope.enModoEdicion = true;
    };

    $scope.guardarEdicion = function() {
        letrasService.editarLetra($scope.letra).then(function(response) {
            $scope.letra = $scope.letraActualizada(response.data);
            $scope.enModoEdicion = false;
        });
    };

    $scope.cancelarModoEdicion = function() {
        $scope.enModoEdicion = false;
    };

    $scope.puedeSerEditadaPorUsuarioLogueado = function() {
        return $scope.letra.usuario_id === $scope.usuario.id;
    };

    $scope.letraActualizada = function(data) {
        return Letra.llenarDesde(data);
    }

}]);