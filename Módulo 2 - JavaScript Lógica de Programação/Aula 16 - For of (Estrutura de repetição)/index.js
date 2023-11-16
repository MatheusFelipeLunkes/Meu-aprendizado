/* Aula 16 - Estrutura de repetição */

const pessoas = [
    {nome: 'Pedro', sobrenome: 'Alcantara', idade: 19},
    {nome: 'Matheus', sobrenome: 'Lunkes', idade: 23},
    {nome: 'Marcia', sobrenome: 'Pontes', idade: 32},
    {nome: 'Lucas', sobrenome: 'Hernannes', idade: 26}
];

// For of diferente de for in (for in trabalha com os indices), trabalha diretamente com os valores do array,

for (let valor of pessoas) {
    console.log(valor);
}
