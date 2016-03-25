/*
var merge = function(arr1, arr2) {

    var newArray = [];
    var dupHash = {};

    // loop through array1, add to hash, and only
    // add to new array if hash does not contain it
    for (var i = 0, len=arr1.length; i < len; i++)
    {
        // not found in hash
        if (!dupHash[arr1[i]])
        {
          // add to hash
          dupHash[arr1[i]] = 1;
          // add to newArray
          newArray.push(arr1[i]);
        }
    }

    for (var i = 0, len=arr2.length; i < len; i++)
    {
        // not found in hash
        if (!dupHash[arr2[i]])
        {
          // add to hash
          dupHash[arr2[i]] = 1;
          // add to newArray
          newArray.push(arr2[i]);
        }
    }

    // simple concat
    //newArray = arr1.concat(arr2);

    // interleave array
    // while (arr1.length != 0 && arr2.length != 0)
    // {
    //   if (arr1.length != 0)
    //     newArray.push(arr1.shift())
    //
    //   if (arr2.length != 0)
    //     newArray.push(arr2.shift())
    // }
    return newArray;
} */

var merge = function(array1, array2)
{
  var result = [];
  var tmp = array1.concat(array2);

  for(var i=0; i<tmp.length; i++)
  {
    // check if the element is in the result array
    if (result.indexOf(e) == -1)
    {
      result.push(e);
    }
  }

  return result;
}

// [1,2,3,4,5]
var array1 = [1, 2, 3];
var array2 = [3,4,5];
// merge array and remove duplicates
console.log(merge(array1, array2));

var array3 = [7, 6, 9, 4, 5, 5, 8];
var array4 = [3,4,5, 10, 1, 2, 3];
console.log(merge(array3, array4));
