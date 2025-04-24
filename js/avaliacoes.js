document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slide-avaliacoes');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const cards = document.querySelectorAll('.card-avaliacao');
    
    let currentIndex = 0;
    const cardsPerView = 3;
    const totalSlides = Math.ceil(cards.length - cardsPerView);

    // Função para atualizar a visibilidade dos botões
    function updateNavButtons() {
        prevBtn.classList.toggle('hidden', currentIndex === 0);
        nextBtn.classList.toggle('hidden', currentIndex >= totalSlides);
    }

    // Função para mover o slider
    function moveSlider(direction) {
        if (direction === 'next' && currentIndex < totalSlides) {
            currentIndex++;
        } else if (direction === 'prev' && currentIndex > 0) {
            currentIndex--;
        }

        const offset = currentIndex * (cards[0].offsetWidth + 32); // 32px é o gap entre os cards
        slider.style.transform = `translateX(-${offset}px)`;
        updateNavButtons();
    }

    // Event listeners para os botões
    prevBtn.addEventListener('click', () => moveSlider('prev'));
    nextBtn.addEventListener('click', () => moveSlider('next'));

    // Inicialização
    updateNavButtons();

    // Atualizar quando a janela for redimensionada
    window.addEventListener('resize', updateNavButtons);
}); 