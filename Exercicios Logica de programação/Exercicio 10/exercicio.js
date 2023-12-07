/* EXERCICIO 10 - Você comprou alguns cachos de frutas no fim de semana. Crie uma função que divida um grupo em objetos singulares dentro de um array. */

/*
Exemplos
splitBunches([
  { name: "grapes", quantity: 2 }
]) ➞ [
  { name: "grapes", quantity: 1 },
  { name: "grapes", quantity: 1 }
]


splitBunches([
  { name: "currants", quantity: 1 },
  { name: "grapes", quantity: 2 },
  { name: "bananas", quantity: 2 }
]) ➞ [
  { name: "currants", quantity: 1},
  { name: "grapes", quantity: 1 },
  { name: "grapes", quantity: 1 },
  { name: "bananas", quantity: 1 },
  { name: "bananas", quantity: 1 }
]
Notas
A matriz de entrada nunca estará vazia.
Os objetos sempre terão um namee quantitymais 0.
O objeto retornado deve ter cada fruta na mesma ordem do original.
*/

function splitBunches(array) {
    const arrayFrutas = array;
    const newArrayFrutas = [];
    
    for(let indexof of arrayFrutas) {
        const fruit = {name: indexof.name, quantity: 1};

        if(indexof.quantity <= 1) {
            newArrayFrutas.push(fruit);   
        }else {
            for(let i = indexof.quantity; i >= 1; i--) {
                newArrayFrutas.push(fruit);
                indexof.quantity - 1;

            }
            
        }
        console.log(newArrayFrutas);
    }
}

splitBunches([
    { name: "grapes", quantity: 2 }
  ])

splitBunches([
    { name: "currants", quantity: 1 },
    { name: "grapes", quantity: 2 },
    { name: "bananas", quantity: 2 }
  ])
