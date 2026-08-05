document.querySelector(".btn").addEventListener("click", function () {

    const container = document.querySelector(".container");

    // Очищаємо контейнер перед створенням нової таблиці
    container.innerHTML = "";

    const table = document.createElement("table");
    table.classList.add("table");

    container.appendChild(table);

    let delay = 0;

    for (let i = 1; i <= 10; i++) {
        const tr = document.createElement("tr");

        table.appendChild(tr);

        for (let j = 1; j <= 10; j++) {

            setTimeout(() => {
                const td = document.createElement("td");

                td.classList.add("td");
                td.textContent = i * j;

                tr.appendChild(td);
            }, delay);

            delay += 100; // затримка між комірками
        }
    }

});