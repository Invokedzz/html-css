const agrupamento = [
    {gp: 'div', texto: 'Frase 1'},
    {gp: 'p', texto: 'Frase 2'},
    {gp: 'section', texto: 'Frase 3'},
    {gp: 'footer', texto: 'Frase 4'},
];
const container = document.querySelector('#container');
const div = document.createElement('div');
for (let i = 0; i < agrupamento.length; i++) {
    let {gp, texto} = agrupamento[i];
    const criaTag = document.createElement(gp);
    let Criatexto = document.createTextNode(texto);
    div.appendChild(criaTag);
    criaTag.appendChild(Criatexto);
    olhaPedra(criaTag); // As propriedades foram inseridas no "criaTag" - por isso fora feita a passagem de parâmetro.
}
container.appendChild(div);
function olhaPedra (elemento) {
    elemento.style.backgroundColor = 'rgb(17, 86, 102)';
    elemento.style.color = '#FFFFFF';
}
