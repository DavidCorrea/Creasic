creasic.directive("recorder", function(Upload, cloudinary) {
    return {
        type: 'E',
        templateUrl: 'views/directives/recorder',
        scope: {
            data: '='
        },
        link: function(scope) {
            var recorder;
            var audio = document.querySelector('audio');
            var recordedAudio;
            navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

            var onSuccess = function(s) {
                var context = new AudioContext();
                var mediaStreamSource = context.createMediaStreamSource(s);
                recorder = new Recorder(mediaStreamSource);
                recorder.record();

                // Audio loopback.
                // mediaStreamSource.connect(context.destination);
            };

            var onFail = function(e) {
                console.log('Rejected!', e);
            };

            scope.startRecording = function() {
                if (navigator.getUserMedia) {
                    navigator.getUserMedia({audio: true}, onSuccess, onFail);
                } else {
                    console.log('navigator.getUserMedia not present');
                }
            };

            scope.stopRecording = function() {
                recorder.stop();
                recorder.exportWAV(function(s) {
                    audio.src = window.URL.createObjectURL(s);
                    recordedAudio = s;
                });
            };

            scope.save = function() {
                Upload.upload({
                    url: "https://api.cloudinary.com/v1_1/" + cloudinary.config().cloud_name + "/upload",
                    data: {
                        upload_preset: cloudinary.config().upload_preset,
                        file: recordedAudio
                    }
                }).success(function (data, status, headers, config) {
                    scope.data.media_id = data.public_id;
                    console.log('Guardo');
                }).error(function (data, status, headers, config) {
                    console.log('Error');
                });
            };
        }
    };
});