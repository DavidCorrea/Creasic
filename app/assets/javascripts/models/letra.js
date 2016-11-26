function Letra(idUsuario) {
    this.titulo = "";
    this.contenido = "";
    this.comentarios = [];
    this.usuario_id = idUsuario;
}

/* Constructor */
Letra.llenarDesde = function(datosDeLetra) {
    var letra = new Letra(datosDeLetra.usuario_id);
    letra.id = datosDeLetra.id;
    letra.titulo = datosDeLetra.titulo;
    letra.contenido = datosDeLetra.contenido;
    letra.nombreUsuario = datosDeLetra.nombre_usuario;

    datosDeLetra.comentarios.forEach(function(comentario) {
        var comentarioAAgregar = Comentario.llenarDesde(comentario, letra);
        letra.agregarComentario(comentarioAAgregar);
    });
    return letra;
};

/* Métodos de Instancia. */
Letra.prototype = {
    agregarComentario: function(comentario) {
        this.comentarios.push(comentario);
    },

    perteneceA: function(usuario_id) {
        return this.usuario_id === usuario_id;
    }
};