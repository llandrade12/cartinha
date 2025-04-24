document.addEventListener('DOMContentLoaded', () => {
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const menuContainer = document.querySelector('.menu-container');
    const menuLinks = document.querySelectorAll('.menu-container a');

    // Função para verificar o tamanho da tela e ajustar o menu
    const verificarTamanhoTela = () => {
        if (window.innerWidth > 768) {
            menuContainer.classList.remove('ativo');
            menuHamburguer.classList.remove('ativo');
        }
    };

    // Adiciona os event listeners
    menuHamburguer.addEventListener('click', () => {
        menuHamburguer.classList.toggle('ativo');
        menuContainer.classList.toggle('ativo');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                menuHamburguer.classList.remove('ativo');
                menuContainer.classList.remove('ativo');
            }
        });
    });

    // Verifica o tamanho da tela quando redimensionar
    window.addEventListener('resize', verificarTamanhoTela);

    // Verifica o tamanho inicial da tela
    verificarTamanhoTela();
});