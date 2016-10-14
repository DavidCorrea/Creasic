creasic.controller('verLetraCtrl', ['$scope', '$stateParams', 'letrasService', 'comentariosService', 'comentariosAnidadosService', 'toastService', function ($scope, $stateParams, letrasService, comentariosService, comentariosAnidadosService, toastService) {

    letrasService.obtenerLetra($stateParams.id).then(function(response){
        $scope.letra = Letra.llenarDesde(response.data);
        comentariosService.obtenerTodosLosComentarios($scope.letra.id).then(function(response){
            $scope.letra.comentarios = response.data;

            angular.forEach($scope.letra.comentarios, function(comentario){
                comentariosAnidadosService.obtenerTodosLosComentariosAnidados(comentario.id).then(function(response){
                    comentario.comentariosAnidados = response.data;
                });
            });
        });

    });

    $scope.comentando = false;
    $scope.anidando1 = false;

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

    $scope.responder = function(comentario_id){
        $scope.comentarioAnidado = new ComentarioAnidado();
        $scope['anidando' + comentario_id] = true;
    };

    $scope.cancelarComentarioAnidado = function (comentario_id) {
        $scope['anidando' + comentario_id] = false;
    };

    $scope.guardarComentarioAnidado = function(comentario_id){
        $scope.comentarioAnidado.comentario_id = comentario_id;
        comentariosAnidadosService.crearComentarioAnidado($scope.comentarioAnidado).then(function(response){
            var comentarioAnidadoCreado = ComentarioAnidado.llenarDesde(response.data);
            var comentario = $scope.letra.comentarios.filter(function (com) {
                return (com.id == comentario_id);
            });
            comentario[0].comentariosAnidados.push(comentarioAnidadoCreado);
            $scope['anidando' + comentario_id] = false;
        });
    };
}]);