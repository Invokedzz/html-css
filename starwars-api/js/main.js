//fetch('starwars.json').then(x => x.json()).then(json => loadArchive(json)).catch(e => console.log(e));
axios('starwars.json').then(json => firstPlanet(json.data));
function firstPlanet (json) {
    let table = document.createElement('table');
    for (let archives of json) {
        const tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = archives.name;
        tr.appendChild(td1);
        let td2 = document.createElement('td');
        td2.innerHTML = archives.climate;
        tr.appendChild(td2);
        let td3 = document.createElement('td');
        td3.innerHTML = archives.terrain;
        tr.appendChild(td3);
        table.appendChild(tr);
    }
    const result = document.querySelector('.result');
    result.appendChild(table);
}

// To display: turn on the Live Server :)