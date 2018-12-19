
//create a synth and connect it to the master output (your speakers)


//play a middle 'C' for the duration of an 8th note

// var synth = new Tone.Synth().toMaster()
// synth.triggerAttackRelease('C4', '8n')
function title(){
var player = new Tone.Player("music/Opening title.mp3").toMaster();
player.autostart = true;}
console.log("player");

function goblin(){
  var player = new Tone.Player("music/Goblin.mp3").toMaster();
  player.autostart = true;}
}

function travel(){
  var player = new Tone.Player("music/Travel.mp3").toMaster();
  player.autostart = true;}
}

function treasure(){
  var player = new Tone.Player("music/Treasure.mp3").toMaster();
  player.autostart = true;}
}

function sound() {
var synth = new Tone.Synth().toMaster();
synth.triggerAttackRelease('C4', '4n', '8n')
synth.triggerAttackRelease('Eb4', '8n', Tone.Time('4n') + Tone.Time('8n'))
synth.triggerAttackRelease('D4', '16n', '2n')
synth.triggerAttackRelease('C4', '16n', Tone.Time('2n') + Tone.Time('8t'))
synth.triggerAttackRelease('Bb3', '16', Tone.Time('2n') + Tone.Time('8t')*2)
synth.triggerAttackRelease('C4', '2n', Tone.Time('2n') + Tone.Time('8t'))
synth.triggerAttackRelease('G3', '2n', '0:3')}



// var crusher = new Tone.BitCrusher(8).toMaster();
//   var synth = new Tone.AMSynth({
//
// 		harmonicity  : 3 ,
// 		detune  : 0 ,
// 		oscillator  : {
// 		// type  : sine
// 		}  ,
// 		envelope  : {
// 		attack  : 0.01 ,
// 		decay  : 0.01 ,
// 		sustain  : 1 ,
// 		release  : 0.5
// 		}  ,
// 		modulation  : {
// 		// type  : square
// 		}  ,
// 		modulationEnvelope  : {
// 		attack  : 0.5 ,
// 		decay  : 0 ,
// 		sustain  : 1 ,
// 		release  : 0.5
// 		}
//
// }
// ).toMaster();
// // synth.triggerAttackRelease(['C4', '4n'],['Eb4', '4n']);
// // synth.triggerAttackRelease('Eb4', '4n');
// // synth.triggerAttackRelease('D4', '8n');
// // synth.triggerAttackRelease('C4', '8n');
// // synth.triggerAttackRelease('Bb3', '4n');
// // synth.triggerAttackRelease('C4', '4n');
// var seq = new Tone.Sequence(function(time, note){
// 	console.log(note);
// //straight quater notes
// }, ["C4", "E4", "G4", "A4"], "4n").;



// var seq = new Tone.Sequence(function(time, note){
// 	console.log(note);
// //subdivisions are given as subarrays
// }, ["C4", ["E4", "D4", "E4"], "G4", ["A4", "G4"]]);
// synth.seq.toMaster();
// var synth = new Tone.Synth().toMaster()
//
// //pass in an array of events
// var part = new Tone.Part(function(time, event){
// 	//the events will be given to the callback with the time they occur
// 	synth.triggerAttackRelease(event.note, event.dur, time)
// }, [{ time : 0, note : 'C4', dur : '4n'},
// 	{ time : '4n + 8n', note : 'E4', dur : '8n'},
// 	{ time : '2n', note : 'G4', dur : '16n'},
// 	{ time : '2n + 8t', note : 'B4', dur : '4n'}])
//
// //start the part at the beginning of the Transport's timeline
// // part.start(0)
// //
// // //loop the part 3 times
// // part.loop = 3
// // part.loopEnd = '1m'
//
// // document.querySelector('.playToggle').addEventListener('change', function(e){
// // 	if (e.target.checked){
// // 		Tone.Transport.start('+0.1')
// // 	} else {
// // 		Tone.Transport.stop()
// // 	}
// // })
//
// }
