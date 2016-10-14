creasic.controller('verLetraCtrl', ['$scope', 'letra', 'letrasService', 'toastService', function ($scope, letra, letrasService, toastService) {

    $scope.letra = letra;

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
            debugger;
            $scope.letra = Letra.llenarDesde(response.data);
            $scope.comentarioSiendoRespondido = null;
        });
    };
}]);