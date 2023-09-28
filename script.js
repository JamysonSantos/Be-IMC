// Função para exibir o pop-up customizado
function exibirPopUp(mensagem) {
    var popupContainer = document.getElementById('popup-container');
    var customPopup = document.getElementById('custom-popup');
    var closePopup = document.getElementById('close-popup');
    var mensagemContainer = document.getElementById('mensagem');

    mensagemContainer.textContent = mensagem;
    popupContainer.style.display = 'flex';

    closePopup.addEventListener('click', function() {
        popupContainer.style.display = 'none';
    });
}

// Função para calcular o IMC e exibir a classificação
function calcularIMC() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);

    if (!isNaN(peso) && !isNaN(altura)) {
        var imc = peso / (altura * altura);
        var classificacao = '';
        var mensagem = '';

        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
            mensagem = 'Atenção! Seu IMC indica que você está abaixo do peso ideal. É importante manter uma alimentação saudável e buscar orientação médica, se necessário.';
        } else if (imc >= 18.5 && imc <= 24.9) {
            classificacao = 'Peso normal';
            mensagem = 'Parabéns! Seu IMC está dentro da faixa de peso normal. Continue mantendo um estilo de vida saudável e equilibrado.';
        } else if (imc >= 25 && imc <= 29.9) {
            classificacao = 'Sobrepeso';
            mensagem = 'Cuidado! Seu IMC indica sobrepeso. Considere fazer ajustes na sua dieta e aumentar a atividade física para alcançar um peso saudável.';
        } else {
            classificacao = 'Obesidade';
            mensagem = 'Atenção! Seu IMC indica obesidade. É fundamental buscar orientação médica e adotar um plano de cuidados para melhorar a saúde.';
        }

        document.getElementById('resultado').textContent = `Seu IMC é: ${imc.toFixed(2)} - ${classificacao}`;
        exibirPopUp(mensagem);
    } else {
        document.getElementById('resultado').textContent = 'Por favor, insira valores válidos para peso e altura.';
    }
}

// Event listener para o botão "Calcular IMC"
document.getElementById('calcular').addEventListener('click', calcularIMC);

// Event listener para o botão "O que é IMC?"
document.getElementById('o-que-e-imc').addEventListener('click', function() {
    var mensagem = 'O Índice de Massa Corporal (IMC) é uma medida que relaciona seu peso à sua altura. Ele pode ajudar a avaliar se você está dentro de um peso saudável para sua altura. Aqui estão algumas faixas de classificação do IMC:\n\n- Abaixo do peso: IMC menor que 18.5\n- Peso normal: IMC entre 18.5 e 24.9\n- Sobrepeso: IMC entre 25 e 29.9\n- Obesidade: IMC igual ou acima de 30';

    exibirPopUp(mensagem);
});
