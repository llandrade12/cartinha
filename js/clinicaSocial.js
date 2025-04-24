document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-social');
    const idadeInput = document.getElementById('idade');
    const campoResponsavel = document.getElementById('campo-responsavel');
    const inputResponsavel = document.getElementById('responsavel');
    const celularInput = document.getElementById('celular');

    // Máscara para o celular
    celularInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length <= 11) {
            value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
            value = value.replace(/(\d)(\d{4})$/, '$1-$2');
            e.target.value = value;
        }
    });

    // Validação da idade e campo do responsável
    idadeInput.addEventListener('input', function() {
        const idade = parseInt(this.value);
        if (idade < 18) {
            campoResponsavel.style.display = 'block';
            inputResponsavel.required = true;
        } else {
            campoResponsavel.style.display = 'none';
            inputResponsavel.required = false;
        }
    });

    // Validação do formulário
    function validarFormulario(event) {
        event.preventDefault();

        // Validação do e-mail
        const email = document.getElementById('email').value;
        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            alert('Por favor, insira um e-mail válido.');
            return false;
        }

        // Validação da idade
        const idade = parseInt(idadeInput.value);
        if (isNaN(idade) || idade < 0 || idade > 120) {
            alert('Por favor, insira uma idade válida.');
            return false;
        }

        // Validação do celular
        const celular = celularInput.value.replace(/\D/g, '');
        if (celular.length !== 11) {
            alert('Por favor, insira um número de celular válido.');
            return false;
        }

        // Se todas as validações passarem, envie o formulário
        alert('Formulário enviado com sucesso!');
        form.reset();
        return true;
    }

    form.addEventListener('submit', validarFormulario);
}); 