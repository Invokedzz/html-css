let form = document.querySelector('#formulario');
form.addEventListener('submit', function(n) {
    n.preventDefault();

    let inputpeso = document.querySelector('#inputpeso');
    let inputaltura = document.querySelector('#inputaltura');

    let peso = Number(inputpeso.value);
    let altura = Number(inputaltura.value);

    if (!altura) {
        inserirResultado('Altura invalida', false);
        return;
    }

    if (!peso) {
        inserirResultado('Peso invalido', false);
        return;
    }
    const calculandoImc = calculoImc(peso, altura);
    const mensagem = `${calculandoImc} e ${gerandoImc(calculandoImc)}`;
    inserirResultado(mensagem, true);
});

let gerandoImc = function (calculo) {
    const grau = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (calculo < 18.5) return grau[0];
    else if (calculo < 24.9) return grau[1];
    else if (calculo < 29.9) return grau[2];
    else if (calculo < 34.9) return grau[3];
    else if (calculo < 39.9) return grau[4];
    else return grau[5];
}

function calculoImc (peso, altura) {
    const calculo = peso / altura ** 2;
    return calculo.toFixed(2);
}

function paragrafo() {
    let paragraph = document.createElement('p');
    return paragraph;
}

function inserirResultado (mensagem) {
    let res = document.querySelector('#res');
    res.innerHTML = mensagem;
    let paragraph = paragrafo();
    paragraph.innerHTML = mensagem;
}
