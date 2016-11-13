creasic.directive("acorde", function(pianoService) {
    return {
        type: 'E',
        templateUrl: 'views/directives/acorde',
        scope: {
          data: '=',
          source: '=',
          puedeSerEditado: '='
        },
        link: function(scope) {
            scope.eliminarNota = function(notaAEliminar) {
                scope.data.eliminarNota(notaAEliminar);
            };

            scope.escuchar = function(){
                pianoService.tocarAcorde(scope.data.notasComoCifrado());
            };

            scope.eliminar = function(){
                scope.source.eliminarAcorde(scope.data);
            };
        }
    };
});