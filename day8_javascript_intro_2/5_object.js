// myObject = {
//   a: 5,
//   b: 6,
//   c: 7
// };
//
// console.log(myObject.a);
// myObject.d = 8
// console.log(myObject);


// Slide 37
// 1. Create an object me containing your name, age, and occupation
me = {
  name: "Frank Liu",
  age: 34,
  occupation: "C++ programmer"
}

// 2. Change your occupation
me.occupation = "javascript expert";

// 3. Add a "skills" property containing the array
me.skills = ['ruby', 'rails', 'javascript'];
console.log(me)

// Slide 43
// Write a function that takes a string and returns and object containing
// count of each character
var countChar = function(string) {
  var obj = {}
  // you can access string like an array
  //charArray = string.split("")
  for (var i=0; i<string.length; i++){
    //if (obj[string[i]] === undefined)
    if (!obj[string[i]])
    {
      // console.log("first time seeing " + string[i]);
      obj[string[i]] = 1;
    }
    else
    {
      // console.log("subsequent time seeing " + string[i]);
      obj[string[i]] += 1;
    }
  }
  return obj
}

console.log(countChar("hello"));

// Slide 44
// 1. function that takes a user object with 'name' and 'age' properties,
// and logs the string "[name] is [age] years old."
var logInfo = function(infoObject) {
  console.log(infoObject.name + " is " + infoObject.age + " years old.")
}

logInfo({name: "Frank", age: 34})

// 2. write a function that takes a sentence, and returns an object of all
// the words and their lengths
var wordLengths = function(sentence) {
  var obj = {}
  var words = sentence.split(" ");
  for (var i=0; i<words.length; i++)
  {
      obj[words[i]] = words[i].length;
  }
  return obj;
}
console.log(wordLengths("Hello world"));


// Slide 48
// 1. console is an object, figure out what properties it has

var listProps = function(obj){
  for (var key in obj)
  {
    console.log("key " + key + ", value " + obj[key]);
  }
}

listProps(console);

// 2. write a function clone, which takes an object and returns
// a clone of it

// stretch: make it deep clone and recursive
var clone = function(obj){
  // i made the mistake of making newObject an array
  var newObject = {};
  for (var key in obj)
  {
    if (typeof(obj[key]) === "object")
    {
      newObject[key] = clone(obj[key]);
    }
    else
    {
      newObject[key] = obj[key];
    }
  }
  return newObject;
}

// clone and modifications
var me = { name: "Frank", age: 34, occupation: "Programmer"};
var myClone = clone(me);
myClone.name = "Franky";
console.log(me);
console.log(myClone);

// deep clone
var deepMe = { name: "Frank", age: 34, posessions: {car: "Mazda", shoes: "Nike"}};
var myDeepMeClone = clone(deepMe);
console.log(deepMe);
console.log(myDeepMeClone);

// // testing clone change
// original = {a: 1, b:2}
// var copy = clone(original)
// copy.a = "A"
// original.a
// //< 1
// copy.a
// //<"A"
