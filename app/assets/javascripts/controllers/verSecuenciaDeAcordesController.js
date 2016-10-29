creasic.controller('verSecuenciaDeAcordesCtrl', ['$scope', 'secuenciaDeAcordes', 'secuenciasDeAcordesService', 'comentariosService', 'pianoService', 'notas', function ($scope, secuenciaDeAcordes, secuenciasDeAcordesService, comentariosService, pianoService, notas) {

    $scope.secuencia = secuenciaDeAcordes;
    $scope.notas = notas;

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
        secuenciasDeAcordesService.editar($scope.secuencia).then(function(response) {
            $scope.secuencia = SecuenciaDeAcordes.llenarDesde(response.data);
        });
    };

    /*

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

    */
}]);