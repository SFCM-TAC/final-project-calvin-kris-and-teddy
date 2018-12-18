
//create a synth and connect it to the master output (your speakers)


//play a middle 'C' for the duration of an 8th note

// var synth = new Tone.Synth().toMaster()
// synth.triggerAttackRelease('C4', '8n')

function sound() {
// var crusher = new Tone.BitCrusher(8).toMaster();
  var synth = new Tone.AMSynth({

		harmonicity  : 3 ,
		detune  : 0 ,
		oscillator  : {
		// type  : sine
		}  ,
		envelope  : {
		attack  : 0.01 ,
		decay  : 0.01 ,
		sustain  : 1 ,
		release  : 0.5
		}  ,
		modulation  : {
		// type  : square
		}  ,
		modulationEnvelope  : {
		attack  : 0.5 ,
		decay  : 0 ,
		sustain  : 1 ,
		release  : 0.5
		}

}
).toMaster();
synth.triggerAttackRelease('C4', '4n');

// var seq = new Tone.Sequence(function(time, note){
// 	console.log(note);
// //subdivisions are given as subarrays
// }, ["C4", ["E4", "D4", "E4"], "G4", ["A4", "G4"]]);
// synth.seq.toMaster();

}
