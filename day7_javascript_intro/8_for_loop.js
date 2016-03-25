// for (initializer; condition/ increment)
// {
//   // ...
// }

// for (var i = 0; i < 10; i++)
// {
//   console.log(i)
// }

// Exercise
// Number between 0 and 100

var number = Math.floor(Math.random() * 100 + 1);
console.log("Secret, number is " + number)

var guess = parseInt(prompt("Make a guess between 1 to 100"));

// number witll be a Javascript number, guess will be a string
// from the user
// Idealy we should convert using ParseInt, and use !==
while (number !== guess)
{
  if (guess > number)
  {
    alert("Number is too large");
  }
  else if (guess < number)
  {
    alert("Number is too small");
  }
  guess = parseInt(prompt("Make a guess between 1 to 100"));
}

alert("Congratulations!  You guessed the correct number " + number)
