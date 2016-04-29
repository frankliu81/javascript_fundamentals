// Sample Note:
// A B*2 C#

var bpm = 200;
var songString;
var notes;
var bLoopSong = true;

var parseSongWithTitle = function(songTitleString) {
  var titleString = songTitleString.substr(0, songTitleString.indexOf(':'));
  var songString = songTitleString.substr(songTitleString.indexOf(':')+1, songTitleString.length);
  // console.log("titleString " + titleString + " songString " + songString);
  return {song: songString, title: titleString};
}


var loopSongTitle = function()
{
  $("#song-title").animate({
    'opacity': '320'
  }, {
      step: function (now, fx) {
          $(this).css({"transform": "translate3d(" + 2*now + "px, 0px, 0px)"});
      },
      duration: $( window ).width() * 10, // 10000
      easing: 'linear',
      queue: false,
      complete: function () {

          $(this).animate({opacity: 0}, function () {
          $(this).animate({
              top: 0,
              left: 0
          }, "1000", function () {
              // Animation complete.
              $(this).fadeIn("1000");
              loopSongTitle();
          });
      });

      }
  }, 'linear');
}


var playListItem = function() {
  var songTitleString = $("li:first-child").text();
  console.log(songTitleString);

  var songTitleHash = parseSongWithTitle(songTitleString);

  songString = songTitleHash["song"];
  titleString = songTitleHash["title"];
  console.log("titleString " + titleString + " songString " + songString);

  if (songString === "")
    return;

  notes = parseSong(songString);
  if (notes.length > 0)
  {
    console.log(notes);
    playSong(notes, bpm, onComplete);
  }
  $playButton = $('#play-button');
  $songTitle = $('#song-title');

  $playButton.text("Playing...");
  $playButton.attr('disabled', true);
  $songTitle.text(titleString);
  loopSongTitle();

  // slide the button up when we are playing
  $playButton.slideUp(1000);

};

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

  $('#play-button').text("Play");
  $('#play-button').attr('disabled', false);
  console.log("remove " + $("#song-queue").children().first().text())
  $("#song-queue").children().first().remove();

  // when there are no children in the list, we are dong playing
  if ($("#song-queue").children().length === 0){
    // show the button after the play is done
    $playButton.slideDown(1000);
    $songtitle = $('#song-title');
    $songTitle.text("Enter a song to play");
    // stop the animation
    $songTitle.stop();
    // resetting translate3d after animation stop
    $songTitle.css("transform","translate3d(0px, 0px, 0px)");

    return;
  }

  playListItem();

};

$(document).ready(function() {

  // Your code here...

  // handle form submit
  $("#song-form").on('submit', function(event){
    // prevent form submit
    event.preventDefault();
    $("#song-queue").append("<li>" + $("#id-song-name").val() + ":" + $("#id-notes").val() +"</li>");
    $("input[type='text']").val("")
  });

  // handle play button click
  $('#play-button').on('click', playListItem);

});
