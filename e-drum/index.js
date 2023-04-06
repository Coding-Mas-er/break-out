/////////// checking to how many buttons there are //////////////////
var numOfDrumButtons = document.querySelectorAll(".drum").length;

///////// adding addEventListener function to all the button there are ////////////
for (var i = 0; i < numOfDrumButtons; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function () {

////////// detecting mouse clicks events /////////
      var buttonInnerHTML = this.innerHTML;
//////// making the rigth sound based on the button that was click //////////
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);

  });

}

///////////// adding addEventListener function to all the document ////////
document.addEventListener("keypress", function(event) {

////// detecting key press events /////////
  var keyPress = event.key;
///////// making  the rigth sound based on the key on the keybroad that was pressed ////////////////////
  makeSound(keyPress);

  buttonAnimation(keyPress);

});

///////// creating a sound function ///////////
function makeSound (key) {

  switch (key) {
    case "z":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;

    case "x":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;

    case "c":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;

    case "v":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;

    case "b":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
    break;

    case "n":
       var snare = new Audio("sounds/snare.mp3");
       snare.play();
    break;

    case "m":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;

    default: console.log(key);

  }
}

function buttonAnimation (currentKey) {
  var activeButton = document.querySelector("." + currentKey).classList;

  activeButton.add("pressed");

  setTimeout ( function () {
    activeButton.remove("pressed");
  }, 100);
}
