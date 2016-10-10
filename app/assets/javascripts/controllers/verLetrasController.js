creasic.controller('verLetraCtrl', ['$scope', '$stateParams', 'letrasService', 'comentariosService', 'toastService', function ($scope, $stateParams, letrasService, comentariosService, toastService) {

    letrasService.obtenerLetra($stateParams.id).then(function(response){
        $scope.letra = Letra.llenarDesde(response.data);
        comentariosService.obtenerTodosLosComentarios($scope.letra.id).then(function(response){
            $scope.letra.comentarios = response.data;
        });
    });

    $scope.comentando = false;

    $scope.comentar = function() {
        $scope.comentario = new Comentario($scope.letra);
        $scope.comentando = true;
    };

    $scope.cancelarComentario = function () {
        $scope.comentando = false;
    };

    $scope.guardarComentario = function(){
        comentariosService.crearComentario($scope.comentario).then(function(response) {
            var comentarioCreado = Comentario.llenarDesde(response.data, $scope.letra);
            $scope.letra.comentarios.push(comentarioCreado);

            toastService.mostrarMensaje('Comentario creado');

            $scope.comentando = false;
        });
    };
}]);