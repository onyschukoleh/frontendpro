const input = document.querySelector(".taskInput");
const addBtn = document.querySelector(".addBtn");
const toDoList = document.querySelector(".toDoList");

// Додавання нового завдання
addBtn.addEventListener("click", function () {
  if (input.value.trim() === "") {
    document.querySelector(".message").textContent =
      "Спочатку додайте завдання!";
    return;
  }
  document.querySelector(".message").textContent = "";
  const li = document.createElement("li");

  li.textContent = input.value + " ";

  const delBtn = document.createElement("button");
  delBtn.textContent = "Видалити";
  li.appendChild(delBtn);
  toDoList.appendChild(li);
  input.value = "";
});

toDoList.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    event.target.parentElement.remove();
  }
});
