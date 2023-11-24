/* EXERCICIO 1 - Crie uma função que retorne o número de true valores existentes em um array. 

    EXEMPLO: 

    countTrue([true, false, false, true, false]) ➞ 2

    countTrue([false, false, false, false]) ➞ 0

    countTrue([]) ➞ 0

    NOTAS: 
    Retornar 0 se for fornecido um array vazio.
    Todos os itens da matriz são do tipo bool ( trueou false).

*/

let counts = 0;

 function countTrue(array) {

     for(let count of array) {
        if(!count === false) counts++;
    }
}
countTrue([false, false, true, false]);
console.log(counts);