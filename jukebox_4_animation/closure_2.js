function createCounter (callback) {
  var count = 0;

  function getNext (message) {
    count = count + 1;
    console.log(message + count)
  }

  callback(getNext);
}

var counter = createCounter(function (printCount) {
  console.log(printCount)
  printCount('THE NEXT ONE IS ');
  printCount('BUTTS ');
  printCount('FARTS ');
});

// in this example, printCount will be passed getNext
// when callback is called with getNext.

// when run:
// console.log within the var counter = ...
// will show that printCount is actually passed with
// getNext, and when printCount gets executued, it will
// print the message that was passed in with the closure variable
// count
//
//function getNext(message) {
//  count = count + 1;
//  window.runnerWindow.proxyConsole.log(message + count)
//}
//"THE NEXT ONE IS 1"
//"BUTTS 2"
//"FARTS 3"
