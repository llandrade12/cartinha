document.addEventListener('DOMContentLoaded', function() {
    const secaoNutricao = document.querySelector('.nutricao');
    const botoesNutricao = secaoNutricao.querySelectorAll('.botao-circular');
    const conteudosNutricao = secaoNutricao.querySelectorAll('.nutricao-conteudo');

    botoesNutricao.forEach(botao => {
        botao.addEventListener('click', () => {
            // Remove a classe ativo de todos os botões e conteúdos desta seção
            botoesNutricao.forEach(b => b.classList.remove('ativo'));
            conteudosNutricao.forEach(c => c.classList.remove('ativo'));

            // Adiciona a classe ativo ao botão clicado e ao conteúdo correspondente
            botao.classList.add('ativo');
            const conteudoId = botao.getAttribute('data-slide');
            secaoNutricao.querySelector(`#${conteudoId}`).classList.add('ativo');
        });
    });
}); 