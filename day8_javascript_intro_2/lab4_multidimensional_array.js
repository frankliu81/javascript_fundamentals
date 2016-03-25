// Write a function called printMulti that takes an array of arrays,
//and prints every element to the console.


//multidimensional

var tic = [0,0,1];
var tac = [0,1,0];
var toe = [1,0,0];

var tictactoe = [ tic, tac, toe ];
var tictactoe = [ tic,
                  tac,
                  toe ];
var tictactoe = [ [0,0,1],
                  [0,1,0],
                  [1,0,0] ] ;

for (var i=0; i<tictactoe.length; i++) {
  for (var j=0; j<tictactoe[i].length; j++)
  {
    // console.log(tictactoe[i][j]);
    // reset everything to -
    tictactoe[i][j] = 0
  }
}
console.log(tictactoe);
console.log();


var printMulti = function(array) {

  var elements = "";
  for (var i=0, len=array.length; i < len; i++)
  {
    for (var j=0, len2=array[i].length; j < len2; j++)
    {
      console.log(array[i][j]);
      elements += array[i][j] + " ";
    }
  }

  return elements;
}

var printMultiRec = function(array, elements){

  // default argument
  // https://docs.nodejitsu.com/articles/javascript-conventions/how-to-create-default-parameters-for-functions
  if (typeof elements === 'undefined') {
      // default elements to empty string
      elements = "";
  }

  for (var i=0, len=array.length; i<len; i++)
  {
      // recursively calls printMulti
      if (Array.isArray(array[i]))
      {
        elements += printMultiRec(array[i]);
        // console.log("after recursion: " + elements);
      }
      else {
        // console.log(array[i]);
        elements += array[i] + " ";
        // console.log("flat case: " + elements);
      }
  }

  //console.log(elements)
  return elements;
};


var my_array = [[2,3,4], ["Hello CodeCore", 1, true]];
console.log("my_array: " + my_array);
console.log(my_array);
console.log("printMulti my_array: " + printMulti(my_array));
console.log();

var my_array_2 = [[2,3,4, [5,6,7]], ["Hello CodeCore", 1, true]];
console.log("my_array_2: " + my_array_2);
console.log("printMultiRec my_array_2: " + printMultiRec(my_array_2));
console.log();
