creasic.controller("toastCtrl", ['$scope', 'errores', 'mensaje', function ($scope, errores, mensaje) {

    $scope.errores = errores;
    $scope.mensaje = mensaje;

}]);