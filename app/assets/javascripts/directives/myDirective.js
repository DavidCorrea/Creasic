creasic.directive("myDirective", function() {
    return {
        type: 'E',
        template: '<md-button class="md-label" ng-click="tocarAcordes()">Tocar Acordes</md-button><md-button class="md-label" ng-click="tocarNota()">Tocar Nota</md-button><md-button class="md-label" ng-click="tocarAcorde()">Tocar Acorde</md-button>',
        scope: {
            acordes: '='
        },
        link: function(scope) {
            Tone.Transport.timeSignature = [4, 4];
            Tone.Transport.bpm.value = 80;

            var piano = new Tone.PolySynth(4, Tone.Synth).toMaster();

            scope.tocarNota = function(){
                piano.triggerAttackRelease("C4", "8n")
            };

            scope.tocarAcorde = function(){
                var cChord = ["C4", "E4", "G4", "B4"];

                piano.triggerAttackRelease(cChord, "8n")
            };

            scope.tocarAcordes = function(){
                var cChord = ["C4", "E4", "G4", "B4"];
                var dChord = ["D4", "F4", "A4", "C5"];
                var gChord = ["B3", "D4", "E4", "A4"];

                var pianoPart = new Tone.Part(function(time, chord){
                    piano.triggerAttackRelease(chord, "8n", time);
                }, [["0:0:0", cChord], ["0:1:0", dChord], ["0:2:0", cChord], ["0:3:0", gChord]]).start();

                pianoPart.loop = true;
                pianoPart.loopEnd = "1m";
                pianoPart.humanize = true;

                Tone.Transport.start();
            };
        }
    };
});