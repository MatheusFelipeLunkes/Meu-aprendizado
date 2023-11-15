/* Aula 11 - Atribuição via desestruturação (Arrays) */

let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b, c, a];
[a, b, c] = letras; // Atribuição via desesetruturação de variaveis, usando arrays

console.log(a, b, c);
// indice array: 0  1  2   3  4  5  6  7  8
const numeros = [10, 23, 35 , 46, 57, 69, 70, 86, 99];

const [primeiroNumero, segundoNumero,  , ... restoArray] = numeros; // ... Operador rest, captura o resto do array.

console.log(primeiroNumero, segundoNumero, restoArray);

// Desestruturando uma lista dentro de outra lista,
//Indices:          0          1          2
//indices:       0  1  2    0  1  2    0  1  2
const array = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista1, ... resto] = array;
console.log(resto);