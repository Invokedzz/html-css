const path = require('path');
const escrever = require('./write');
const ler = require('./read');
const lerArquivo = path.resolve(__dirname, 'texto.json');

const foods = [
    {nome: 'Baked Beans'},
    {nome: 'Hot Dogs'},
    {nome: 'Spam'},
    {nome: 'Refried Beans'},
    {nome: 'Kidney Beans'},
    {nome: 'Garden Peas'},
    {nome: 'Mushy Peas'}, 
    {nome: 'Tomato Soup'},
];

const json = JSON.stringify(foods, '', 2);
escrever(lerArquivo, json);