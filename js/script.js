document.addEventListener("DOMContentLoaded", function () {
    // Плавне прокручування для всіх посилань
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });

                // Закрити мобільне меню, якщо воно відкрите
                if (mobileMenu.classList.contains('active')) {
                    toggleMobileMenu();
                }
            }
        });
    });

    // Фіксація хедера при скролі
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Кнопка "Наверх"
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    // Мобільне меню
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('nav ul');

    function toggleMobileMenu() {
        mobileMenu.classList.toggle('active');
        mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
        mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
    }

    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // Закрити мобільне меню при кліку на пункт
    document.querySelectorAll('nav ul li a').forEach(item => {
        item.addEventListener('click', function () {
            if (mobileMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });

    // Форма бронювання
    const bookingForm = document.querySelector('.booking-form form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Тут можна додати логіку відправки форми
            alert('Дякуємо за ваше замовлення! Ми зв\'яжемося з вами для підтвердження.');
            this.reset();
        });
    }

    // Форма розсилки
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Тут можна додати логіку відправки форми
            alert('Дякуємо за підписку!');
            this.reset();
        });
    }

    // Ініціалізація слайдера відгуків
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial');

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.transform = `translateX(${100 * (i - index)}%)`;
        });
    }

    // Автоматична зміна відгуків
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);

    // Ініціалізація
    showTestimonial(0);
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    }
});