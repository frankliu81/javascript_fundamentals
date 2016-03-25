// Create a javascript object that stores deck of cards.
//
// - Add a print method on it that will print the cards in order.
// - Add a method shuffle that will shuffle the cards
// - Add a randomCard method that give your a random card from your collection

// array of ranks, ace to king
// array of suits, s, h, d, c

var ranks = ["ace", "one", "two", "three", "four", "five", "six", "seven",
            "eight", "nine", "ten", "jack", "queen", "king"];

var suits = ["spade", "heart", "diamond", "club"];

var deck = [];

// multidimensional initialization
// http://stackoverflow.com/questions/10673237/uncaught-typeerror-cannot-set-property-0-of-undefined
// for (var i = 0, len1 = suits.length; i<len1; i++)
// {
//   // javascript does not allow for direct intialization
//   // of multidimensional array
//   deck[i] = [];
//   for (var j = 0, len2 = ranks.length; j<len2; j++)
//   {
//     //console.log(ranks[j] + " of " + suits[i]);
//     //deck.push(ranks[j] + " of " + suits[i]);
//     deck[i][j] = ranks[j] + " of " + suits[i];
//
//   }
// }
// console.log(deck[0][1]);



// deck will contain multiple cards
// each card object has two property, suit and value
for (var i = 0, len1 = suits.length; i<len1; i++)
{
  for (var j = 0, len2 = ranks.length; j<len2; j++)
  {
    card = { suit: suits[i], rank: ranks[j] };
    deck.push(card)
  }
}

//console.log("deck: ");
//console.log(deck);
//console.log();


var printACard = function(card) {
  console.log(card["rank"] + " of " + card["suit"]);
};

var print = function(deck) {
  for (var i=0, len=deck.length; i<len; i++)
  {
    //console.log(deck[i])
    printACard(deck[i])
  }
};

var shuffle = function(deck) {

  for (var i=0; i<100; i++)
  {
    // random number from 0 to 51
    var index1 = Math.floor(Math.random() * 52);
    var index2 = Math.floor(Math.random() * 52);

    // swap index 1 and index 2 via a tempor
    var temp = deck[index1];
    deck[index1] = deck[index2];
    deck[index2] = temp;
  }
};

var sort = function(deck) {
};

var pickACard = function(deck) {

  // random number from 0 to 51
  var index = Math.floor(Math.random() * 52);

  return deck[index];
};




console.log("Deck initialized: ");
console.log("===========================");
print(deck);
console.log();

shuffle(deck);
console.log("Deck shuffled: ");
console.log("===========================");
print(deck);
console.log();

console.log("Pick A Card: ");
console.log("===========================");
printACard(pickACard(deck));
console.log();

sort(deck);
console.log("Deck sorted: ");
console.log("===========================");
print(deck);
console.log();
