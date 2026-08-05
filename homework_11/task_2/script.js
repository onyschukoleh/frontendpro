// script.js
let isBtnPressed = false;

document.querySelector(".btn").addEventListener("click", function () {

console.log("is Btn Pressed: "+isBtnPressed);
    const container = document.querySelector(".container");
    if (isBtnPressed) {
      container.style.color = "black";
      container.style.fontWeight=400;
        // container.classList.toggle("black");
    } else {
      container.style.color = "red";
            container.style.fontWeight=700;

    // container.classList.toggle("red");
    }
    isBtnPressed = !isBtnPressed;
  });