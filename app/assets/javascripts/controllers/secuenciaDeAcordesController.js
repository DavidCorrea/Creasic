creasic.controller("secuenciaDeAcordesCtrl",
    ['$scope', '$rootScope', 'secuenciaDeAcordes', 'notas', 'modoEdicion', 'secuenciasDeAcordesService', 'pianoService', 'toastService', 'navegacionService',
    function ($scope, $rootScope, secuenciaDeAcordes, notas, modoEdicion, secuenciasDeAcordesService, pianoService, toastService, navegacionService) {

    $scope.modoEdicion = modoEdicion;
    $scope.notas = notas;
    $scope.secuencia = secuenciaDeAcordes;
    $scope.perteneceAlUsuario = $rootScope.usuario && ($rootScope.usuario.id === secuenciaDeAcordes.usuario_id);

    $scope.$watch('secuencia.bpm', function(){
        pianoService.cambiarBPM($scope.secuencia.bpm);
    });

    $scope.agregarNota = function(nota){
        var acorde = $scope.secuencia.acordes[$scope.secuencia.acordes.length - 1];
        acorde.agregarNota(nota);

        pianoService.tocarNota(nota.cifrado);
    };

    $scope.escucharAcordes = function(){
        var cifradoDeAcordes = $scope.secuencia.acordes.map(function(acorde) {
            return acorde.notasComoCifrado();
        });

        pianoService.tocarAcordes(cifradoDeAcordes);
    };

    $scope.agregarNuevoAcorde = function(){
        $scope.secuencia.agregarAcorde();
    };

    $scope.guardar = function() {
        if(!$scope.modoEdicion) {
            secuenciasDeAcordesService.crear($scope.secuencia).then(function() {
                $scope.mostrarProcesoExitoso('¡"'+ $scope.secuencia.titulo + '" fue creada exitosamente!');
            });
        } else {
            secuenciasDeAcordesService.editar($scope.secuencia).then(function() {
                $scope.mostrarProcesoExitoso('¡"'+ $scope.secuencia.titulo + '" fue editada exitosamente!');
            });
        }
    };

    $scope.secuenciaDeAcordesActualizada = function(data) {
        return SecuenciaDeAcordes.llenarDesde(data);
    };

    $scope.mostrarProcesoExitoso = function(mensaje) {
        toastService.mostrarMensaje(mensaje);
        navegacionService.llevarASecuencias();
    };
}]);