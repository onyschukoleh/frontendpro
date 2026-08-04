// script.js
// document.querySelector(".container").addEventListener("click", function(event) {
document.addEventListener("click", function(event) {

    if (event.target.classList.contains("btn")) {
        document.querySelector(".message").textContent =
            "Натиснуто: " + event.target.textContent;
    } else {
        document.querySelector(".message").textContent = "";
    }

});