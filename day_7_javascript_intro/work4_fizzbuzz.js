var num1 = parseInt(prompt("Please enter number 1"))
var num2 = parseInt(prompt("Please enter number 2"))

var i = 1;

while (i <= 100)
{
  if ( (i % num1 == 0) && (i % num2 == 0) )
  {
    console.log("FIZZBUZZ")
  }
  else if ( i % num1 == 0 )
  {
    console.log("fizz")
  }
  else if ( i % num2 == 0 )
  {
    console.log("buzz")

  }
  console.log(i)
  
  i++;
}
