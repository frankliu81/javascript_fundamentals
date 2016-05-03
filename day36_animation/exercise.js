//Exercises
// 1. Get the border-width of the first item on the page
// Setting with attr on style will override other existing styles
$('#list-item-1').attr('style', 'border-width:10px;');

$('#list-item-1').css('border-width')

// If you want to do multiple styles, you can use curly braces
$('#list-item-1').css({"border-width": "50px",
"border-color": "blue",
"border-style": "solid"});

// 2. Change the boder color of all the list items to red
$('#list-1 li').css('border-color', 'red')

// 3. write a script when you click a list item, its border-width is set to 10px.
$('#list-1 li').on('click', function(){
  $(this).css('border-width', '10px')
});

// 4. [stretch] wirte a a script so that when you click the rocket ship, it moves 10 px to the right
$('#rocket').on('click', function(){
  //var left = parseInt($(this).css('left'));
  //left += 10;
  //console.log(left);
  //$(this).css('left', left + "px");
  $(this).css('left', "+=10");
});


// Exercise 2
// 1. Make sure rocket ship is using absolute positioning
// 2. figure out what position is relative to
// 3. change the page's css so that the rocket is positioned 500px from top and left
$("#rocket").css({"top":"500px", "left":"500px"});

//4. [Stretch] look at over API
// Write a script so that the rocket ship appears whenever you click on the page.
$(document).on('click', function(event){
  x = event.clientX;
  y = event.clientY;
  $("#rocket").css('left', x);
  $("#rocket").css('top', y);
});

// Exercises 3
// 1. Create a "big" CSS class that sets the rocket ship's width to 100px
$("#rocket").addClass("big");
$("#rocket").removeClass("big");

$('#list-item-1').on('click', function(){
    $(this).toggleClass('red-border');
});




// Exercise 4 - rocket acceleration
//  Use interval method for take offset
// when button 1 click, start interval
// count down timer
// Exercise 4 - rocket acceleration
var speed = 1;
var intervalId1;
$('#button-1').on('click', function(){
  // 30 frames per second
    intervalId1 = setInterval(function(){
    //var oldY = parseInt(ball.css('bottom'));
    //var newY = oldY + speed;
    speed += 0.5;
    $("#rocket").css('bottom', "+=" + speed);
    console.log("bottom1 " + $("#rocket").css('bottom'));

  }, 1000/30);

});

$('#button-2').on('click', function(){
    clearInterval(intervalId1);
    // 30 frames per second
    var intervalId2 = setInterval(function(){

    if (speed >= 0.5)
    {
      speed -= 0.5;
    }

    console.log("speed " + speed);

    $("#rocket").css('bottom', "-=" + speed);
    console.log("bottom2 " + parseInt($("#rocket").css('bottom')));

    if (parseInt($("#rocket").css('bottom')) <= 0)
    {
      console.log("clearinteral on 2");
      clearInterval(intervalId2);
    }
  }, 1000/30);

});
