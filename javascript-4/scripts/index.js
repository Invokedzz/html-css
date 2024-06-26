let data = new Date();
let horas = zerado(data.getHours());
let dia = zerado(data.getDay());
let ano = zerado(data.getFullYear());
let minutos = zerado(data.getMinutes());
let segundos = zerado(data.getSeconds());
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
    const mensagem = `${diasTexto}, ${ano}, ${horas}, ${minutos}, ${segundos}`;
    inserirRes(mensagem, true)
}
let siteLoading = document.addEventListener('DOMContentLoaded', sitezada);
sitezada(); 

// Forma resumida de fazer o codigo:

// const h1 = document.querySelector('.container h1');
// const data = new Date();
// h1.innerHTML = data.toLocaleDateString('pt-BR, { dateStyle: 'full', timeStyle: 'short'});