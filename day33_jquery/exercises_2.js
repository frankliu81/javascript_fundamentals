// Exercise 1:
// 1. select all the links with any "href" attribute
$("[href]")

// 2. all links to http://www.facebook.com
$("[href='http://www.facebook.com']")

// 3. highlights the links to any ".com" URL by seting their class
$("[href*='.com']").addClass('highlight')

// 4. hide links that is not google
$("a[href!='http://www.google.com']").hide()

// Exercise 2:
// 1. select the first table row
$('tr:first-child')

// 2. select the last table row
$('tr:last-child')

// 3. remove the even number shapes from green-container
$('#green-container :even').remove();

// highlight the odd rows
$("tr:odd").addClass('highlight');

// 5. remove the last item for each container
$(".container .shape:last-child").hide();

// Exercise 3:
// 1. add the 'highlight' class to all links
$('a[href]').addClass('highlight');

// 2 remove the 'highlight' class
// <a class="">Link to Nowhere</a>
$('a[href]').removeClass('highlight');
$('a[href]').toggleClass('highlight');
$('a[href]').toggleClass('highlight');

// 4. add 'my-own-class' to the "body" element
$("body").addClass('my-own-class');

if ($("body").hasClass('my-own-class'))
  console.log("body hasClass my-own-class")

// 5 when any container is clicked, add "highlight" to all shapes within
$(".container").on("click", function() {
  $(this).find(".shape").addClass("highlight")
});

// Quan's solution using context
$(".container").on("click", function() {
  $(".shape", this).addClass("highlight")
});


// Exercises 4
// 1. Change the colour of all blue shapes to red, using oneline of code
$(".shape.blue").removeClass("blue").addClass("red")

// "shape.blue" - all element with both blue and shape
// ".shape .blue" - all element with blue class, that is a descendent of a shape class

// 2. Change all small red circles into large grey squares
$(".shape.red.small").removeClass("red").addClass("grey").removeClass("small").addClass("large").removeClass("circle").addClass("square")

$(".shape.red.small").removeClass("small red circle").addClass("large grey square")

$(".shape.red.small").toggleClass("small red circle large grey square")


// Exercises 5
// 1. Set the value of the text field to "Hello World"
$("#form-1 > input[type='text']").val("Hello World")

// 2. get val of text field
$("#form-1 > input[type='text']").val()

// 3. when the form's submit is clicked, change contents of "Form Message"
// to be text field's value
$("input[type='submit']").click(function(){
  //$("#form-message").text($("input[type='text']").val())
  $('form p').text($("input[type='text']").val());
  // you can select the radio, using :radio for form
});

// pseudo-selector
// $("input:text")
// Exercises 6

// 1. Append a "p" tag containing "Appended" to the "body" element
$("body").append("<p>Appended</p>")

// 2. Prepend a "p" tag containing "Prepended" to the "body" tag
$("body").prepend("<p>Prepended</p>")

// 3. Append a new list item to the list, containing a link to link Amazon.com
$("ul").append("<li><a href='http://www.amazon.com'>Amazon</a></li>")

// Fade out then in
$("#button-3").fadeOut(5000, function(){
  $(this).fadeIn(5000)
});

// you can incrementally change with css
$("#button-3").fadeOut(5000, function(){
  $(this).css("display", "inline").css("opacity", 0)
});

$('.shape').on('click', function() {
  console.log($(this).attr('class'))
  // 2. hide
  $(this).hide('slow');
});


// Exercises 7
// 1. Toggle the green container
$('#green-container').toggle();

// 2. Toggle again
$('#green-container').toggle();

// 3. Fade out
$('#green-container').fadeOut(1000);

// 4. Fade in
$('#green-container').fadeOut(1000);

// 5. Slide up
$('#green-container').slideUp(1000);

// 6. Slide down
$('#green-container').slideDown(1000);

// Exercise 8 - Key pressed
$(document).on('keypress', function(event) {
	var charCode = event.which;
	var key = String.fromCharCode(charCode);
	console.log('key ' + key + ' was pressed');
});


// 1. b toggle blue
$(document).on('keypress', function(event) {
	var charCode = event.which;
	var key = String.fromCharCode(charCode);
  if (key === 'b') {
    $(".shape.blue").toggle();
  }
});


// 1. b toggle blue, r toggle red, k toggle black
$(document).on('keypress', function(event) {
	var charCode = event.which;
	var key = String.fromCharCode(charCode);
  if (key === 'b') {
    $(".shape.blue").toggle();
  } else if (key === 'r')
  {
    $(".shape.red").toggle();
  } else if (key === 'k')
  {
    $(".shape.black").toggle();
  }
});


// Exercise 8 - Event Bubbling
// clicking on the black square within orange container
//
$(".black.square").on("click", function(event) {
  event.stopPropagation();
  console.log("Black Square Clicked");
});

$("#orange-container").on("click", function() {
  console.log("Orange Container Clicked");
});

// Exercise 9 - Preventing default action
// when a link is clicked, log to the console link clicked
$("a[href]").on("click", function(event){
  // prevent the default element from happening
  event.preventDefault();
  console.log("Link clicked");
});


// Exercise 10 - Delegated event
// $(".shape").on("click", function(){
//   console.log("Shape clicked")
// });

// event happens on .shape within .container
// .container must exist when the document loads
$(".container").on("click", '.shape', function(){
  console.log("Shape clicked")
});

