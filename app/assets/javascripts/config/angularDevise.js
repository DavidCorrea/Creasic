creasic.config(function(AuthProvider) {
    AuthProvider.registerPath('usuarios.json');
    AuthProvider.registerMethod('POST');
    AuthProvider.resourceName('usuario');
});