// you must explicitly use return, or you will get undefined
// var doubleIt = function(number){
//   return number * 2;
// };
//
// console.log(doubleIt(5));

// slide 31
// 1. write a funciton insult, that log insult to the console

var insult = function(name) {
  alert("The Rock says it doesn't matter what your name is " + name + "!");
}

var name = prompt("What is your name?");
insult(name);

// 2. write a function increment

var increment = function(number){
  return number+1;
};


console.log("myNumber before increment: " + myNumber)
var myNumber = increment(3);
console.log("myNumber after increment: " + myNumber)

// 3. write a function doubleArray that accepts an array of numbers
// and returns a array of those numbers doubled
var doubleArray = function(array){
  for (var i=0; i<array.length; i++)
  {
    array[i] *= 2;
  }

  return array
};

var myArray = [1,2,3,4];
console.log("Before doubling: " + myArray);
doubleArray(myArray);
console.log("After doubling: " + myArray);

// 4. pass by reference test
var myArray = [1,2,3];

var myFunct = function(x){
  // make a copy of newArray so we don't change x
  var newArray = x.slice(0);
  x.push(4);
}

// if the parameter is mutable, it will get mutated in the function
// javascript passes by reference
myFunc(myArray);
