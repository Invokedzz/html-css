let data = new Date();
let horas = zerado(data.getHours());
let dia = zerado(data.getDay());
let ano = zerado(data.getFullYear());
let diasTexto;

function zerado (num) {
    if (num >= 10) {
        return num;
    } else {
        return `0${num}`;
    }
}


function diasSemana() {

    if (dia === 0) {
        diasTexto = "Domingo";
    } else if (dia == 1) {
        diasTexto = "Segunda-feira";
    } else if (dia == 2) {
        diasTexto = "Terça-feira";
    } else if (dia == 3) {
        diasTexto = "Quarta-feira";
    } else if (dia == 4) {
        diasTexto = "Quinta-feira";
    } else if (dia == 5) {
        diasTexto = "Sexta-feira";
    } else if (dia == 6) {
        diasTexto = "Sábado";
    }
}

function criadoraP() {
    const p = document.createElement('p');
    return p;
}

function inserirRes (mensagem) {
    const res = document.querySelector('#res');
    const paragrafo = criadoraP();
    paragrafo.innerHTML = mensagem;
    res.innerHTML = mensagem; 
}

function sitezada() {
    diasSemana();
    const mensagem = `${diasTexto}, ${ano}, ${horas}`;
    inserirRes(mensagem, true)
}
document.addEventListener('DOMContentLoaded', sitezada);
sitezada(); 