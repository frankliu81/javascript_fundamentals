// from gabe

function createCounter(){
  var count = 0;
  return function() {
    console.log(count);
    count = count+1;
  }
}

var counter = createCounter();
console.log(typeof counter); // function is returned

// the return function
counter(); // output zero
counter(); // output one

// in a javascript function, if it can't find something, it will look
// at the parent scope, if it can't find it, it will go to the parent scope
