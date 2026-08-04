let link = "";

document.querySelector(".btn1").addEventListener("click", function () {
  document.querySelector(".message").textContent = "";

  link = prompt("Введіть посилання:");
  if (link && !link.startsWith("http")) {
    link = "https://" + link;
  }
  console.log("Введене посилання:" + link);
});
document.querySelector(".btn2").addEventListener("click", function () {
  if (link) {
    window.location.href = link;
  } else {
    document.querySelector(".message").textContent =
      "Спочатку введіть посилання!";
  }
});
