let iniciar = document.querySelector('.iniciar');
let pause = document.querySelector('.pausar');
let zerar = document.querySelector('.zerar');
let relogio = document.querySelector('.relogio');
let tempoAtual = 0;
let intervalId;
iniciar.addEventListener('click', iniciarClique);
pause.addEventListener('click', pausarClique);
zerar.addEventListener('click', zerarClique); 

function retornaData() {
    tempoAtual++;
    let horas = Math.floor(tempoAtual / 3600);
    let minutos = Math.floor((tempoAtual % 3600) / 60); 
    let segundos = tempoAtual % 60; 
    let horaAtual = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    relogio.textContent = horaAtual;
}

function iniciarClique () {
    relogio.textContent = '00:00:00';
    intervalId = setInterval(retornaData, 1000);
    tempoAtual = 0;
}
function pausarClique () {
    clearInterval(intervalId);
}
function zerarClique () {
    clearInterval(intervalId);
    relogio.textContent = '00:00:00';
    tempoAtual = 0;
}