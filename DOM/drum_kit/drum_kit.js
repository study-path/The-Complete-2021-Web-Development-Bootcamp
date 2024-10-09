//DTECTING BUTTON PRESS

for (var i = 0; i <= document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });

  //Detecting KeyBoard Press

  document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
  });

  function makeSound(key) {
    switch (key) {
      case "d":
        var audio1 = new Audio("http://www.vibrationdata.com/Petrov_D.mp3");
        audio1.play();
        break;

      case "n":
        var audio2 = new Audio(
          "http://www.tremblingsandwarblings.com/wp-content/uploads/2017/05/piano-Cs4-long.mp3"
        );
        audio2.play();
        break;

      case "r":
        var audio3 = new Audio("http://www.vibrationdata.com/Petrov_D.mp3");
        audio3.play();
        break;

      case "j":
        var audio4 = new Audio(
          "http://www.tremblingsandwarblings.com/wp-content/uploads/2017/05/piano-Cs4-long.mp3"
        );
        audio4.play();
        break;

      case "y":
        var audio5 = new Audio("http://www.vibrationdata.com/Petrov_D.mp3");
        audio5.play();
        break;

      case "w":
        var audio6 = new Audio(
          "http://www.tremblingsandwarblings.com/wp-content/uploads/2017/05/piano-Cs4-long.mp3"
        );
        audio6.play();
        break;

      default:
        console.log(key);
    }
  }

  function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
