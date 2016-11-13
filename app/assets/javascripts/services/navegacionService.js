creasic.service('navegacionService', ['$state', function($state) {

    this.llevarASecuencias = function() {
        $state.transitionTo('secuenciasDeAcordes.todas');
    };

    this.llevarACanciones = function() {
        $state.transitionTo('canciones');
    };

    this.llevarAHome = function() {
        $state.transitionTo('home');
    };

    this.llevarALetras = function() {
        $state.transitionTo('letras.todas');
    };


}]);