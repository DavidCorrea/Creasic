creasic.controller('cancionCtrl', ['$scope', '$rootScope', '$sce', 'cancion', 'modoEdicion', 'cancionesService', 'toastService', 'navegacionService', 'uploadService',
    function ($scope, $rootScope, $sce, cancion, modoEdicion, cancionesService, toastService, navegacionService, uploadService) {

    $scope.modoEdicion = modoEdicion;
    $scope.cancion = cancion;
    $scope.perteneceAlUsuario = $rootScope.usuario && ($rootScope.usuario.id === cancion.usuario_id);

    $scope.guardar = function() {
        if(!$scope.modoEdicion) {
            cancionesService.crearCancion($scope.cancion).then(function() {
                $scope.mostrarProcesoExitoso('¡"'+ $scope.cancion.titulo + '" fue creada exitosamente!');
            });
        } else {
            cancionesService.editarCancion($scope.cancion).then(function() {
                $scope.mostrarProcesoExitoso('¡"'+ $scope.cancion.titulo + '" fue editada exitosamente!');
            });
        }

    };

    $scope.upload = function(file){
        uploadService.upload(file, function(audio_id) {
            $scope.cancion.agregarAudio(new Audio(audio_id));
        });
    };

    $scope.cancionActualizada = function(data) {
        return Cancion.llenarDesde(data);
    };

    $scope.mostrarProcesoExitoso = function(mensaje) {
        toastService.mostrarMensaje(mensaje);
        navegacionService.llevarACanciones();
    };

    $scope.urlFor = function(audio) {
        var media_id = (audio.media_id === undefined) ? audio.audios[0].media_id : audio.media_id;
        var url = "http://res.cloudinary.com/dzfxwe6la/video/upload/v1478324228/" + media_id + ".mp3";//TODO: CAMBIAR ESTO OMG
        return $sce.trustAsResourceUrl(url);
    }

}]);