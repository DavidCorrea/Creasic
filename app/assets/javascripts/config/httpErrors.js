creasic.run(function($rootScope, toastService) {
    $rootScope.$on('httpError', function(event, errores) {
        toastService.mostrarErrores(errores);
    });
});
