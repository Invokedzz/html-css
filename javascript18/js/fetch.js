fetch('./js/texto.json').then(x => x.json()).then(data => getTable(data));
function getTable (data) {
    const table = document.createElement('table');
    for (const element of data) {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        td1.innerHTML = element.nome;
        tr.appendChild(td1);
        table.appendChild(tr);
    }
    const res = document.querySelector('.res');
    res.appendChild(table);
}
