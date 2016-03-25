var string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

var charArray = string.split("");

console.log(charArray);

var hash = {};
var hash = new Object();

for (var i=0, len=charArray.length; i<len; i++){
  var key = charArray[i];
  // console.log("hash[key]: " + hash[key]);
  if (!hash[key])
  {
    hash[key] = 0;
  }
  hash[key]++;
}

// 0 is not a key in our hash
// var maxKey = 0;
//var maxKey = charArray[0]
var maxKey = ""
for (var key in hash)
{
  if (maxKey == "" || hash[key] > hash[maxKey])
  {
    maxKey = key;
  }
}

console.log(hash);
console.log(maxKey + " : " + hash[maxKey]);
