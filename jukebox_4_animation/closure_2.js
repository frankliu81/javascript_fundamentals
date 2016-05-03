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
