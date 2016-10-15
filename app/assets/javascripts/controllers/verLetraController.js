creasic.controller('verLetraCtrl', ['$scope', 'letra', 'letrasService', function ($scope, letra, letrasService) {

    $scope.letra = letra;

    /* Comentarios */

    $scope.comentando = false;

    $scope.comentar = function() {
        $scope.comentario = new Comentario($scope.letra);
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
        $scope.respuesta = new Respuesta(comentario);
        $scope.comentarioSiendoRespondido = comentario.id;
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


}]);