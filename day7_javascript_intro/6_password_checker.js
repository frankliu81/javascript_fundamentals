var password = prompt("Please enter a password")

if (password.length > 12)
{
  alert("Too long!");
}
else if (password.length < 8)
{
  alert("Too short!")
}
else
{
  alert("Just right!")
}
