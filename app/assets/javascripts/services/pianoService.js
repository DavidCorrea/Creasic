creasic.service('pianoService', ['notasService', function() {
    Tone.Transport.timeSignature = [4, 4];
    Tone.Transport.bpm.value = 80;

    var piano = new Tone.PolySynth(4, Tone.Synth).toMaster();

    this.cambiarBPM = function(nuevoBPM) {
        Tone.Transport.bpm.value = nuevoBPM;
    };

    this.tocarNota = function(nota){
        piano.triggerAttackRelease(nota, "8n")
    };

    this.tocarAcorde = function(acorde){
        piano.triggerAttackRelease(acorde, "8n")
    };

    this.tocarAcordes = function(acordes){
        var number = 0;
        var toPlay = acordes.map(function(acorde){
            var chord = ["0:" + number + ":0", acorde];
            number += 1;
            return chord;
        });

        var pianoPart = new Tone.Part(function(time, chord){
            piano.triggerAttackRelease(chord, "8n", time);
        }, toPlay).start();

        pianoPart.humanize = true;

        Tone.Transport.start();
    };
}]);