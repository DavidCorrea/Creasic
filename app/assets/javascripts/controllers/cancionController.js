creasic.controller('cancionCtrl', ['$scope', '$rootScope', 'cancion', 'modoEdicion', 'cancionesService', 'toastService', 'navegacionService',
    function ($scope, $rootScope, cancion, modoEdicion, cancionesService, toastService, navegacionService) {

    $scope.modoEdicion = modoEdicion;
    $scope.cancion = cancion;
    $scope.perteneceAlUsuario = $rootScope.usuario && ($rootScope.usuario.id === cancion.usuario_id);

    $scope.guardar = function() {
        if(!$scope.modoEdicion) {
            cancionesService.crearCancion($scope.cancion).then(function() {
                $scope.mostrarProcesoExitoso('¡"'+ $scope.cancion.titulo + '" fue creada exitosamente!');
            });
        } else {
            cancionesService.editarCancion($scope.cancion).then(function() {
                $scope.mostrarProcesoExitoso('¡"'+ $scope.cancion.titulo + '" fue editada exitosamente!');
            });
        }

    };

    $scope.cancionActualizada = function(data) {
        return Cancion.llenarDesde(data);
    };

    $scope.mostrarProcesoExitoso = function(mensaje) {
        toastService.mostrarMensaje(mensaje);
        navegacionService.llevarACanciones();
    };

}]);