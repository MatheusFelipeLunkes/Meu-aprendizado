/*  EXERCICIO 3 - Crie uma função que receba um array de números e retorne "Boom!"se o dígito 7 aparecer no array. Caso contrário, retorne "there is no 7 in the array".

Exemplos:

sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// None of the items contain 7 within them.

sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 contains the number seven.

*/
/* EXPLICANDO LINHA DE RACIOCINIO: "Para saber se existe um numero 7 em um array, seja ele com 1 ou mais casas decimais, decidi transforma - lo em uma string primeiro usando um laço de repetição, e após isso chequei invertido, usando a propriedade indexOf(), caso ela retornasse -1 eu saberia que não existiria nenhum numero 7 dentro da string." */

function sevenBoom (array) {
    let numbers = '';
    for(let number of array) {
        numbers += number.toString();
    }
   
    if(numbers.indexOf('7') === -1) {
        console.log("there is no 7 in the array");

    }else console.log("Boom!");
}
//console.log(listNumbers, typeof listNumbers)  

sevenBoom([1, 2, 3, 4, 5, 6, 7]);

sevenBoom([8, 60, 33, 100]);

sevenBoom([2, 55, 60, 97, 86])

