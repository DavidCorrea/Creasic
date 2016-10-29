creasic.controller("crearSecuenciaDeAcordesCtrl", ['$scope', '$rootScope', 'notas', 'secuenciasDeAcordesService', 'pianoService', function ($scope, $rootScope, notas, secuenciasDeAcordesService, pianoService) {

    $scope.notas = notas;
    $scope.secuencia = new SecuenciaDeAcordes($rootScope.usuario.id);

    $scope.$watch('secuencia.bpm', function(){
        pianoService.cambiarBPM($scope.secuencia.bpm);
    });


    $scope.seleccionarNota = function(nota){
        pianoService.tocarNota(nota.cifrado);
        $scope.secuencia.acordes[$scope.secuencia.acordes.length - 1].notas.push(nota);
    };

    $scope.escucharAcorde = function(notas){
        pianoService.tocarAcorde(notas.map(function(nota) {
            return nota.cifrado;
        }));
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
        $scope.secuencia.acordes.push(new Acorde());
    };

    $scope.guardar = function() {
        secuenciasDeAcordesService.crearSecuencia($scope.secuencia);
    };
}]);