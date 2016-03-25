// Largest Number in Array
var myArray = [1234, 23, 2, 1123, 3, 23423, 39];

var largestNumber = function(array) {
  var largestNumber;

  if (array[0] !== undefined)
  {
   largestNumber = array[0];
  }

  // save time on calling array.length by only
  // calling it once in intialization
  for (var i=0, len=array.length; i<len; i++)
  {
    if (array[i] > largestNumber)
    {
      largestNumber = array[i]
    }
  }

  return largestNumber
};

console.log(largestNumber(myArray));
console.log(largestNumber(6))
//Math.max
