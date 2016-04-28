$(document).on('ready', function() {
  // Uncomment the following code and run the index.html, or copy and paste to the web console

  // // Select all shapes
  // $(".shape");
  // // Select all black shapes
  // $(".black.shape");
  // // Count the number of shapes
  // $("");
  // // Count the number of black shapes
  // $("");
  // // Count the number of black or blue shapes
  // $(".shape.black, .shape.blue").length;
  // // Select all h1 tags
  // $("");
  // // Select all small circles
  // $("");

  // // Select all red shapes in the orange-container
  // $("#orange-container .shape.red");
  // // Select all medium or small shapes inside the green-container
  // $("#green-container .medium, #green-container .small");
  // // Select all shapes inside any container
  // $(".container .shape");
  // // Select all link tags
  // $("li");
  // // Select all link tags inside an "li" tag
  // $("");
  // // Count the number of small blue circles
  // $(".small.circle.blue").length;

  // // Get the 'href' attribute of the first link on the page
  // $("a").eq(0).attr("href");
  // // Set the 'href' attribute of all links on the page to "http://www.codecore.ca". Try clicking one
  // $("a").attr("href", "http://www.codecore.ca");
  // // Set the "class" attribute of all links to "highlight"
  // $("a").attr("class", "highlight");
  // // Set the "class" attributes of all shapes to "highlight". What happened?
  // $(".shape").attr("class", "highlight");

  // ************** MANIPULATORS **************
  // // Remove all blue shapes
  // $(".shape.blue").remove();
  // // Remove all shapes in the orange-container
  // $("#orange-container .shape").remove();
  // // Remove all small red circles
  // $(".small.red.circle").remove();
  // // Get the HTML contents of the reset button
  // $("#reset").html();
  // // Try to get the HTML contents of all links. What happened? (only first one is returned)
  // $("a").html();
  // // Change the reset button to read "Launch Missles!"
  // $("#reset").html("Launch Missles!");
  // // Change all the H1 tags to read "[Your name] is cool!"
  // $("h1").html("Mark is cool!");

  // ************** TRAVERSALS **************
  // // Select all the shapes in the purple-container using "children"
  // $("#purple-container").children();
  // // Select the green-container using "parent"
  // $(".medium.red.diamond.shape").parent();
  // $(".shape").parent("#green-container"); <-- Alternate solution
  // // Select all the "li" tags that contain a link
  // $("li").children('a'); // Contains a link to nowhere

  // ************** EFFECTS **************
  // // Hide the purple-container
  // $('#purple-container').hide();
  // // Show the purple-container again
  // $('#purple-container').show();
  // // Hide all the links
  // $('a').hide();
  // // Show all the links again
  // $('a').show();

  // ************** EVENTS **************
  // // When any shape is clicked, log "Shape clicked" to the console
  // $(".shape").on('click', function(){console.log("Shape Clicked!");});
  // // When your mouse enters any blue circle, log "Blue Circle: Go Away!" to the console
  // $(".blue.circle").on('mouseenter', function(){console.log("Blue Circle: Go Away!");});
  // // When your mouse leaves a blue circle, log "Blue Circle: Goodbye!" to the console
  // $(".blue.circle").on('mouseleave', function(){console.log("Blue Circle: Goodbye!");});
  // // When your mouse enters any "tr", set its class to "highlight"
  // $("tr").on('mouseenter', function(){$(this).attr("class", "highlight");});
  // // When your mouse leaves any "tr", set its class to ""
  // $("tr").on('mouseleave', function(){$(this).attr("class", "");});

  // // When 'button 1' is clicked, remove all shapes.
  // $("#button-1").on('click', function(){$(".shape").remove();});
  // // When 'button 2' is clicked, disable button 2 (set the 'disabled' attribute to true)
  // $("#button-2").on('click', function(){$(this).attr("disabled", true);});
  // // When 'button 3' is clicked, set the button message to "Button 3 was clicked"
  // $("#button-3").on('click', function(){$("#button-3").html("Button 3 was clicked");});
  // $("#button-3").on('click', function(){$("#button-message").html("Button 3 was clicked");});

  // // When any shape is clicked, log the value of its "class" attribute to the console
  // $(".shape").on('click', function(){console.log($(this).attr("class"));});
  // // When any shape is clicked, hide it
  // $(".shape").on('click', function(){$(this).hide();});
  // // When any shape is clicked, remove its container
  // $(".shape").on('click', function(){$(this).parent().remove();});
  // // When any container is clicked, remove all the shapes inside
  // $(".container").on('click', function(){$(this).children().remove();});

  // // When your mouse enters any link, log the value of its "href" attribute to the console.
  // // "Your mouse entered a link to: [href]"
  // $("a").on('mouseenter', function(){console.log("Your mouse entered a link to: " + $(this).attr("href"));});
  // // When any button is clicked, set the button message to "Button [button id] was clicked"
  // $(".button").on('click', function(){$(this).html($(this).attr("id") + " was clicked");});

  // ************** ATTRIBUTE SELECTORS **************
  // // Select all the links with any "href" attribute
  // $('a[href]');
  // // Select all the links to "http://www.facebook.com"
  // $('a[href*="facebook"]');
  // // Highlight all the links to any ".com" URL by setting their class to "highlight"
  // $('a[href*=".com"]').attr("class", "highlight");
  // // Hide all the links NOT to "http://www.google.com"
  // $('a[href!="http://www.google.com"]').hide();

  // ************** PSEUDO SELECTORS **************
  // // Select the first table row
  // // We're looking for the "tr" that is a first-child (no space, "tr:first-child", not "tr :first-child")
  // $('tr:first-child'); // or $("tbody >  :first-child").
  // // Select the last table row
  // $('tr:last-child'); // We're looking for the "tr" that is the last-child (no space)
  // // Remove the even-numbered shapes from the green-container
  // // We want the shapes WITHIN the green-container that are even (include a space)
  // // by even, we mean the ones that show up even (2nd shape, 4th shape, etc), not indexed as even (i[0], i[2], etc)
  // $('#green-container .shape:odd').remove();
  // // Highlight the odd rows on the table
  // $('table :odd').attr("class", "highlight");
  // // Hide the last shape in every container
  // $('.container :last-child').hide();

  // ************** ATTRIBUTES **************
  // // Add the "highlight" class to all links
  // $('a').addClass("highlight");
  // // Remove the 'highlight' class from all links
  // $('a').removeClass("highlight");
  // // Toggle the "highlight" class on all links. Toggle again.
  // $('a').toggleClass("highlight");
  // // Add the "my-own-class" class to the "body" element. Then vertify it is there using "hasClass"
  // $('body').addClass("my-own-class");
  // $('body').hasClass("my-own-class");
  // // When any container is clicked, add the "hightlight" class to all the shapes in that container.
  // $('.container').on('click', function(){
  //   $(this).children('.shape').addClass("highlight");
  // });
  // When your mouse enters a shape, toggle the "highlight" class
  // $('.shape').on('mouseenter', function(){
  //   $(this).toggleClass("highlight");
  // });
  // Shrink Ray: When any shape is clicked, do the following:
  //    if the shape has the "small" class, hide it
  //    if it has the "medium" class, remove the "medium" class and add the "small" class
  //    if it has the "large" class, remove the "large" class and add the "medium" class
  // $('.shape').on('click', function(){
  //   if ($(this).hasClass("small")) {
  //     $(this).hide();
  //   }
  //   if ($(this).hasClass("medium")) {
  //     $(this).removeClass("medium").addClass("small");
  //   }
  //   if ($(this).hasClass("large")) {
  //     $(this).removeClass("large").addClass("medium");
  //   }
  // });

  // ************** VAL **************
  // // Set the value of the text field in the form to "Hello World"
  // $('#form-1 [type="text"]').val("Hello World");
  // // Get the value of the text field in the form
  // $('#form-1 [type="text"]').val();
  // When the form's "Submit" button is clicked, change the contents of
  // "Form Message" to be the text field's value
  // $('#form-1 [type="submit"]').on('click', function(){
  //   $('#form-message').html($('#form-1 [type="text"]').val());
  // });

  // ************** MANIPULATION (APPEND AND PREPEND) **************
  // // Append a "p" tag containing "Appended" to the "body" element
  // $("body").append("<p> Appended </p>");
  // // Prepend a "p" tag containing "Prepended" to the "body" tag
  // $("body").prepend("<p> Prepended </p>");
  // // Append a new list item to the List, containing a link to link Amazon.com
  // $("ul").append('<li><a href="http://www.amazon.com"> AMAZON </a></li>');
  // // Prepend a row to the table with the columns "0" and "-"
  // $("table").prepend('<tr><td>0</td><td>-</td></tr>');
  // // When the form's submit button is clicked, append the text
  // $('#form-1 [type="submit"]').on('click', function(){
  //   $('#form-message').append($('#form-1 [type="text"]').val());
  // });

  // ************** TRAVERSALS (FIND, NEXT, PREV) **************
  // // Select all the red shapes in the orange-container, using "find"
  // $("#orange-container").find(".shape.red");
  // // Remove all the shapes just before a small red circle
  // $(".red.circle").prev().remove(".shape");
  // // Hide all shapes just after any grey shape
  // $(".grey.shape").next().hide(".shape");
  // // Make all the circles in the green-container black, using "find"
  // $("#green-container").find(".shape.circle").removeClass("red blue").addClass("black");

  // ************** EFFECTS (TOGGLE, FADEOUT, FADEIN, SLIDEUP, SLIDEDOWN) **************
  // // Toggle the green-container
  // $('#green-container').toggle();
  // // Toggle the green-container again
  // $('#green-container').toggle();
  // // Fade the green-container out
  // $('#green-container').fadeOut(1000);
  // // Fade the green-container in
  // $('#green-container').fadeIn(1000);
  // // Slide the green-container up
  // $('#green-container').slideUp(1000);
  // // Slide the green-container down
  // $('#green-container').slideDown(1000);

  // // When button-1 is clicked, toggle green-container
  // $('#button-1').on('click', function(){$('#green-container').toggle();});
  // // When button-2 is clicked, fade the "button message" out
  // $('#button-2').on('click', function(){$('#button-message').fadeOut(1000);});
  // // When button-3 is clicked, fade the "button message" in
  // $('#button-3').on('click', function(){$('#button-message').fadeIn(1000);});
  // // When button-4 is clicked, slide the green-container up.
  // $('#button-4').on('click', function(){$('#green-container').slideUp(1000);});

  // When the 'b' key is pressed, toggle all the (b)lue shapes
  // When the 'r' key is pressed, toggle all the (r)ed shapes
  // When the 'k' key is pressed, toggle all the blac(k) shapes
  // When the 'g' key is pressed, toggle all the (g)rey shapes
  // When the spacebar key is pressed, append a small blue circle to the green-container.
  /*
  $(document).on('keypress', function(event){
    var charcode = event.which;
    var key = String.fromCharCode(charcode);
    if (key === 'b') {
      $('.blue.shape').toggle();
    }
    else if (key === 'r') {
      $('.red.shape').toggle();
    }
    else if (key === 'k') {
      $('.black.shape').toggle();
    }
    else if (key === 'g') {
      $('.grey.shape').toggle();
    }
    else if (key === ' ') {
      $('#green-container').append('<div class="small blue circle shape"></div>');
    }
  });
  */

  // As you type in the text input, change the "Form Message" to be the same as what you type
  /*
  $('#form-1 [type="text"]').on('keyup', function(){
    $('#form-message').html($(this).val());
  });
  */
  // As you type in the text input, change the "Form Message" to be the REVERSE of what you type.
  /*
  $('#form-1 [type="text"]').on('keyup', function(){
    var value = $(this).val().split("").reverse().join("");
    $('#form-message').html(value);
  });
  */
  // Make the Form Message show the number of characters remaining (14 char max)
  // as you type in the text input (e.g. "3 characters remaining")
  /*
  $('#form-1 [type="text"]').on('keyup', function(){
    var value = 14 - $(this).val().split("").length;
    $('#form-message').html(value + " characters remaining");
  });
  */

  // ************** SUBMIT EVENT **************
  // When the form is submitted, clear the text in the input field
  /*
  $('form').on('submit', function(){
    $('input:text').val("");
  });
  */
  // Shape Destroyer: The user can enter a colour into the input field. When they click "submit":
  //    All shapes matching the give colour should be removed
  //    If they enter an invalid colour, show them an alert message telling them this
  //    Clear the input field
  /*
  $('form').on('submit', function(){
    var colour = $("input:text").val();
    var validColours = ["red", "blue", "grey", "black"];
    if(!validColours.includes(colour)) {
      alert("invalid colour");
    }
    else {
      $("." + colour).remove();
    }
    $("input:text").val('');
  });
  */

  // ************** EVENT BUBBLING **************


});
