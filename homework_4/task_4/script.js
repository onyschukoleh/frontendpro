document.getElementById("btn").addEventListener("click", () => {
  let numOrStr = prompt("input number or string");
  console.log(numOrStr);

  switch (true) {
    case numOrStr === null:
      console.log("ви скасували");
      alert("ви скасували");
      break;
    case numOrStr.trim() === "":
      console.log("Empty String");
      alert("Empty String");
      break;
    case isNaN(+numOrStr):
      console.log(" number is Ba_NaN");
      alert(" number is Ba_NaN");
      break;
    default:
      console.log("OK!");
      alert("OK!");
  }
});
