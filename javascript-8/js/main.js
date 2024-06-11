function generalfunction() {
let segundos = 0;
let timer;

const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
        const pausar = document.querySelector('.pausar');
            const zerar = document.querySelector('.zerar');
                iniciar.addEventListener('click', iniciarRelogio);
                    zerar.addEventListener('click', zerarRelogio);
                        pausar.addEventListener('click', pausarRelogio);

function olhaHora (segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}
function mudaHora () {
timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = olhaHora(segundos);
}, 1000);
}
function iniciarRelogio() {
    clearInterval(timer);
    mudaHora();
}
function pausarRelogio () {
    clearInterval(timer);
    segundos = 0;
}
function zerarRelogio () {
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = '00:00:00';
}
}
generalfunction();