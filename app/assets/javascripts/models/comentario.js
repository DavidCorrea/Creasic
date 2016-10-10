function Comentario(post) {
    this.id = 0;
    this.contenido = "";
    this.letra_id = post.id;
}

/* Constructor */
Comentario.llenarDesde = function(datosDePropuesta, post) {
    var comentario = new Comentario(post);

    comentario.id = datosDePropuesta.id;
    comentario.contenido = datosDePropuesta.contenido;

    return comentario;
};

/* Métodos de Instancia. */
Comentario.prototype = {

};