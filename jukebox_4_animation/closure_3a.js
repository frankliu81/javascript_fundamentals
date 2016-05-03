function createStatusThing (callback) {
  status = 'incomplete';

  function resolve (message) {
    status = 'resolved';
  }

  callback(resolve);

  return {
    getStatus: function () {
      return status;
    }
  };
}

var s = createStatusThing(function (resolve) {
//   resolve();
});

// what happens when you call getStatus?
// 1) function(resolve) gets passed in as an anonymous function
// to callback
// 2) we call callback(resolve), resolve is the function resolve
// defined in createStatusThing
// 3) In our anonymouse function, we take in resolve, but if
// we don't actually call it, then the status remains 'incomplete'
// 4) when we console.log(s.getStatus()), s has the return value
// of createStatusThing, which is an object.  s.getStatus returns
// the anonymous function, and calling it return status in the closure
// which is 'incomplete'
// 5) On the other hand, if we call createStatusThing with an anonymouse
// function call resolve, and we actually call resolve(), Then
// status will become 'resolved'
// 6) similar to the autocomplete jquery UI case, we provide a callback
// to autocomplete, that takes in a response callback.  We can
// make an ajax call, and when that call is done, we then call the response
// callback function with the suggestions.  The response callback function
// is within the autocomplete closure, and it will populate the text inputs
console.log(s.getStatus());
