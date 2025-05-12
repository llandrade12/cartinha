// Efeito de confete
document.addEventListener('DOMContentLoaded', function() {
    // Configuração do confete
    const confettiSettings = { target: 'confetti', max: 150, size: 1.5 };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    
    // Atualizar contador em tempo real
    function updateCounter() {
        const startDate = new Date('2023-05-07'); // Data do início do relacionamento
        const now = new Date();
        const diff = now - startDate;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    }
    
    updateCounter();
    setInterval(updateCounter, 60000); // Atualizar a cada minuto
    
    // Efeito nos poemas
    document.querySelectorAll('.poem-box').forEach(box => {
        box.addEventListener('click', function() {
            this.classList.toggle('folded');
        });
    });
});



{

    // Event Listeners
    document.getElementById('font-increase')?.addEventListener('click', increaseFont);
    document.getElementById('font-decrease')?.addEventListener('click', decreaseFont);
    document.getElementById('high-contrast')?.addEventListener('click', toggleContrast);
    document.getElementById('read-page')?.addEventListener('click', readPage);

    // Aplicar preferências salvas
    if (localStorage.getItem('fontSize') === 'large') increaseFont();
    if (localStorage.getItem('highContrast') === 'true') toggleContrast();
};

// INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', function() {
    setupAccessibility();
    
    // Outras inicializações específicas de cada página
    if (document.querySelector('.confetti')) {
        // Inicializar confetti apenas na página inicial
        const confetti = new ConfettiGenerator({ target: 'confetti' });
        confetti.render();
    }
    
    if (document.getElementById('days')) {
        // Inicializar contador apenas na página inicial
        updateCounter();
    }
});
// Configuração de acessibilidade
function initAccessibility() {
    // Aumentar fonte
    document.getElementById('font-increase')?.addEventListener('click', () => {
        document.body.style.fontSize = '18px';
    });
    
    // Diminuir fonte
    document.getElementById('font-decrease')?.addEventListener('click', () => {
        document.body.style.fontSize = '16px';
    });
    
    // Alto contraste
    document.getElementById('high-contrast')?.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
    });
    
    // Ler página
    document.getElementById('read-page')?.addEventListener('click', () => {
        if ('speechSynthesis' in window) {
            const text = document.querySelector('.lyrics-text')?.innerText || 
                        document.querySelector('main')?.innerText;
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'pt-BR';
            window.speechSynthesis.speak(utterance);
        }
    });
}

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initAccessibility);
// Player de Música Customizado
function setupMusicPlayer() {
    const audioPlayer = document.getElementById('audio-player');
    const playBtn = document.getElementById('play-btn');
    const progressBar = document.getElementById('progress-bar');
    const currentTimeElement = document.getElementById('current-time');
    const durationElement = document.getElementById('duration');
    const volumeBar = document.getElementById('volume-bar');
    
    // Atualizar informações da música (personalize com seus dados)
    document.getElementById('song-title').textContent = "Nome da Música";
    document.getElementById('song-artist').textContent = "Nome do Artista";
    
    // Botão Play/Pause
    playBtn.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audioPlayer.pause();
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });
    
    // Atualizar barra de progresso
    audioPlayer.addEventListener('timeupdate', () => {
        progressBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        currentTimeElement.textContent = formatTime(audioPlayer.currentTime);
    });
    
    // Atualizar tempo total quando metadados são carregados
    audioPlayer.addEventListener('loadedmetadata', () => {
        durationElement.textContent = formatTime(audioPlayer.duration);
    });
    
    // Pular para parte específica da música
    progressBar.addEventListener('input', () => {
        const seekTime = (progressBar.value / 100) * audioPlayer.duration;
        audioPlayer.currentTime = seekTime;
    });
    
    // Controle de volume
    volumeBar.addEventListener('input', () => {
        audioPlayer.volume = volumeBar.value;
    });
    
    // Quando a música termina
    audioPlayer.addEventListener('ended', () => {
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        progressBar.value = 0;
        currentTimeElement.textContent = '0:00';
    });
    
    // Formatar tempo (mm:ss)
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
}

// Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    initAccessibility(); // Sua função de acessibilidade existente
    setupMusicPlayer(); // Inicializa o player de música
    
    // Verifique se os elementos existem antes de adicionar eventos
    const elementsExist = document.getElementById('audio-player') && 
                         document.getElementById('play-btn');
    
    if (!elementsExist) {
        console.log("Elementos do player não encontrados");
    }
});