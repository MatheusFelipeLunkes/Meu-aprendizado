/* Aula 15 - Revisão sobre tipos de dados */

/*
    Sabemos que existem dois tipos de dados, Dados Primitivos e Dados passados por referencia.
        Dados primitivos são imutaveis.

        Dados passados por referencia, podem ser alterados.

        Exemplos:

*/

//Dados Primitivos
let fruta = 'Maçã';

let fruta2 = fruta; // copia da variavel 
console.log(fruta, fruta2); 

fruta = 'Laranja' // Podemos atribuir um novo valor a uma variavel do tipo primitivo.
console.log(fruta, fruta2);

//Dados passados por referencia
const pessoa = {
    nome: "Matheus",
    sobrenome: "Lunkes"
}

const pessoa2 = pessoa;

pessoa2.nome = "Felipe";

console.log(pessoa); // Quando passamos valores por referencia, referenciamos o mesmo local da memoria, fazendo que quando o valor for alterado, altera o valor original da variavel. 