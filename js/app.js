function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    // Verificar se a quantidade é um número positivo
if (isNaN(qtd) || qtd <= 0) {
    alert('Por favor, insira uma quantidade válida.');
    return;
}

    if (tipo.value == 'pista'){
        comprarPista (qtd);
    } else if (tipo.value == 'superior') {
        comprarSuperior (qtd);
    } else if (tipo.value == 'inferior')
        comprarInferior (qtd);
}

//Define uma função que trata da compra de ingressos do tipo 'pista'
function comprarPista(qtd) {
    // Obtém o valor atual de ingressos disponíveis para 'pista' (do elemento com ID qtd-pista), converte para número inteiro, 
    //e armazena na variável qtdPista.
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent); 
    // Verifica se a quantidade solicitada é maior do que a quantidade disponível.
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
        } else {
           //Se houver ingressos suficientes, subtrai a quantidade solicitada da quantidade disponível
            qtdPista = qtdPista - qtd;
            //Atualiza o valor exibido no HTML com a nova quantidade de ingressos disponíveis.
            document.getElementById('qtd-pista').textContent = qtdPista;
            alert('Compra realizada com sucesso!');
        }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para tipo superior');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }

}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para tipo inferior');
    } else {
            qtdInferior = qtdInferior - qtd;
            document.getElementById('qtd-inferior').textContent = qtdInferior;
            alert('Compra realizada com sucesso!');
        }
}
