creasic.controller("crearSecuenciaDeAcordesCtrl", ['$scope', '$rootScope', 'notas', 'secuenciasDeAcordesService', 'pianoService', function ($scope, $rootScope, notas, secuenciasDeAcordesService, pianoService) {

    $scope.notas = notas;
    $scope.secuencia = new SecuenciaDeAcordes($rootScope.usuario.id);

    $scope.$watch('secuencia.bpm', function(){
        pianoService.cambiarBPM($scope.secuencia.bpm);
    });

    $scope.agregarNota = function(nota){
        pianoService.tocarNota(nota.cifrado);
        var acorde = $scope.secuencia.acordes[$scope.secuencia.acordes.length - 1];
        acorde.agregarNota(nota);
    };

    $scope.escucharAcordes = function(){
        var cifradoDeAcordes = $scope.secuencia.acordes.map(function(acorde) {
            return acorde.notas.map(function(nota) {
                return nota.cifrado;
            })
        });

        pianoService.tocarAcordes(cifradoDeAcordes);
    };

    $scope.agregarNuevoAcorde = function(){
        $scope.secuencia.agregarAcorde();
    };

    $scope.guardar = function() {
        secuenciasDeAcordesService.crearSecuencia($scope.secuencia);
    };
}]);