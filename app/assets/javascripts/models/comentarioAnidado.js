function ComentarioAnidado() {
    this.id = 0;
    this.contenido = "";
    this.comentario_id = 0;
}

/* Constructor */
ComentarioAnidado.llenarDesde = function(datosDePropuesta) {
    debugger;
    var comentarioAnidado = new ComentarioAnidado();

    comentarioAnidado.id = datosDePropuesta.id;
    comentarioAnidado.contenido = datosDePropuesta.contenido;
    comentarioAnidado.comentario_id = datosDePropuesta.comentario_id;

    return comentarioAnidado;
};

/* Métodos de Instancia. */
Comentario.prototype = {

};