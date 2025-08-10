document.addEventListener('DOMContentLoaded', () => {
    // Код для кнопки та форми контакту
    const contactBtn = document.getElementById('contactBtn');
    const contactFormSection = document.getElementById('contact-form');
    const contactForm = document.getElementById('contactForm');

    if (contactBtn && contactFormSection) {
        contactBtn.addEventListener('click', () => {
            contactFormSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Дякуємо за ваше повідомлення! Ми зв\'яжемося з вами найближчим часом.');
            contactForm.reset();
        });
    }

    // === Функція для ініціалізації слайдера ===
    function initializeSlider(containerClass, prevButtonClass, nextButtonClass) {
        let slideIndex = 1;
        const container = document.querySelector(containerClass);
        if (!container) return; // Вихід, якщо контейнер не знайдено

        const slides = container.getElementsByClassName("mySlides");
        const prevButton = document.querySelector(prevButtonClass);
        const nextButton = document.querySelector(nextButtonClass);
        let timeout;

        // Функція, що відповідає за автоматичне перемикання
        function showSlidesAutomatic() {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            slides[slideIndex - 1].style.display = "block";
            timeout = setTimeout(showSlidesAutomatic, 4000); 
        }

        // Функція для ручного перемикання
        function plusSlides(n) {
            clearTimeout(timeout);
            slideIndex += n;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            if (slideIndex < 1) {
                slideIndex = slides.length;
            }
            showSlidesManual(slideIndex);
        }

        // Функція, що показує слайд і запускає таймер знову
        function showSlidesManual(n) {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[n - 1].style.display = "block";
            timeout = setTimeout(showSlidesAutomatic, 4000);
        }
        
        // Запускаємо слайдер автоматично
        showSlidesAutomatic();

        // Додаємо обробники подій для кнопок
        if (prevButton) {
            prevButton.addEventListener('click', () => plusSlides(-1));
        }
        if (nextButton) {
            nextButton.addEventListener('click', () => plusSlides(1));
        }
    }

    // Ініціалізуємо обидва слайдери
    initializeSlider('.slideshow-container:not(.rent-slideshow)', '.prev:not(.rent-prev)', '.next:not(.rent-next)'); // Перший слайдер
    initializeSlider('.rent-slideshow', '.rent-prev', '.rent-next'); // Другий слайдер для оренди
});

