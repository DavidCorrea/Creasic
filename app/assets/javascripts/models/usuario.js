function Usuario() {
    this.email = "";
    this.nickname = "";
}

/* Constructor */
Usuario.llenarDesde = function(datosDeUsuario) {
    var usuario = new Usuario();

    usuario.email = datosDeUsuario.email;
    usuario.nickname = datosDeUsuario.nickname;

    return usuario;
};

/* Métodos de Instancia. */
Usuario.prototype = {

};