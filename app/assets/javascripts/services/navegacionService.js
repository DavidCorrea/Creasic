creasic.service('navegacionService', ['$state', function($state) {

    this.llevarAHome = function() {
        $state.transitionTo('home');
    };

    this.llevarACreacionDeUsuario = function() {
        $state.transitionTo('usuario.creacion');
    };

    this.llevarASecuencias = function() {
        $state.transitionTo('secuenciasDeAcordes.todas');
    };

    this.llevarACanciones = function() {
        $state.transitionTo('canciones.todas');
    };

    this.llevarALetras = function() {
        $state.transitionTo('letras.todas');
    };

    this.llevarAUsuarios = function() {
        $state.transitionTo('usuarios.todos');
    };

}]);