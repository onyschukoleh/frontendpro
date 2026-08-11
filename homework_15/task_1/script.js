// document.querySelector(".btn1").addEventListener("click", function () {
//   const addUser = prompt("Додайте користувача у localStorage");
//   // Зберігання значення 'John' під ключем 'username'
//   localStorage.setItem("username", addUser);
//   const username = localStorage.getItem("username");
//   console.log("Додано користувача:", username); // Виводить 'Користувач: John'em('username', 'John');
// });

// document.querySelector(".btn2").addEventListener("click", function () {
//   // console.log("Користувач:", username); // Виводить 'Користувач: John'em('username', 'John');
//   // Видалення значення, збереженого під ключем 'username'
//   const username = localStorage.getItem("username");
//   localStorage.removeItem("username");
//   if (username !== null) {
//     console.log("Видалено користувача :" + username); // Виводить 'Користувач: John'em('username', 'John');

//     alert(`Видалено користувача ${username} з localStorage`);
//   }
// });

// document.querySelector(".btn2").addEventListener("click", function () {
//   // console.log("Користувач:", username); // Виводить 'Користувач: John'em('username', 'John');
//   // Видалення значення, збереженого під ключем 'username'
//   const username = localStorage.getItem("username");
//   localStorage.removeItem("username");
//   if (username !== null) {
//     console.log("Видалено користувача :" + username); // Виводить 'Користувач: John'em('username', 'John');

//     alert(`Видалено користувача ${username} з localStorage`);
//   }
// });

const cartList = document.querySelector(".cart-list");
const img = document.querySelector(".img");
const addBtn = document.querySelector(".addBtn");
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn")) {
    const li = document.createElement("li");
    const key = event.target.parentElement.children[0].innerText;

    if (localStorage.getItem(key)) {
      addLocalStorage(key);

      console.log(cards());
    } else {
      localStorage.setItem(key, JSON.stringify(1));
      const counter = localStorage.getItem(key);
      console.log("counter" + counter);
      li.textContent = event.target.parentElement.children[0].innerText;
      li.setAttribute("data-vlad", key);
      const delBtn = document.createElement("button");
      const span = document.createElement("span");
      span.textContent = counter;
      delBtn.textContent = "Видалити";
      li.appendChild(span);
      li.appendChild(delBtn);

      cartList.appendChild(li);
    }

    // cartList.addEventListener("click", function (event) {
    //   if (event.target.tagName === "BUTTON") {
    //     event.target.parentElement.remove();
    //   }
    // });
  } else {
    document.querySelector(".message").textContent = "";
  }
});

function cards() {
  const cardItems = document.querySelectorAll(".cart-item");
  cardItems.forEach((item) => {
    console.log(item);
  });
}

function addLocalStorage(key) {
  const counter = localStorage.getItem(key);
  localStorage.setItem(key, Number(counter) + 1);
}

function clearLocalStorage(key) {
  const counter = localStorage.getItem(key);
  localStorage.setItem(key, Number(counter) - 1);
}
