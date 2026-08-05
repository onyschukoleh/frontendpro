document
  .querySelector(".container")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const message = document.querySelector("#message").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    const email = document.querySelector("#email").value.trim();

    document.querySelector("#nameError").textContent = "";
    document.querySelector("#messageError").textContent = "";
    document.querySelector("#phoneError").textContent = "";
    document.querySelector("#emailError").textContent = "";

    let isValid = true;

    // Name
    if (name === "") {
      document.querySelector("#nameError").textContent = "Ім'я є обов'язковим";
      isValid = false;
    }

    // Message
    if (message.length < 5) {
      document.querySelector("#messageError").textContent =
        "Повідомлення має містити не менше 5 символів";
      isValid = false;
    }

    // Phone
    const phoneRegex = /^\+380\d{9}$/;

    if (!phoneRegex.test(phone)) {
      document.querySelector("#phoneError").textContent =
        "Телефон повинен починатися з +380 та містити 12 цифр";
      isValid = false;
    }

    // Email
    const emailRegex = /^.+@.+\..+$/;

    if (!emailRegex.test(email)) {
      document.querySelector("#emailError").textContent =
        "Введіть коректний email";
      isValid = false;
    }

    // Якщо все вірно
    if (isValid) {
      console.log("Name:", name);
      console.log("Message:", message);
      console.log("Phone:", phone);
      console.log("Email:", email);
      alert("Повідомлення успішно надіслано!");
      this.reset();
    }
  });
