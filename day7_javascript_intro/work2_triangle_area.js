// Write a javascript program that prompts the user
// for the length of the sides of a triangle and then
// prints out the area of the triangle.

//var base = parseInt(prompt("Please enter the triangle base"));
//var height = parseInt(prompt("Please enter the triangle height"));

var a = parseInt(prompt("Please enter the triangle side1"));
var b = parseInt(prompt("Please enter the triangle side2"));
var c = parseInt(prompt("Please enter the triangle side3"));

// p is half perimeter
var p = (a + b + c) / 2;
var area = Math.sqrt(p * (p-a) * (p-b) * (p-c))


console.log("The area of the triangle is " + area);


// http://www.mathopenref.com/heronsformula.html
