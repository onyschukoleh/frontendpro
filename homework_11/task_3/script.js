document.querySelector(".btn").addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 9) + 1;

    document.querySelector(".photo").src =
        `./${randomNumber}.jpg`;
});