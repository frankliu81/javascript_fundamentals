// write the Javascript code that prompts the user for their score (0-100)
// on the exam and then prints out their letter grade (F - A+)

// stretch: make the program prompts the user to enter the score again
// if it's more than a 100 or less than 0

var score = parseInt(prompt("Please enter your score (0-100)"));
var message = "You got an "

while (score < 0 || score > 100)
{
  score = parseInt(prompt("Please enter your score (0-100)"));
}

// UBC grade scale:
//Percentage (%)	Letter Grade
// 90-100	A+
// 85-89	A
// 80-84	A-
// 76-79	B+
// 72-75	B
// 68-71	B-
// 64-67	C+
// 60-63	C
// 55-59	C-
// 50-54	D
// 0-49	F (Fail)
if (score >= 90) {
  console.log(message + "A+")
} else if (score >= 85) {
  console.log(message + "A")
} else if (score >= 80) {
  console.log(message + "A-")
} else if (score >= 76) {
  console.log(message + "B+")
} else if (score >= 72) {
  console.log(message + "B")
} else if (score >= 68) {
  console.log(message + "B-")
} else if (score >= 64) {
  console.log(message + "C+")
} else if (score >= 60) {
  console.log(message + "C")
} else if (score >= 55) {
  console.log(message + "C-")
} else if (score >= 50) {
  console.log(message + "D")
} else if (score >= 0) {
  console.log(message + "F")
}
