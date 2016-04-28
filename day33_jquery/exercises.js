//Exercise 1

//1. select all shapes
$('.shape')
//2. select all black shapes
$('.shape.black')
//3. count the number of shapes
$('.shape').length
//4. count the number of blakc shapes
$('.shape.black').length
//5. count the number of black shapres AND blue shapes
$('.shape.black, .shape.blue').length
//6. select all h1 tags
$('h1')
//7. select all small circles
$('.small.circle')
$('.circle.small')

// Exercise 2

// 1. select red class within orange container:
$('#orange-container').find(".red")


// 2. select green container contain small, and orange container contain medium
$('#green-container .shape.small, #green-container .shape.medium');

$('#green-container').find(".medium, .small"); // similar to where statement in SQL


//In-class
Last child of my body, last element:

$('body :last-child'); // this sin't what we waned, it gets everything in the body

$('body > :last-child'); // > is a CSS selector, go into something
// what's colon in CSS, pseudo classes, before, after, last-child, predefined


// Exercise 3
// 1. get the href attribute of first link on the page
$('a').attr('href')  // http://www.google.com
// $('a') returns all the links


// 2. set the href attribute of all links to http://www.codecore.ca
// set attributes for all to codecore
$('a[href]').attr('href', "www.codecore.ca")

// replace class
$('.shape').attr('class', 'highlight');

// add class to highlight
$('.shape').addClass('highlight');

// Exercises 4

//	1. Remove all blue shapes
$('.shape.blue').remove();

//	2. remove all shapes in the orange container
//$('#orange-container > .shape').remove();
// removes all the elements themselves
$('#orange-container').children().remove();


//	3. remove all small red circles
$('.small.red.circle').remove();

// 4. get the html of reset
$('#reset').html();

// 5. grab all the h1's
$('h1').html("Frank");

// Exercise 5
// 1. Select all the shapes in the purpple container using children
$('#purple-container').children()

// 2. Select the green container using parent
$('.medium.red.diamond').parent();

// 3. Select all the li that contains a link (with href)
$('li').find('a[href]');

// afternoon

$('button').on('click', clickHandler);

// you can re-use this event for other function
var bool = false;
bool = !bool;

// TODO: Exercise 6: slide 58
// 1 when any shape is clicked, log "shape clicked"

var clickHandler = function() {
  console.log("shape clicked");
};

$('.shape').on('click', clickHandler);


// 2 when mouse enters any blue circle, log "Blue Circle: Go away!"

var enterHandler = function() {
  console.log("Blue Circle: Go away!");
};

$('.blue.circle').on('mouseenter', enterHandler);


// 3 when mouse enters any blue circle, log "Blue Circle: Go away!"

var leaveHandler = function() {
  console.log("Blue Circle: Goodbe!");
};

$('.blue.circle').on('mouseleave', leaveHandler);


// 4. When you mouse leaves a tr, set the class to none
$('tr').on('mouseenter', function() {
    $('tr').addClass('highlight')
});

// 5. When you mouse leaves a tr, set the class to none
$('tr').on('mouseleave', function() {
    $('tr').removeClass('highlight')
});

// Exercise 2/2

// 1. When 'button 1' is clocked, remove all shapes
$('#button-1').on('click', function() {
    $('.shape').remove();
});
// 2. set disabled attribute for button 2 to true when clicked

$('#button-2').on('click', function() {
    $('#button-2').attr('disabled', true);
});

// 3. button 3 clicked, set the button message to "Button 3 is clicked"

$('#button-3').on('click', function() {
  $(this).html("Button 3 was clicked");
});


$('tr').on('mouseenter', function() {
    $(this).attr('class', 'highlight');
});

// Exercise 7
// 1. when any shape is clicked, log the value of its "class" attribute to console
$('.shape').on('click', function() {
  console.log($(this).attr('class'))
  // 2. hide
  $(this).hide();
});

// 3. when any shape is clicked, remove its container
$('.shape').on('click', function() {
  $(this).parent().remove();
});

//4. when any container is clicked, remove all the shapes inside it
$('.container').on('click', function() {
  $(this).children().remove();
});

$('#green-container').animate(
  {height: '1000px'},
  {duration: 2000, queue: false}
);

$(document).on('keypress', function(event) {
  var charCode = event.which;
  var key = String.fromCharCode(charCode);
  if (key === "w") {
    $('.shape.blue').offset({ top: 10});
  }
});
