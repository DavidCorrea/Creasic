creasic.directive("comentariosConRespuestas", function($rootScope, $sce, comentariosService) {
    return {
        type: 'E',
        templateUrl: 'views/directives/comentarios',
        scope: {
            post: '=',
            actualizarPost: '='
        },
        link: function(scope) {
            console.log(scope.post);
            scope.comentando = false;
            scope.respondiendo = false;
            
            scope.cantidadDeComentarios = function() {
                return scope.post.comentarios.length;
            };
            
            scope.sePuedeComentar = function() {
                return $rootScope.haySesion && !scope.comentando;
            };

            scope.comentar = function() {
                scope.comentando = true;
                scope.comentario = new Comentario(scope.post, $rootScope.usuario.id);
            };

            scope.cancelarComentario = function () {
                scope.comentando = false;
            };

            scope.guardarComentario = function(){
                console.log(scope.comentario.media_id);
                comentariosService.agregarComentario(scope.comentario).then(function(response) {
                    scope.post = scope.actualizarPost(response.data);
                    scope.comentando = false;
                });
            };

            scope.responder = function(comentario){
                scope.respuesta = new Respuesta(comentario, $rootScope.usuario.id);
                scope.comentarioSiendoRespondido = comentario.id;
                scope.respondiendo = true;
            };

            scope.sePuedeResponder = function() {
                return $rootScope.haySesion && !scope.respondiendo;
            };

            scope.estaRespondiendo = function(idComentario) {
                return scope.comentarioSiendoRespondido === idComentario;
            };

            scope.cancelarRespuesta = function () {
                scope.respondiendo = false;
                scope.comentarioSiendoRespondido = null;
            };

            scope.guardarRespuesta = function(){
                comentariosService.agregarRespuesta(scope.respuesta).then(function(response) {
                    scope.post = scope.actualizarPost(response.data);
                    scope.respondiendo = false;
                    scope.comentarioSiendoRespondido = null;
                });
            };

            scope.urlFor = function(comentario) {
                var url = "http://res.cloudinary.com/dzfxwe6la/video/upload/v1478324228/" + comentario.media_id + ".wav";
                return $sce.trustAsResourceUrl(url);
            }
        }
    };
});