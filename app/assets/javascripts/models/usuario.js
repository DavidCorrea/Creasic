function Usuario() {
    this.nombre_de_usuario = "";
    this.email = "";
    this.password = "";
    this.confirmacion_de_password = "";
}

/* Constructor */
Usuario.llenarDesde = function(datosDeUsuario) {
    var usuario = new Usuario();

    usuario.nombre_de_usuario = datosDeUsuario.nombre_de_usuario;
    usuario.email = datosDeUsuario.email;

    return usuario;
};

/* Métodos de Instancia. */
Usuario.prototype = {

};