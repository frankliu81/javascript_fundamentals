var xpos = 100;
var ypos = 150;

$(document).on('ready', function() {


});


  $(document).on('keypress', function(event){

    var charCode = event.which;
    var key = String.fromCharCode(charCode);

    if (key === "w") {
      $('.shape.blue.square').offset({top: ypos});
      ypos -= 5;
    }

    if (key === "s") {
      $('.shape.blue.square').offset({top: ypos});
      ypos += 5;
    }

    if (key === "a") {
      $('.shape.blue.square').offset({left: xpos});
      xpos -= 5;
    }

    if (key === "d") {
      $('.shape.blue.square').offset({left: xpos});
      xpos += 5;
    }

  });
