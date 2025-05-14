document.addEventListener("DOMContentLoaded", function () {
    // Анімована зміна кольору кнопки при наведенні
    const menuButton = document.querySelector(".btn");
    menuButton.addEventListener("mouseenter", function () {
        this.style.backgroundColor = "#4a3f35";
    });
    menuButton.addEventListener("mouseleave", function () {
        this.style.backgroundColor = "#6d4b29";
    });

    // Плавне прокручування до секцій при кліку на меню
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Оновлення року у футері автоматично
    const footerText = document.querySelector(".footer p:last-child");
    const currentYear = new Date().getFullYear();
    footerText.innerHTML = `&copy; ${currentYear} Старий Млин. Всі права захищені.`;
});

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("bookingModal");
    const btn = document.querySelector(".btn-booking");
    const closeBtn = document.querySelector(".close");

    if (btn && modal && closeBtn) {
        btn.addEventListener("click", function () {
            modal.style.display = "flex";
        });

        closeBtn.addEventListener("click", function () {
            modal.style.display = "none";
        });

        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    } else {
        console.error("Елементи для модального вікна не знайдено.");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const quotes = [
        "Справжня гостинність — це мистецтво дарувати тепло серця.",
        "Українська кухня — це традиції, які оживають у кожному смаку.",
        "Немає нічого кращого, ніж аромат щойно спеченого хліба та сімейна вечеря."
    ];

    const quoteElement = document.getElementById("quote");
    quoteElement.innerText = quotes[Math.floor(Math.random() * quotes.length)];
});