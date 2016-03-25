// var sentence = "Hello CodeCore Students";
// // gives you ["Hello CodeCore Students"]
// // and sentence hasn't changed, strings are immutable
// console.log("Turn sentence into array: ")
// console.log(sentence.split());
// console.log("Turn stentence into array of words: ")
// console.log(sentence.split(" "));
// console.log("Turn stentence into array of letters: ")
// console.log(sentence.split(""));
// console.log("");
//
// // default join by comma
// console.log("Join by comma (default): " + ["h", "e", "l", "l", "o"].join())
// console.log("Join by empty string: " + ["h", "e", "l", "l", "o"].join(""))

// slide 26
// 1. create a string "hello" then use split to make an array of its characters
var helloString = "hello";
var helloArray = helloString.split("");
console.log("hello split into characters: " + helloArray);

// 2. how many words in a sentence
var sentence = prompt("Please enter a sentence: ");
var wordsArray = sentence.split(" ");
var wordsCount = wordsArray.length;
alert("Word count of sentence: " + wordsCount);

// 3. Make a string containing all the numbers from 0-99
var numberArray = []
for (var i=0; i <= 99; i++)
{
  numberArray.push(i)
}
numberString = numberArray.join("")
console.log("numberString from 0 to 99: " + numberString);
