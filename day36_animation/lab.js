// Lab 1
// slide 30
// 1. make "item-1" slide up over 1 second
$("#list-item-1").slideUp(1000);

// 2. make "item-2" fade out slowly using the 'slow' parameter.
$("#list-item-2").fadeOut('slow');

// 3. Toggle "item-3" quickly, using the 'fast'parameter
$('#list-item-3').toggle('fast');

// slide 31
// 1 Fade out item 1 over 5 sec
$("#list-item-1").fadeOut(5000);
$("#list-item-2").fadeOut(5000);
// fadeOut run at the same time

// slide 32 - sequential animation
var fadeOutItem3 = function() {
  $("#list-item-3").fadeOut(1000);
};

var fadeOutItem2 = function() {
  $("#list-item-2").fadeOut(1000, fadeOutItem3);
};

$("#list-item-1").fadeOut(1000, fadeOutItem2);

// Exercise slide 42:
// tweening - between, keyframe start, keyframe end, fill in the sequence
// 1. When "Button 1" is clicked, animate the rocket ship to double its size
// when clicked again, return it to its previous size
$("#button-1").on('click', function(){
  $("#rocket").animate({width: 2 * parseInt($("#rocket").css('width')), height: 2 * parseInt($("#rocket").css('height'))});
});

$("#button-1").on('click', function(){
  $("#rocket").animate({width: 300, height: 300});
});

// Lucas
$("#button-1").on('click', function(){
  $("#rocket").toggleClass("enlarge")
});


// 2. when "button 2" is clicked, animate the rocket ship to slide to the right
// 100 px, and back when clicked again

var bLeft = true;
$("#button-2").on('click', function(){
  if (bLeft === true)
    $("#rocket").animate({left: 100});
  else
    $("#rocket").animate({left: 0});

  bLeft = !bLeft;
  console.log(bLeft)
});

// 3. When the rocket ship is clicked, animate it to fade out using CSS transitions)

// in CSS
// #rocket {
//   position: absolute;
//   left: 0;
//   bottom: 0;
//   width: 50px;
//   transition: width 2s, opacity 2s;
// }
//
// #rocket:active {
//   opacity: 0.
// }