// dynamically add a shape, newly added element doesn't have the event handler
$("#green-container").append("<div class='shape circle medium grey'></div>");

// Lab 1
// 1. When your mouse enters a shape, toggle the 'highlight' class
var toggleHighlight = function() {
  $(this).toggleClass('highlight')
};

$(".shape").on("mouseenter", toggleHighlight);

$(".shape").on("mouseleave", toggleHighlight);

// 2. Shrink ray, when any shape is clicked, hide small shape,
// medium to small, large to medium
$(".shape").on("click", function() {
  if ($(this).hasClass('small')){
    $(this).removeClass('small');
  } else if ($(this).hasClass('medium')) {
    $(this).removeClass('medium').addClass('small');
  } else if ($(this).hasClass('large')) {
    // $(this).is('large')
    $(this).removeClass('large').addClass('medium');
  }
});


// Lab 2
//1. Prepend a row to the table with the columns "0" and "-"
$("tbody").prepend("<tr><td>0</td><td>-</td></tr>")

//2. When the form's submit button is clicked, append the text input's current value to the form message.
//
// $("#form-1 input[type='submit']").on('click', function(){
//   $("#form-message").html($("input[type='text']").val());
// });
//

$("#form-1").on('submit', function(){
  $("#form-message").html($("input[type='text']").val());
});

//3. When "Button 1" is clicked, toggle the green container.
$("#button-1").on('click', function(){
  $("#green-container").toggle()
});
//4. When "Button 2" is clicked, fade the "Button Message" out
$("#button-2").on('click', function(){
  $("#button-message").fadeOut(2000)
});
//5. When "Button 3" is clicked, fade the "Button Message" back in.
$("#button-3").on('click', function(){
  $("#button-message").fadeIn(2000)
});

//6. When "Button 4" is clicked, slide the green container up.
$("#button-4").on('click', function(){
  $("#green-container").slideUp(2000)
});


// Lab 3
//1. When the 'g' key is pressed, toggle all (g)ray shapes.
var charRemainCount = 14;
$(document).on('keyup', function(event){

  var charCode = event.which;
  var key = String.fromCharCode(charCode);
  if (key === 'g')
  {
    $(".grey.shape").toggle();
  } else if (key === ' ') {
    $("#green-container").append("<div class='shape blue small circle'></div>");
  }
  //console.log(event.target);
  var $focused = $(':focus');
  console.log($focused);
  console.log(charCode);
  if ($focused.is("input[type='text']"))
  {
    // delete
    // only can get the delete charCode on keyup
    if (charCode === 8)
    {
      if (charRemainCount < 14)
        charRemainCount++;
    }
    else {
      if (charRemainCount > 0)
        charRemainCount--;
      else if (charRemainCount === 0)
        // incomplete this only works on keypress
        event.preventDefault()
    }

    $("#form-message").html(charRemainCount + " characters remaining");
  }

});


$('input:text').attr("maxlength", 14);
$('input').on('keyup', function() {
    // helps to stop the blue circles from showing up
    event.preventDefault();
    $("#form-message").text(14 - $("input:text").val().length + " characters remaining");
});

//2. When the spacebar key is pressed, append a small blue circle to the green container.


//3. Make the "Form Message" show the number of characters remaining (14 characters maximum) as you type in the text input. (e.g. "3 characters remaining").


// Lab 4 - Shape destroyer for each color
$("#form-1").on('submit', function(){

  var arr = ["red", "blue", "grey", "black"];
  var colorText = $("input[type='text']").val().toLowerCase();
  var index = arr.indexOf(colorText);
  // the color is not found when index === -1
  if (index === -1)
  {
    alert("Invalid color")
  }
  else
  {
    for (var i=0; i<arr.length; i++)
    {
      if (colorText === arr[i])
        $("." + arr[i]).remove();
    }
  }
  // clear the input
  $("input[type='text']").val("");

});


// Jacob's
$('form').on('submit', function(){
  var colour = $('input:text').val();
  var validColours = ['red', 'blue', 'black', 'grey'];

  if (!validColours.includes(colour)) {
    alert("invalid colour!");
  } else {
    $("." + colour).remove();
  }
  $('input:text').val('');
});

// Lab 5:
//- When the form is submitted, clear the text in the input field.
//- As you type in the text input, change the "Form Message" to be the same as what you type.
//- As you type in the text input, change the "Form Message" to be the REVERSE of what you type.
//- Set a delegated click handler on the orange container so that red shapes are removed when you click them



$("#form-1").on('submit', function(){
  // clear the input
  $("input[type='text']").val("");
});

// show message as you type
$('input').on('keyup', function() {
    $("#form-message").text($("input:text").val());
});

// show the message reverse
String.prototype.reverse=function(){return this.split("").reverse().join("");}
$('input').on('keyup', function() {
    $("#form-message").text($("input:text").val().reverse());
});

// jane's show message in reverse, doesn't handle backspace
$("#form-message").text("");

$("input:text").on("keyup", function() {
 var input = $("input:text").val();

 $(this).attr("fill", input);

 $("#form-message").prepend(input.slice(-1));
});

// EVENTS
$('form').on('submit', funtion(){
  console.log('form submitted');
});

// set a delegated click handler on the orange container so that red shapes are removed when you click them
$("#orange-container").on("click", '.red.shape', function(){
  $(this).remove();
});

// dynamically add a shape, newly added element doesn't have the event handler
$("#orange-container").append("<div class='shape circle medium red'></div>");
