let enviar = document.getElementById('enviar');
enviar.addEventListener('click', envio);

function envio() {

    let nome = document.getElementById('nome');
    let sobrenome = document.getElementById('sobrenome');
    let peso = document.getElementById('peso');
    let altura = document.getElementById('altura');

    const pessoas = [];

    if (nome.value == '' || nome.value == 0 || sobrenome.value == 0 || sobrenome.value == '' || peso.value == 0 || peso.value == '' || altura.value == 0 || altura.value == '') {
        alert('Dados invalidos')
    } else {
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        let res = document.getElementById('res');
        res.innerHTML = `${nome.value}, ${sobrenome.value}, ${peso.value}, ${altura.value}`;  
    }
}