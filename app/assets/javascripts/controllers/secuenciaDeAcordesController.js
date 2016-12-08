creasic.controller("secuenciaDeAcordesCtrl",
    ['$scope', '$rootScope', 'secuenciaDeAcordes', 'modoEdicion', 'secuenciasDeAcordesService', 'pianoService', 'toastService', 'navegacionService',
    function ($scope, $rootScope, secuenciaDeAcordes, modoEdicion, secuenciasDeAcordesService, pianoService, toastService, navegacionService) {

    $scope.modoEdicion = modoEdicion;
    $scope.secuencia = secuenciaDeAcordes;
    $scope.perteneceAlUsuario = $rootScope.usuario && $scope.secuencia.perteneceA($rootScope.usuario.id);

    $scope.notasPrecargadas = [Nota.c4, Nota.c4Sharp, Nota.d4, Nota.e4Bemol, Nota.e4, Nota.f4, Nota.f4Sharp, Nota.g4, Nota.a4Bemol, Nota.a4, Nota.b4Bemol, Nota.b4];
    $scope.acordesPrecargados = [Acorde.C(), Acorde.D(), Acorde.E(), Acorde.F(), Acorde.G(), Acorde.A(), Acorde.B()];

    $scope.$watch('secuencia.bpm', function(){
        if($scope.secuencia.bpm) {
            pianoService.cambiarBPM($scope.secuencia.bpm);
        }
    });

    $scope.agregarNuevoAcorde = function(){
        $scope.secuencia.agregarAcorde();
    };

    $scope.agregarAcordePrecargado = function(acorde){
        $scope.secuencia.agregarAcordePrearmado(acorde);
    };

    $scope.seleccionarAcorde = function(acorde) {
        $scope.acordeSeleccionado = acorde;
    };

    $scope.agregarNota = function(nota){
        $scope.acordeSeleccionado.agregarNota(nota);
        pianoService.tocarNota(nota.cifrado);
    };

    $scope.escucharAcordes = function(){
        var cifradoDeAcordes = $scope.secuencia.acordes.map(function(acorde) {
            return acorde.notasComoCifrado();
        });

        pianoService.tocarAcordes(cifradoDeAcordes);
    };

    $scope.hayAcordes = function() {
        return $scope.secuencia.acordes.length === 0;
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