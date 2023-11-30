/* EXERCICIO 9 - Crie uma função que concatene n arrays de entrada, onde n é variável. */


/*
Exemplos
concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]

concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]

concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]

concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
Notas
As matrizes devem ser concatenadas na ordem dos argumentos.
*/

function concat (...restoArray) {
const array = [];
let arrayList = restoArray;

for(let numeros of arrayList){
    for (let numero of numeros) {
        array.push(numero);
    }

}
console.log(array);
}

concat([1, 2, 3], [4, 5], [6, 7]);

concat([1], [2], [3], [4], [5], [6], [7]);

concat([1, 2], [3, 4]);

concat([4, 4, 4, 4, 4]);