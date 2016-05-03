// person.first is private to createPerson
// only if we expose a setter can it be changed
function createPerson(first, middle, last)
{
  var getName = function(){
    return first + " " + middle + " " + last;
  }

  return {getName: getName}
}


var person = createPerson("frank", "wt", "liu");

// prints out "frank wt liu"
// getName is a key, calling person.getName will return the value associated
// with the key, which is the getName function variable.
// person.getName() will execute the getName within the closure.
console.log(person.getName());

// first name is undefined, essentially private after person has been created
console.log(person.first);
