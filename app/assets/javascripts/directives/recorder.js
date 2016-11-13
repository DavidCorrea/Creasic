creasic.directive("recorder", function() {
    return {
        type: 'E',
        templateUrl: 'views/directives/recorder',
        scope: {
            data: '='
        },
        link: function(scope) {
            var recorder;
            var audioRecorder = document.querySelector('.audio_recorder');
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
                    audioRecorder.src = window.URL.createObjectURL(s);
                    scope.data.audio = s;
                });
            };
        }
    };
});