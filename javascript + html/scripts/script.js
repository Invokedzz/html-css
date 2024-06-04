let valor = Number(prompt('Selecione um numero'));
let valorEscolhido = document.getElementById('valorescolhido');
let res = document.getElementById('res');

valorEscolhido = valor;
res.innerHTML = ''
res.innerHTML += `<p>O valor escolhido foi ${valorEscolhido}</p>`;
res.innerHTML += `<p>Eh inteiro? ${Number.isInteger(valorEscolhido)}</p>`;
res.innerHTML += `<p>Nao eh um numero? ${Number.isNaN(valorEscolhido)}</p>`;
res.innerHTML += `<p>Suas casas decimais ${valorEscolhido.toFixed(2)}</p>`;
res.innerHTML += `<p>Arredondando: ${Math.ceil(valorEscolhido)}</p>`