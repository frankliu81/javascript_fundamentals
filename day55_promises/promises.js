// run a few times, sometime it will be success, sometimes it will be failure
var p = new Promise(function(accept, reject){
  // random 0 to 99
  var number = Math.floor(Math.random() * 100)
  if (number > 50) {
    accept();
  } else {
    reject();
  }
});

p.
then(function(){console.log("SUCCESS");
}).
catch(function(){
  console.log("FAILURE")
});

// p instanceof Promise
// true
