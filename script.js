document.addEventListener('DOMContentLoaded', () => {
    // Код для кнопки та форми контакту
    const contactBtn = document.getElementById('contactBtn');
    const contactFormSection = document.getElementById('contact-form');
    
    if (contactBtn && contactFormSection) {
        contactBtn.addEventListener('click', () => {
            contactFormSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // === Функція для ініціалізації слайдера ===
    function initializeSlider(containerClass, prevButtonClass, nextButtonClass) {
        let slideIndex = 1;
        const container = document.querySelector(containerClass);
        if (!container) return; 

        const slides = container.getElementsByClassName("mySlides");
        const prevButton = document.querySelector(prevButtonClass);
        const nextButton = document.querySelector(nextButtonClass);
        let timeout;

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

        function showSlidesManual(n) {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[n - 1].style.display = "block";
            timeout = setTimeout(showSlidesAutomatic, 4000);
        }
        
        showSlidesAutomatic();

        if (prevButton) {
            prevButton.addEventListener('click', () => plusSlides(-1));
        }
        if (nextButton) {
            nextButton.addEventListener('click', () => plusSlides(1));
        }
    }

    initializeSlider('.slideshow-container:not(.rent-slideshow)', '.prev:not(.rent-prev)', '.next:not(.rent-next)');
    initializeSlider('.rent-slideshow', '.rent-prev', '.rent-next');
});