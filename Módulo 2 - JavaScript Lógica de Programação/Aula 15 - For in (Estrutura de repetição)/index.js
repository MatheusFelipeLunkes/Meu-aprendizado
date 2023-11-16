/* Aula 15 - For in (Estrutura de reptição) */

const frutas = ['Maça', 'Uva', 'Morangos', 'Laranjas', 'Pera'];

// for in ele serve para trabalharmos com estruturas como objetos e arrays, for in acessa os indices de arrays e objetos.
for ( let indice in frutas) {
    console.log(frutas[indice]);
}

const pessoa = {
    nome: "Matheus",
    sobrenome: "Lunkes",
    idade: 23
}

for (let chave in pessoa) {
    console.log(pessoa[chave]);
}