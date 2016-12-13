creasic.controller('letraCtrl', ['$scope', '$rootScope', 'letra', 'modoEdicion', 'letrasService', 'toastService', 'navegacionService',
    function ($scope, $rootScope, letra, modoEdicion, letrasService, toastService, navegacionService) {

    $scope.modoEdicion = modoEdicion;
    $scope.letra = letra;
    $scope.perteneceAlUsuario = $rootScope.usuario && $scope.letra.perteneceA($rootScope.usuario.id);
    $scope.guardar = function() {
        if(!$scope.modoEdicion) {
            letrasService.crearLetra($scope.letra).then(function() {
                $scope.mostrarProcesoExitoso('¡"'+ $scope.letra.titulo + '" fue creada exitosamente!');
            });
        } else {
            letrasService.editarLetra($scope.letra).then(function() {
                $scope.mostrarProcesoExitoso('¡"'+ $scope.letra.titulo + '" fue editada exitosamente!');
            });
        }

    };

    $scope.letraActualizada = function(data) {
        return Letra.llenarDesde(data);
    };

    $scope.mostrarProcesoExitoso = function(mensaje) {
        toastService.mostrarMensaje(mensaje);
        navegacionService.llevarALetras();
    };

}]);