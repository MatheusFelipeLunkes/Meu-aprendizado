/* Aula 27 - Criando lista de tarefas */

/* ANOTAÇÕES: 
    *** Toda vez que capturarmos um input, tratar os dados mesmo que sejam vazios, não podemos receber dados vazios. 
*/

//REFATORANDO...

const inputTarefa = document.querySelector('.input-tarefa');
const btnAddTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');

btnAddTarefa.addEventListener('click', () => {
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
})

inputTarefa.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {

        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
        limpaInput();
    }
})

function limpaInput () {
    inputTarefa.value = '';
    inputTarefa.focus();
}


function criaLi () {
    const li = document.createElement('li');
    return li;
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}


function criaBotaoApagar (li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
}
document.addEventListener('click', function(e) {
    const element = e.target;

    if(element.classList.contains('apagar')) {
        element.parentElement.remove();
        salvarTarefas();
    }
})

function salvarTarefas() {
   const liTarefas = tarefas.querySelectorAll('li');
   const listaDeTarefas = [];

   for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
} 
    const tarefasJSON = JSON.stringify(listaDeTarefas); //criando uma string em formato JSON
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas () {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas); // Convertendo um formato JSON, de volta ao seu estado natural.
    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}