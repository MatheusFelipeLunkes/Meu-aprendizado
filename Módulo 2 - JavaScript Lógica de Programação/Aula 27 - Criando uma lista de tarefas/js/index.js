/* Aula 27 - Criando lista de tarefas */

/* ANOTAÇÕES: 
    *** Toda vez que capturarmos um input, tratar os dados mesmo que sejam vazios, não podemos receber dados vazios. 
*/

const inputTarefa = document.querySelector('.text-tarefa');
const inputAdicionaTarefa = document.querySelector('.adiciona-tarefa');
const lista = document.querySelector('.lista');


inputAdicionaTarefa.addEventListener('click', () => {
    if(!inputTarefa.value) {
        console.log('Apenas inputs Cheios são aceitos')
    }else {
        adicionaTarefa(inputTarefa);
    }
});

function adicionaTarefa(texto) {
    const text = texto.value;
    criaLi();
    criaButton();
    const li = criaLi();
    const button = criaButton();
    li.innerText = text;
    li.appendChild(button);
    lista.appendChild(li);

    button.addEventListener('click', () => {
        lista.removeChild(li);
    })
    
}
function criaLi() {
    const li = document.createElement('li');
    return li; 
}

function criaButton() {
    const button = document.createElement('button'); 
    button.innerText = 'Remover Tarefa';
    button.classList.add('remove-tarefa');
    return button;
}
