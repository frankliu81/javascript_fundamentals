var doubleIt = function (x) {
 return 2 * x;
};

var call = function (number, func) {
    return func(number);
};

var call2 = function (number, func, iteration) {
  for (var i = 0; i < iteration; i++)
  {
    number = func(number);
    console.log(number);
  }
  return number;
};

//console.log(call(5, doubleIt)); // => 10
console.log(call2(5, doubleIt, 2)); // => 20


//Functional Programming

var animals = [
  {name: "Summer", species: "dog"},
  {name: "Bobby", species: "bird"},
  {name: "Zoey", species: "dog"},
];

// filter
var dog = [];
for (var i=0; i<animals.length; i++)
{
  if (animals[i].species === "dog") {
    dog.push(animals[i])
  }
}
console.log(dog);

var isDog = function(animal) {
  return animal.species === "dog";
}

var isBird = function(animal) {
  return animal.species === "bird";
}

var dog = animals.filter(isDog);
console.log(dog);

var bird = animals.filter(isBird);
console.log(bird)
