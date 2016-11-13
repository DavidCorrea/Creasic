function Usuario() {
    this.email = "";
    this.nickname = "";
    this.id = "";
}

/* Constructor */
Usuario.llenarDesde = function(datosDeUsuario) {
    var usuario = new Usuario();

    usuario.email = datosDeUsuario.email;
    usuario.nickname = datosDeUsuario.nickname;
    usuario.id = datosDeUsuario.user_id;

    return usuario;
};

/* Métodos de Instancia. */
Usuario.prototype = {

};