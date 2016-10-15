creasic.controller("crearLetraCtrl", ['$scope', '$http', 'letrasService', 'toastService', 'navegacionService', function ($scope, $http, letrasService, toastService, navegacionService) {

    $scope.letra = new Letra($scope.usuario.id);

    $scope.guardarLetra = function(){
        letrasService.crearLetra($scope.letra).then(function(){
            var texto = 'Letra creada: ' + $scope.letra.titulo;
            toastService.mostrarMensaje(texto);
            navegacionService.llevarALetras();
        });
    };

}]);