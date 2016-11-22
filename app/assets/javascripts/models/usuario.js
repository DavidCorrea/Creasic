function Usuario() {
    this.email = "";
    this.nombre = "";
    this.id = "";
}

/* Constructor */
Usuario.llenarDesde = function(datosDeUsuario) {
    var usuario = new Usuario();

    usuario.id = datosDeUsuario.user_id || datosDeUsuario.id_externo || datosDeUsuario.id;
    usuario.email = datosDeUsuario.email;
    usuario.nombre = datosDeUsuario.nombre;
    usuario.descripcion = datosDeUsuario.descripcion;
    usuario.gustos = datosDeUsuario.gustos;
    usuario.instrumentos = datosDeUsuario.instrumentos;
    usuario.intereses = datosDeUsuario.intereses;

    return usuario;
};

/* Métodos de Instancia. */
Usuario.prototype = {

};