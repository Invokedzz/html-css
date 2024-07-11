async function fetchProduct (data) {
    const res = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
    if (!res.ok) {
        throw new Error(`error: ${res.status}`);
    }
    data = await res.json();
    starTable(data);
}
function starTable (data) {
    const table = document.createElement('table');
    for (let product of data) {
        const tr = document.createElement('tr');
        const tda = document.createElement('td');
        tda.innerHTML = product.name;
        tr.appendChild(tda);
        table.appendChild(tr);
    }
    const result = document.querySelector('.res');
    result.appendChild(table);
}
fetchProduct();