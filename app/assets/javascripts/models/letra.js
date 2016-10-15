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
    letra.emailUsuario = datosDeLetra.email_usuario;

    angular.forEach(datosDeLetra.comentarios, function(comentario) {
        var comentarioAAgregar = Comentario.llenarDesde(comentario, letra);
        letra.comentarios.push(comentarioAAgregar);
    });

    return letra;
};

/* Métodos de Instancia. */
Letra.prototype = {

};