// passes a function
var myFunction = function(anotherFunction) {
  console.log(anotherFunction(30));
}

// w3school js conventions, no ; for loop block, or
// function declaration, yes ; for function expression
var addFive = function(x) {
  return x + 5;
};

myFunction(addFive);

var multiplyByTen = function(x) {
  return x * 10;
}

myFunction(multiplyByTen);

// returns a function
var myFunction2 = function() {

  var myFunction3 = function(x) {
    return x * x;
  };

  return myFunction3;
};

// myFunction2 returns myFunction3
var myFunction4 = myFunction2();
console.log(myFunction4(20));


var doubleIt = function(x) {
  return 2 * x;
};

var call = function(n, f) {
  return f(n);
}

console.log(doubleIt(5));
console.log(call(5, doubleIt));


var call2 = function(n, f, x) {
  for (var i=0; i<x; i++)
  {
    // f(n) returns a value
    n = f(n);
  }
  return n;
}
// doubleIt 5, 3 times, 5*2*2*2 = 40
console.log(call2(5, doubleIt, 3));

// immplements map
var addOne = function (x) {
  return x + 1;
}

var map = function(myArray, myFunction) {
  for (var i = 0; i < myArray.length; i++)
  {
    myArray[i] = myFunction(myArray[i]);
  }
  return myArray;
};

console.log(map([1,2,3], addOne)); // [2, 3, 4]
//console.log(map([1,2,3], [addOne, multiplyByTen, substractSixteen])); // [2, 3, 4]

[1,2,3,4,5].forEach(function(x){
  console.log(x * x);
});

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
