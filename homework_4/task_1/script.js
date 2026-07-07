document.getElementById("btn").addEventListener("click", () => {
  const userName = prompt("введіть ваше і'мя:");
  console.log("1. Введено ", typeof userName, ":", userName);

  if (userName !== null) {
    const outString = `Hello, ${userName}! How do you do?`;
    console.log("2. Виведено ", typeof outString, ":", outString);
    alert(outString);
  }
});
