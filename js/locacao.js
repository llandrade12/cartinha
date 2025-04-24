document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide-locacao');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('ativo', 'anterior', 'proximo');
            
            if (index === currentSlide) {
                slide.classList.add('ativo');
            } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
                slide.classList.add('anterior');
            } else if (index === (currentSlide + 1) % slides.length) {
                slide.classList.add('proximo');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlides();
    }

    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Inicializar o primeiro slide
    updateSlides();

    // Autoplay
    let autoplay = setInterval(nextSlide, 5000);

    // Pause autoplay on hover
    const carrosel = document.querySelector('.carrosel-locacao');
    carrosel.addEventListener('mouseenter', () => clearInterval(autoplay));
    carrosel.addEventListener('mouseleave', () => {
        autoplay = setInterval(nextSlide, 5000);
    });
}); 