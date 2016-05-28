$(document).ready(function(){
  //console.log("hello");
  navigator.geolocation.getCurrentPosition(function(location) {
    // console.log(location.coords.latitude);
    // console.log(location.coords.longitude);
    // console.log(location.coords.accuracy);
    // only fire the ajax call when you get the latitude/longitude
    var latitude = location.coords.latitude;
    var longitude = location.coords.longitude;

    $.ajax({
      method: "GET",
      url: "http://api.openweathermap.org/data/2.5/weather?APPID=8453294db1ca526ff526923f91c1e1cb&lat=" + latitude + "&lon=" + longitude
      //+ "&units=metric"
    }).
    done(function(data) {
      //console.log("ajax done")
      //console.log(data.main.temp);
      //console.log("The weather in " + data.name + " is " + (data.main.temp - //273.15).toFixed(2) + " \u00B0" + "C");
      // (273.15).toString()
      $("#weather").html("The weather in " + data.name + " is " + (data.main.temp - 273.15).toFixed(2) + " \u00B0" + "C")

    }).
    fail(function(){
      alert("Cant't fetch weather data.");
    });
  });



});
