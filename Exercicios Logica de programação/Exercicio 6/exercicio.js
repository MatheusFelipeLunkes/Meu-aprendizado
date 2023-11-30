/* EXERCICIO 6 - Escreva uma função que mova todos os zeros para o final de um array. Faça isso sem retornar uma cópia da matriz de entrada. */

/*
Exemplos
zeroesToEnd([1, 2, 0, 0, 4, 0, 5]) ➞ [1, 2, 4, 5, 0, 0, 0]

zeroesToEnd([0, 0, 2, 0, 5]) ➞ [2, 5, 0, 0, 0]

zeroesToEnd([4, 4, 5]) ➞ [4, 4, 5]

zeroesToEnd([0, 0]) ➞ [0, 0]
Notas:
Você deve alterar o array original.
Mantenha a mesma ordem relativa dos elementos diferentes de zero .
 */

function zeroesToEnd (array) {
    let arrayList = array;
    let transformList = '';
    let zeroList = '';

    for(let numeros of arrayList){
        if(numeros > 0) {
            transformList += numeros.toString();
            
        }else zeroList += numeros.toString();
    }

    transformList += zeroList;

    for (let num in transformList) {
        arrayList[num] = Number(transformList[num]); 
    }    
    
    console.log(arrayList);
  
} 



//indices    0  1  2  3  4  5  6
zeroesToEnd([1, 2, 0, 0, 4, 0, 5]);

zeroesToEnd([0, 0, 2, 0, 5]);

zeroesToEnd([4, 4, 5]);

zeroesToEnd([0, 0, 0, 0, 0, 1]);