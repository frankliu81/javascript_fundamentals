console.log("Hello Cohort12")

// setTimeout(function, milliseconds);
setTimeout(function()
{
  console.log("Goodbye Cohort12");
}, 1000);
console.log("Where are we?");

// one second separation between messages

// var messages = ["Ready ...", "Set ...", "Go!"];
// var index = 0
// var len = messages.length
//
// var counter = 0;
// var counterTimer = 1000;
//
// var myTimeoutFunction = function()  {
//   // logic inside function gets sent to the event loop
//   console.log(messages[counter]);
//   counter++;
// }
//
// for (var i=0; i<messages.length; i++)
// {
//
//   setTimeout(myTimeoutFunction, 1000 * i); /* since this is outside our function, we can access i */
// }

// Q. difference between
//return myFunction3;
//return new myFunction3();

// set interval will repeat until it clear it
// we get a handle from the setInterval through return value
var counter = 0;
var intervalId = setInterval(function() {
  console.log("Hello!");
  counter++;
  if (counter > 10)
    clearInterval(intervalId);
}, 1000);

var intervalId2 = setInterval(function() {
  console.log("GoodBye!");
  if (counter >= 5)
    clearInterval(intervalId2);
}, 3500);
