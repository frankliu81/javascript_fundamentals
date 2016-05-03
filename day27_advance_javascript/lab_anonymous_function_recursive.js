// from Greg
var doubleIt = function(x) {  return x*2;}
var addOne = function(x) { return x+1;}
var addTwo = function(x) { return x+2;}
​
my_array = [1,2,3,4];
my_functions = [doubleIt, addOne, doubleIt, addTwo];
​
var map = function(arr, f) {
  for (i=0;i<arr.length;i++){
    arr[i] = f(arr[i]);
  }
  return arr;
}
​
result = [];
var multiFuncs = function(data_arr, func_arr){
  if (func_arr.length > 1){
    data_arr = multiFuncs(data_arr, func_arr.slice(1));
  }
  return map(data_arr, func_arr[0]);
}
​
console.log(multiFuncs(my_array, my_functions.reverse()));
1 Comment Collap
