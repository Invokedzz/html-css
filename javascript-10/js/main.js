function tela(valor) {
    let display = document.querySelector('.display');
    display.value += valor;
}

document.querySelectorAll('.btn-num').forEach(botao => {
    botao.addEventListener('click', (e) => {
        tela(e.target.innerText);
    });
});

document.querySelector('.btn-del').addEventListener('click', eraseOne);

document.querySelector('.btn-clear').addEventListener('click', eraseText);

document.querySelector('.btn-eq').addEventListener('click', equalTo);

function equalTo() {
    let display = document.querySelector('.display');
    let operation = display.value;
    try {
        let result = eval(operation);
        if (!isNaN(result)) {
            display.value = result;
        } else {
            throw new Error('Conta inválida!');
        }
    } catch (e) {
        alert('Conta inválida!');
        return;
    }
}

function eraseOne() {
    let display = document.querySelector('.display');
    display.value = display.value.slice(0, -1);
}

function eraseText() {
    let display = document.querySelector('.display');
    display.value = '';
}
