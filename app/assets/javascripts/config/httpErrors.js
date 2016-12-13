creasic.run(function($rootScope, toastService) {
    $rootScope.$on('httpError', function(event, errores) {
        if(errores.length === 0) {
            toastService.mostrarError("Hemos encontrado un error con lo que quisiste hacer.");
        } else {
            toastService.mostrarErrores(errores);
        }
    });
});
