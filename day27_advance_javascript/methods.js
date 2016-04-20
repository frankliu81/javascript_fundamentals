var vroom = function() { console.log("Vrooooom...");};

var breaks = function() {
  // console.log("Screeetch...")
  if (this.speed >= 80)
  {
    var ees = "";
    for (i=0, len = this.speed; i<len; i++){
        ees += "e";
    }
    console.log("Scree" + ees + "eeetch!");

  } else if (this.speed < 80 && this.speed >= 50) {
    console.log("RRrch");
  } else if (this.speed < 50 && this.speed >= 0) {
    console.log("sh");
  } else {
    console.log("Yikes, I don't know how fast I'm going!!")
  }
};

var car = {
  speed: 49,
  drive: function() {
    console.log("Vrooom! Driving " + this.speed + " km/h")
  },
  stop: breaks

};

console.log(car.speed);
// car.drive is a Function
//console.log(car.drive);
car.drive();
car.stop();

// 
// var car2 = new Car();
// car2.speed = 200
// car.drive();
// car.stop();


var Person = function ()
{
    console.log('instance created');
};

var person1 = new Person();
var person2 = new Person();
