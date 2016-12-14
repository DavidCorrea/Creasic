creasic.controller('cancionCtrl', ['$scope', '$rootScope', '$sce', 'cancion', 'modoEdicion', 'cancionesService', 'toastService', 'navegacionService', 'uploadService', 'audiosService',
    function ($scope, $rootScope, $sce, cancion, modoEdicion, cancionesService, toastService, navegacionService, uploadService, audiosService) {

    $scope.modoEdicion = modoEdicion;
    $scope.cancion = cancion;
    $scope.perteneceAlUsuario = $rootScope.usuario && ($rootScope.usuario.id === cancion.usuario_id);
    if ($scope.perteneceAlUsuario)
        $scope.audio = new Audio($scope.cancion, $rootScope.usuario.id);


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
        uploadService.upload(file, function(audio_id, file_format) {
            $scope.audio = new Audio($scope.cancion, $rootScope.usuario.id);
            $scope.audio.media_id = audio_id;
            $scope.audio.file_format = file_format;
            audiosService.agregarAudio($scope.audio).then(function(response) {
                $scope.cancion.audios.push(response.data);
            });

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
        var url = "http://res.cloudinary.com/dzfxwe6la/video/upload/v1478324228/" + media_id + "." + audio.file_format;
        return $sce.trustAsResourceUrl(url);
    }

}]);