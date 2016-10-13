function ComentarioAnidado() {
    this.id = 0;
    this.contenido = "";
    this.comentario_id = 0;
}

/* Constructor */
ComentarioAnidado.llenarDesde = function(datosDePropuesta, comentario) {
    var comentarioAnidado = new ComentarioAnidado();

    comentario.id = datosDePropuesta.id;
    comentario.contenido = datosDePropuesta.contenido;
    comentario.comentario_id = comentario.id;

    return comentario;
};

/* Métodos de Instancia. */
Comentario.prototype = {

};