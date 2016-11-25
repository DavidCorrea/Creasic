creasic.service('bienvenidaService', ['$http', '$mdDialog', function($http, $mdDialog) {

    this.mostrarEleccionDeNombre = function(callback) {
        $mdDialog.show({
            controller: 'bienvenidaCtrl',
            templateUrl: '/views/bienvenida',
            parent: angular.element(document.body),
            clockOutsideToClose: false,
            escapeToClose: false,
            fullscreen: false
        }).then(function(nombreDeUsuario) {
            callback(nombreDeUsuario);
        })
    };

}]);