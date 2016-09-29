creasic.controller("crearLetraCtrl", ['$scope', '$http', 'letrasService', 'toastService', 'navegacionService', function ($scope, $http, letrasService, toastService, navegacionService) {

    $scope.letra = new Letra();

    $scope.guardarLetra = function(){
        letrasService.crearLetra($scope.letra).then(function(response){
            var letraCreada = Letra.llenarDesde(response.data);

            var texto = 'Letra creada: ' + letraCreada.titulo;
            toastService.mostrarMensaje(texto);

            navegacionService.llevarALetras();
        }, function(){

        });
    };

}]);