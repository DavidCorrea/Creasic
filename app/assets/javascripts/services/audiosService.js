creasic.service('audiosService', ['$http', function($http) {

    this.agregarAudio = function(audio) {
        return $http.post('audios/agregar/' + audio.cancion_id, audio);
    };



}]);