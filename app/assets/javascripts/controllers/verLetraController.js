creasic.controller('verLetraCtrl', ['$scope', 'letra', 'letrasService', function ($scope, letra, letrasService) {

    $scope.letra = letra;

    /* Comentarios */

    $scope.comentando = false;

    $scope.sePuedeComentar = function() {
      if(!$scope.haySesion)
          return false;
      return $scope.comentando;
    };

    $scope.comentar = function() {
        $scope.comentario = new Comentario($scope.letra, $scope.usuario.id);
        $scope.comentando = true;
    };

    $scope.cancelarComentario = function () {
        $scope.comentando = false;
    };

    $scope.guardarComentario = function(){
        letrasService.agregarComentario($scope.comentario).then(function(response) {
            $scope.letra = Letra.llenarDesde(response.data);
            $scope.comentando = false;
        });
    };

    $scope.responder = function(comentario){
        $scope.respuesta = new Respuesta(comentario, $scope.usuario.id);
        $scope.comentarioSiendoRespondido = comentario.id;
    };

    $scope.sePuedeResponder = function() {
      return $scope.haySesion;
    };

    $scope.estaRespondiendo = function(idComentario) {
        return $scope.comentarioSiendoRespondido === idComentario;
    };

    $scope.cancelarRespuesta = function () {
        $scope.comentarioSiendoRespondido = null;
    };

    $scope.guardarRespuesta = function(){
        letrasService.agregarRespuesta($scope.respuesta).then(function(response) {
            $scope.letra = Letra.llenarDesde(response.data);
            $scope.comentarioSiendoRespondido = null;
        });
    };

    /* Edicion */

    $scope.enModoEdicion = false;

    $scope.sePuedeEditar = function() {
        if(!$scope.haySesion)
            return false;
        return $scope.puedeSerEditadaPorUsuarioLogueado();
    };

    $scope.entrarModoEdicion = function() {
        $scope.enModoEdicion = true;
    };

    $scope.guardarEdicion = function() {
        letrasService.editarLetra($scope.letra).then(function(response) {
            $scope.letra = Letra.llenarDesde(response.data);
            $scope.enModoEdicion = false;
        });
    };

    $scope.cancelarModoEdicion = function() {
        $scope.enModoEdicion = false;
    };

    $scope.puedeSerEditadaPorUsuarioLogueado = function() {
        return $scope.letra.usuario_id === $scope.usuario.id;
    };

}]);