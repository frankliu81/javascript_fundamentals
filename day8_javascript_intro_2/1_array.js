// slide 22
// 1. create an array
var first = ["hello", 5, 'a'];

// 2. change second element of first to 6
first[1] = 6;
console.log(first);

// 3. create array second
var second = [];
for (var i=0; i<=100; i++)
{
  second.push(i);
}
console.log(second);

// 4. compute length of second, should be 101
console.log(second.length);

for (var i=0; i < second.length; i++)
{
  console.log("Number: " + i)
}
