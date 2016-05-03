var c = 0;
var t;
var timer = 500;

// Owen's solution to delaying count
// Write some code that writes "1" to the console,
// then 1 second later writes "2" to the console,
// then 2 seconds after that writes "3" to the console,
// ..., until it gets to "10". ​
// Call timedCount recursively each time with increase timer
function timedCount() {
  c++;
  console.log(c);
  t = setTimeout(function(){
    if (c < 5) {
      timedCount()
    }
  }, timer += 500);
}
​
timedCount();
