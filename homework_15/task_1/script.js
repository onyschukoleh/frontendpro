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

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn")) {
    const productCard = event.target.closest(".li");
    const key = productCard.querySelector(".name").innerText;

    if (localStorage.getItem(key)) {
      addLocalStorage(key);
      updateCartCounter(key);
    } else {
      localStorage.setItem(key, 1);
      addProductToCart(key);
    }
  }

  if (event.target.classList.contains("delete")) {
    const li = event.target.closest(".cart-item");
    const key = li.dataset.product;

    li.remove();
    localStorage.removeItem(key);
  }
});
function addProductToCart(key, imgSrc) {
  const li = document.createElement("li");
  li.classList.add("cart-item");
  li.dataset.product = key;

  const img = document.createElement("img");
  img.src = imgSrc;
  img.alt = key;

  const title = document.createElement("p");
  title.textContent = key;

  const span = document.createElement("span");
  span.textContent = localStorage.getItem(key);

  const delBtn = document.createElement("button");
  delBtn.classList.add("delete");
  delBtn.textContent = "🚫";

  li.appendChild(img);
  li.appendChild(title);
  li.appendChild(span);
  li.appendChild(delBtn);

  cartList.appendChild(li);
}
function addLocalStorage(key) {
  const counter = localStorage.getItem(key);
  localStorage.setItem(key, Number(counter) + 1);
}

function updateCartCounter(key) {
  const cartItem = document.querySelector(`[data-product="${key}"]`);
  const imgSrc = productCard.querySelector(".img").src;

  addProductToCart(key, imgSrc);
  if (cartItem) {
    const span = cartItem.querySelector("span");
    span.textContent = localStorage.getItem(key);
  }
}
console.log(([].something = 5));
console.log(0 || (1 && 2) || 3);
