// 1. count to 10 with 2 counters
// var counterOdd = 0;
// var counterEven = 0;
// var countNumberOfOdds = function(){
//   // odd
//   counterOdd++;
//   if (counterOdd % 2 == 1)
//   {
//     console.log(counterOdd);
//   }
//   if (counterOdd > 10)
//     clearInterval(intervalId);
// }
//
// var countNumberOfEvens = function(){
//   // even
//   counterEven++;
//   if (counterEven % 2 == 0)
//   {
//     console.log(counterEven);
//   }
//   if (counterEven > 10)
//     clearInterval(intervalId2);
// }
//
// var intervalId = setInterval(countNumberOfOdds, 1000)
// var intervalId2 = setInterval(countNumberOfEvens, 1000)
// quan's solution
// setTimeout(function(){clearInterval(id1);clearInterval(id2);}, 10000})

// 2. print dot for 10 seconds
// var intervalId3 = setInterval(function(){
//   console.log(".");
// }, 1000);
//
// setTimeout(function(){
//   clearInterval(intervalId3);
// }, 10000);

// 3. blast off
var countDown = 10;
var intervalId4 = setInterval(function(){
  console.log(countDown);
  if (countDown == 0)
  {
    clearInterval(intervalId4);
    console.log("Blast Off!");
  }
  countDown--;
}, 1000);
