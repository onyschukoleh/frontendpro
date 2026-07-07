const phoneBook = {
  contacts: [
    {
      name: "Олег",
      phone: "+380671112233",
      email: "oleg@example.com",
    },
    {
      name: "Ігор",
      phone: "+380501234567",
      email: "igor@example.com",
    },
  ],

  findContact(name) {
    return this.contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase(),
    );
  },

  addContact() {
    const name = prompt("Введіть ім'я");
    const phone = prompt("Введіть телефон");
    const email = prompt("Введіть електронну пошту");

    this.contacts.push({
      name,
      phone,
      email,
    });

    console.log("Контакт додано:");
    console.log(this.contacts);
  },
};

document.getElementById("add").addEventListener("click", () => {
  phoneBook.addContact();
});

document.getElementById("find").addEventListener("click", () => {
  const name = prompt("Введіть ім'я для пошуку");

  const contact = phoneBook.findContact(name);

  if (contact) {
    console.log("Контакт знайдено:");
    console.log(contact);

    alert(
      `Ім'я: ${contact.name}\nТелефон: ${contact.phone}\nEmail: ${contact.email}`,
    );
  } else {
    console.log("Контакт не знайдено");
    alert("Контакт не знайдено");
  }
});
