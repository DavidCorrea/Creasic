creasic.directive("votos", function($rootScope, votosService) {
    return {
        type: 'E',
        templateUrl: 'views/directives/votos',
        scope: {
            post: '=',
            actualizarPost: '='
        },
        link: function(scope) {

            scope.votoPositivo = false;
            scope.votoNegativo = false;

            angular.forEach(scope.post.votos, function(voto){
                if ($rootScope.usuario && voto.usuario_id == $rootScope.usuario.id){
                    scope.votoDelUsuario = voto;
                    scope.votoPositivo = voto.valor == 1;
                    scope.votoNegativo = voto.valor == -1;
                }
            });


            scope.cantidadDeVotos = function() {
                var total = 0;
                for ( var i = 0, _len = scope.post.votos.length; i < _len; i++ ) {
                    total += scope.post.votos[i].valor;
                }
                return total
            };
            
            scope.darVotoPositivo = function(){
                if(scope.votoNegativo){
                    votosService.eliminarVoto(scope.votoDelUsuario).then(function(){
                        scope.votoPositivo = false;
                        scope.votoNegativo = false;
                        scope.post.votos = scope.post.votos.filter(function(voto) {
                            return voto.usuario_id !== $rootScope.usuario.id;
                        });
                    });
                }
                else {
                    scope.voto = new Voto(scope.post, $rootScope.usuario.id);
                    scope.voto.valor = 1;
                    votosService.darVoto(scope.voto).then(function (response) {
                        scope.votoDelUsuario = response.data;
                        scope.votoPositivo = true;
                        scope.votoNegativo = false;
                        scope.post.votos.push(response.data);
                    });
                }
            };

            scope.darVotoNegativo = function(){
                if(scope.votoPositivo){
                    votosService.eliminarVoto(scope.votoDelUsuario).then(function(){
                        scope.votoPositivo = false;
                        scope.votoNegativo = false;
                        scope.post.votos = scope.post.votos.filter(function(voto) {
                            return voto.usuario_id !== $rootScope.usuario.id;
                        });
                    });
                }
                else {
                    scope.voto = new Voto(scope.post, $rootScope.usuario.id);
                    scope.voto.valor = -1;
                    votosService.darVoto(scope.voto).then(function (response) {
                        scope.votoDelUsuario = response.data;
                        scope.votoPositivo = false;
                        scope.votoNegativo = true;
                        scope.post.votos.push(response.data);
                    });
                }
            };


        }
    };
});