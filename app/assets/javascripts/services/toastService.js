creasic.service('toastService', ['$mdToast', function($mdToast) {

    var delay = 6000;

    var opciones = {
        mensaje: '',
        errores: []
    };

    var toast = function(locals, templateUrl) {
        return {
            controller: 'toastCtrl',
            hideDelay: delay,
            position: 'top center',
            locals: locals,
            templateUrl: 'views/extras/' + templateUrl + '.html'
        };
    };

    this.mostrarMensaje = function(mensaje) {
        var locals = opciones;
        locals.mensaje = mensaje;

        $mdToast.show(toast(locals, 'success_toast'));
    };

    this.mostrarErrores = function(errores) {
        var locals = opciones;
        locals.errores = errores;

        $mdToast.show(toast(locals, 'error_toast'));
    };

}]);
