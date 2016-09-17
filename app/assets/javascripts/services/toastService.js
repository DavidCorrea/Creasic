creasic.service('toastService', ['$mdToast', function($mdToast) {

    var delay = 3000;

    this.mostrarMensaje = function(mensaje) {
        $mdToast.show($mdToast.simple().textContent(mensaje).hideDelay(delay));
    };

}]);
