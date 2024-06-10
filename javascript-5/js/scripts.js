const elementos = [
    {tag: 'p', texto: 'O Palmeiras não tem Mundial'},
    {tag: 'div', texto: 'Messi entrará no Vasco'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
];
const container = document.querySelector('#container');
const div = document.createElement('div'); 

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    const criaTag = document.createElement(tag);
    const criaTexto = document.createTextNode(texto);
    criaTag.appendChild(criaTexto);
    div.appendChild(criaTag);
}
container.appendChild(div)
console.log({tag, texto})