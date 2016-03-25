// slide 24
// 1. sum array
var array = [0, 5, 6, -12];

var sum = 0;

for (var i = 0; i < array.length; i++)
{
  sum += i
}
console.log("sum is " + sum)

// 2. create an array containing the words
var array_words = ["apple", "dog", "computer", "cup"]

for (var i=0; i < array_words.length; i++)
{
  console.log(array_words[i] + " has " + array_words[i].length + " character.")
}
