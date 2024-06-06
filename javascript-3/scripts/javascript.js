function calculodoImc (altura, peso) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
} 
function criaP () {
    const p = document.createElement('p');
    return p;
}
const calculo = function grausImc (imc) {
    const grau = [ 'Abaixo do peso', 'Normal', 'Sobrepeso', 'Obesidade grau 1', ' Obesidade grau 2', 'Obesidade grau 3'];

    if (imc < 18.5) return grau[0];
    else if (imc < 24.9) return grau[1];
    else if (imc < 29.9) return grau[2];
    else if (imc < 34.9) return grau[3];
    else if (imc < 39.9) return grau[4];
    else return grau[5];
}
function respostaaoUsuario (mensagem) {
    let res = document.querySelector('#resposta');
    res.innerHTML = mensagem;
    let paragrafo = criaP(); // Aqui, uma variavel acaba de chamar uma funcao. Dessa forma, podemos utilizar funcoes diferentes para cada coisa.
    paragrafo.innerHTML = mensagem;
}

const form = document.querySelector('#form');
form.addEventListener('submit', function(y){

    y.preventDefault();
    const inputpeso = document.querySelector('#input-do-peso');
    const inputaltura = document.querySelector('#input-da-altura');
    const peso = Number(inputpeso.value);
    const altura = Number(inputaltura.value);

    if (!peso) {
        respostaaoUsuario('Peso invalido', false);
        return;
    }

    if (!altura) {
        respostaaoUsuario('Altura invalida', false);
        return;
    }
    const resultadoImc = calculodoImc(altura, peso)
    const msg = `${resultadoImc} e ${calculo(resultadoImc)}`;
    respostaaoUsuario(msg, true);
});