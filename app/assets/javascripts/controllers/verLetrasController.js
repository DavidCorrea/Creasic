creasic.controller('verLetraCtrl', ['$scope', '$stateParams', 'letrasService', 'comentariosService', 'comentariosAnidadosService', 'toastService', function ($scope, $stateParams, letrasService, comentariosService, comentariosAnidadosService, toastService) {

    letrasService.obtenerLetra($stateParams.id).then(function(response){
        $scope.letra = Letra.llenarDesde(response.data);
        comentariosService.obtenerTodosLosComentarios($scope.letra.id).then(function(response){
            $scope.letra.comentarios = response.data;

            angular.forEach($scope.letra.comentarios, function(comentario){
                debugger;
                comentariosAnidadosService.obtenerTodosLosComentariosAnidados(comentario.id).then(function(response){
                    comentario.comentariosAnidados = response.data;
                });
            });
        });

    });

    $scope.comentando = false;
    $scope.anidandoComentarios = false;

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

    $scope.responder = function(comentario){
        $scope.comentarioAnidado = new ComentarioAnidado(comentario);
        $scope.anidandoComentarios = true;
    };

    $scope.guardarComentarioAnidado = function(comentario){
        comentariosAnidadosService.crearComentarioAnidado($scope.comentarioAnidado).then(function(response){
            var comentarioAnidadoCreado = ComentarioAnidado.llenarDesde(response.data, comentario)
            comentario.comentariosAnidados.push(comentarioAnidadoCreado);
        });
    };
}]);