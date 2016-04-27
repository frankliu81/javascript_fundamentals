// Testing setup
//var notes = [{pitch: 'A', beats: 1}, {pitch: 'C#', beats: 2}, {pitch:'D', beats: 4}];
// Play the song at 400 beats per minute.
// playSong(notes, 400);

// First we need to be able to parse individual notes.
// Write a function called parseNote, that takes a string representing
// a single note (e.g. "C#*2" or "A") and returns a note object
// (e.g. {pitch: "C#", beats: 2}). If the user doesn't provide a number
//  of beats (e.g. "C#") then set beats to 1.

// my version
// var parseNote = function(note)
// {
//   noteObj = {}
//
//   // find the * delimiter that separate pitch and beats
//   var star_position = note.indexOf("*");
//   if (star_position === -1)
//   {
//     // no star found, pitch is the whole string
//     noteObj["pitch"] = note;
//     noteObj["beat"] = 1;
//   }
//   else
//   {
//     // take the string before the star to be the pitch
//     noteObj["pitch"] = note.slice(0, star_position);
//     noteObj["beat"] = parseInt(note.slice(star_position+1, note.length));
//   }
//
//   return noteObj;
// }

// from quan, using split
var parseNote = function(string)
{
  var note = {};
  var ar = string.split("*");
  if(ar.length == 1)
    note.beats = 1
  else {
    note.beats = parseInt(ar[1]);
  }
  note.pitch = ar[0];
  return note;
}

var parseSong = function(song) {
  var notes = [];
  if (song !== null)
  {
    var arr = song.split(" ");
    for (var i=0, len=arr.length; i<len; i++)
    {
      notes.push(parseNote(arr[i]));
    }
  }
  return notes;
};

// // Example usage
// var noteObj = parseNote("C#*2"); //=> { pitch: 'C#', beats: 2}
// console.log("C#*2 parseNote: ")
// console.log(noteObj)
// console.log();
// noteObj = parseNote("D"); //=> { pitch: 'D', beats: 1}
// console.log("D parseNote: ")
// console.log(noteObj)
// console.log();
//
// // Example usage
// var noteObjs = parseSong("Ab B"); // =>; [{pitch: 'Ab', beats: 1}, {pitch: 'B', beats: 1}]
// console.log("\"Ab B\" parseSong: ")
// console.log(noteObjs)
// console.log();

var bpm = 200;
var songString;
var notes;

// repeat prompting when the song completes
var onComplete = function () {
   console.log('Song finished playing');
  // songString = prompt("Please enter a song string: ");
  // notes = parseSong(songString);
  // if (notes.length > 0)
  // {
  //   console.log(notes);
  //   playSong(notes, bpm, onComplete);
  // }
  $('#play-button').text("Play Again");
  $('#play-button').attr('disabled', false);
}

// This is for jukebox 1 with the prompt:

// Sample tunes: C D E F G*3
// D D# E C*2 E C*2
// songString = prompt("Please enter a song string: ");
// notes = parseSong(songString);
// if (notes.length > 0)
// {
//   console.log(notes);
//   playSong(notes, bpm, onComplete);
// }

// This is for jukebox 2 with a button:

$(document).ready(function() {
  $('#play-button').on('click', function(){
    songString = prompt("Please enter a song string: ");
    notes = parseSong(songString);
    if (notes.length > 0)
    {
      console.log(notes);
      playSong(notes, bpm, onComplete);
    }
    $this = $(this)

    $this.text("Playing...");
    $this.attr('disabled', true);
  });


});
