// benchmarking
console.time("forLoop");
var array = [0,1,2,3,4];
// for (var i=0, len = array.length; i < len; i++)

for (var i=0, len = 1000; i < len; i++)
{
  var a = 3.0;
  var b = 5.0;
  var c = a/b;
}
console.timeEnd("forLoop")

console.time("whileLoop");
var i = 0;
while (i < 1000)
{
  var a = 3.0;
  var b = 5.0;
  var c = a/b;
  i++;
}
console.timeEnd("whileLoop")

console.time("whileLoopDecrement");
var i = 1000;
while (i > 0)
{
  var a = 3.0;
  var b = 5.0;
  var c = a/b;
  i--;
}
console.timeEnd("whileLoopDecrement")


console.time("++");
var counter = 0;
for (var i = 0; i<10000000; i++) {
  counter ++;
}
console.timeEnd("++");

console.time("--");
var counter = 0;
for (var i = 0; i<10000000; i++) {
  counter --;
}
console.timeEnd("--");


console.time("compare to zero");
var counter = 0;
for (var i = 1000000; i>0; i--) {
  counter ++;
}
console.timeEnd("compare to zero");

console.time("compare to 1000000");
var counter = 0;
for (var i = 2000000; i>1000000; i--) {
  counter ++;
}
console.timeEnd("compare to 1000000");

// parse time function
function zero(number) {
  return 0;
}

// run time function, anonymouse function
// preferred
var zero2 = function (number) {
  return 0;
}
console.log("zero(3): " + zero(3));
console.log("zero2(3): " + zero2(3));

// why doesn't this throw exception
function zero(number) {
  return 0;
}

if (true) {
  var myFunction = zero;
  myFunction();
}

// 2. write a funciton that takes a user object with 'name'
// and 'age' properties, and logs the string "[name] is [age] years old"

var printUser = function(user) {
  console.log(user.name + " is " + user.age + " years old");
}
printUser({name : "Frank", age : 34});

// 3 word length
var wordLengths = function(sentence) {
  var words = sentence.replace(",", "").split(" ");
  var myObject = {};

  for (var i=0; i<words.length; i++) {
    console.log(words[i]);
    //word = words[i].replace( /,/g, "" );
    myObject[words[i].trim()] = words[i].length;
  }
  return myObject;
}

console.log(wordLengths("This is the way, step inside."));
