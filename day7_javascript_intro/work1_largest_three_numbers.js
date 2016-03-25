var number1 = parseInt(prompt("Please enter a number"));
var number2 = parseInt(prompt("Please enter second number"));
var number3 = parseInt(prompt("Please enter third number"));


if (number1 > number2 && number1 > number3)
{
  console.log(number1 + " is the largest number");
}
else if (number2 > number1 && number2 > number3)
{
  console.log(number2 + " is the largest number");
}
else
{
  console.log(number3 + " is the largest number");
}
