creasic.controller("crearCancionCtrl", ['$scope', '$http', 'cancionesService', 'toastService', 'navegacionService', function ($scope, $http, cancionesService, toastService, navegacionService) {

    $scope.cancion = {
        titulo: '',
        letra: ''
    };

    $scope.guardarCancion = function(){
        cancionesService.crearCancion($scope.cancion).then(function(response){
            var texto = 'Cancion creada: ' + response.data.titulo;
            toastService.mostrarMensaje(texto);
            navegacionService.llevarACanciones();

        }, function(){

        });
    };

}]);
