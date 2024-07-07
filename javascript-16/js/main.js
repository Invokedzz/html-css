/* fetch('people.json').then(answer => answer.json()).then(json => loadElements(json)).catch(err => console.log(err)); */

 //axios('people.json').then(answer => loadElements(answer.data)

// Pode ser resolvido de uma das duas formas.

fetch('people.json').then(x => x.json()).then(json => loadElements(json)).catch(e => console.log(e));
function loadElements (json) {
    const table = document.createElement('table');
    for (let pessoas of json) {
        const tr = document.createElement('tr');
        let tda = document.createElement('td');
        tda.innerHTML = pessoas.nome;
        tr.appendChild(tda);
        let tdb = document.createElement('td');
        tdb.innerHTML = pessoas.estado;
        tr.appendChild(tdb);
        let tdc = document.createElement('td');
        tdc.innerHTML = pessoas.sexo;
        tr.appendChild(tdc)
        table.appendChild(tr);
    }
    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}