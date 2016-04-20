var squareNumber = function(x) {
  return x * x;
}

var addOne = function(x) {
  return x + 1;
}

var map = function (array, func) {
  //var arr = [];
  for (var i=0, len = array.length; i < len; i++)
  {
    //arr.push(func(array[i]));
    array[i] = func(array[i])
  }
  //return arr;
  return array
}

var map2 = function (array, array_func) {
  for (var i=0, len = array.length; i < len; i++)
  {
    for (var j=0; j < array_func.length; j++)
    {
      array[i] = array_func[j](array[i]);
    }
  }
  return array
}

// from Jane
var map3 = function(array, function_array) {
  var modified_array = [];

  array.forEach ( function(x) {
    function_array.forEach ( function(f) {
      x = f(x);
    });

    modified_array.push(x);
  });

  return modified_array;
};

var countChars = function(str) {
  return str.length;
}

data = ['hello', 'data', 'eat cheese', 'walking']

console.log(map([1, 2, 3], squareNumber)); // [1, 4, 9]
console.log(map2([1, 2, 3], [squareNumber, addOne])); // [1, 4, 9]
console.log(map(data, countChars));
