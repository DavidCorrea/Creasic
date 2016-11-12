creasic.run(function(authService, authManager) {
    authService.guardarInformacionDeSesion();
    authService.actualizarSesion();
    authManager.checkAuthOnRefresh();
    authManager.redirectWhenUnauthenticated();
});

creasic.config(function(lockProvider) {
    lockProvider.init({
        clientID: 'b9rhCbcaytQ0q3ADDXxAGZOZJuviHSBX',
        domain: 'creasic.auth0.com',
        options: {
            auth: {
                redirect: false
            }
        }
    });
});