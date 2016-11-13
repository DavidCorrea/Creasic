creasic.service('uploadService', ['Upload', 'cloudinary', 'toastService', function(Upload, cloudinary, toastService) {

    this.upload = function(audio, successCallback, errorCallback) {
        return Upload.upload({
            url: "https://api.cloudinary.com/v1_1/" + cloudinary.config().cloud_name + "/upload",
            data: {
                upload_preset: cloudinary.config().upload_preset,
                file: audio
            }
        }).success(function (data, status, headers, config) {
            toastService.mostrarMensaje('Audio grabado correctamente.');
            successCallback(data.public_id);
        }).error(function (data, status, headers, config) {
            errorCallback();
        });
    };

}]);
