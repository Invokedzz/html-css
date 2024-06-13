const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');
// Partes do documento que foram selecionadas para a operação de eventos. No caso, temos o "input-tarefa", "btn-tarefa" e ".tarefas". Logo: uma aba de texto, um botão e uma parte "livre" do nosso documento.

function criaLi () {
    const li = document.createElement('li');
    return li; // Cria uma lista.
}

function limpaInput () {
    inputTarefa.value = '';
    inputTarefa.focus(); // Limpa o input através do "focus()" e pelo inputTarefa.value dado como vazio.
}

inputTarefa.addEventListener('keypress', function (e){
    if (e.keycode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    } // Esse 'keypress' está relacionado com a questão de pressionar uma respectiva tecla. No caso, cada tecla possui um número que a identifica, respectivamente. Na situação acima, o "e (parâmetro).keycode(código da tecla) === 13 se refere à tecla enter". Portanto, se o "enter" for pressionado, uma tarefa será criada. Porém, se valor algum for inserido, a ação é encerrada através do "return".
});

function criaTarefa (texto) {
    const li = criaLi();
    li.innerHTML = texto;
    salvarTarefa();
    tarefas.appendChild(li);
    limpaInput();
    criaBotao(li);
} // De maneira breve, essa é a função que irá abrigar todas as funcionalidades (ou quase todas) que foram criadas em nosso programa.

function criaBotao (li) {
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    li.innerHTML += ' ';
    li.appendChild(botaoApagar); // Nessa função será proporcionado à nossa lista um botão - sendo esse responsável por apagar os comandos inseridos pelo usuário. A constante "botaoApagar" indica como o elemento fora criado. Daí, nomeamos ele por meio do nosso HTML e, logo em seguida, o inserimos dentro de uma class; class essa chamada de "apagar". Fiz isso por meio do "setAttribute". E, para finalizar a função, precisaríamos consequentemente inserir a função em nosso sistema. Tal ação fora feita através do "appendChild()". Portanto, o "botaoApagar" é um filho da lista que criamos anteriormente.  
}

btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
}); // Resumidamente, ao clicarmos no botão, uma tarefa será inserida no HTML do site. Caso não houver nada na textbox, o "return" vai parar o evento. 

document.addEventListener('click', function(e) {
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefa();
    } // Essa função se apropria da função "apagar" que criamos anterirmente. Por meio da constante "el" recebendo o target do parâmetro podemos ir diretamente ao parente do elemento escolhido. E, logo em seguida, fazemos uso do remove para o usuário deletar algo em sua lista de tarefas.
});

function salvarTarefa() {
    const liTarefa = tarefas.querySelectorAll('li');
    const listaTarefa = [];
    for (let tarefa of liTarefa) {
        const tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaTarefa.push(tarefaTexto);
    }
    const tarefaJSON = JSON.stringify(listaTarefa);
    localStorage.setItem('tarefas', tarefaJSON);
}

function readTarefas () {
    const tarefas = localStorage.getItem('tarefas');
    const listaTarefa = JSON.parse(tarefas);
    for (let tarefa of listaTarefa) {
        criaTarefa(tarefa)
    }
}
readTarefas();