creasic.config(function(AuthProvider) {
    AuthProvider.resourceName('usuario');

    AuthProvider.registerPath('usuarios.json');
    AuthProvider.registerMethod('POST');

    AuthProvider.loginPath('usuarios/sign_in.json');
    AuthProvider.loginMethod('POST');

    AuthProvider.logoutPath('usuarios/sign_out.json');
    AuthProvider.logoutMethod('DELETE');
});