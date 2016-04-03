window.onload = function()
{
  // the item we are interested in
  var element = document.getElementById("item");
  var style = window.getComputedStyle(element);

  // add some text to the element
  var outputDiv = document.createElement("div");

  // outputDiv.innerHTML = "Hello"

  outputDiv.innerHTML = "The " + element.nodeName + " has the display property of "
                        + style.display + " by default.";
  // Adding to a div
  // http://stackoverflow.com/questions/2371326/using-the-dom-to-add-elements-document-write
  document.body.appendChild(outputDiv);

  // document.write will overwrite everything in the body
  // document.write("")

};
