creasic.controller("secuenciaDeAcordesCtrl",
    ['$scope', '$rootScope', 'secuenciaDeAcordes', 'notas', 'modoEdicion', 'secuenciasDeAcordesService', 'pianoService',
    function ($scope, $rootScope, secuenciaDeAcordes, notas, modoEdicion, secuenciasDeAcordesService, pianoService) {

    $scope.modoEdicion = modoEdicion;
    $scope.notas = notas;
    $scope.secuencia = secuenciaDeAcordes;
    $scope.perteneceAlUsuario = $rootScope.usuario.id === secuenciaDeAcordes.usuario_id;

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
            secuenciasDeAcordesService.crear($scope.secuencia);
        } else {
            secuenciasDeAcordesService.editar($scope.secuencia);
        }
    };

    $scope.secuenciaDeAcordesActualizada = function(data) {
        return SecuenciaDeAcordes.llenarDesde(data);
    }
}]);