creasic.controller('letraCtrl', ['$scope', '$rootScope', 'letra', 'modoEdicion', 'letrasService', 'toastService', 'navegacionService',
    function ($scope, $rootScope, letra, modoEdicion, letrasService, toastService, navegacionService) {

    $scope.modoEdicion = modoEdicion;
    $scope.letra = letra;
    $scope.perteneceAlUsuario = $rootScope.usuario.id === letra.usuario_id;

    $scope.guardar = function() {
        if(!$scope.modoEdicion) {
            letrasService.crearLetra($scope.letra).then(function() {
                $scope.mostrarProcesoExitoso('Propuesta creada exitosamente.');
            });
        } else {
            letrasService.editarLetra($scope.letra).then(function() {
                $scope.mostrarProcesoExitoso('Propuesta editada exitosamente.');
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