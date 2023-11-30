/* Aula 12 - Arrays (Básico) */


/* 
    Oque é um Array?
        Arrays são basicamente uma lista de objetos. Onde podemos armazenar varios dados diferentes.
        Um array assim como uma string, eles também são indexados, mas no caso do array eles são indexados por valor e suas respectivas posições dentro da lista.
            Exemplo:
*/
//Indices dentro do array:   
//                  0           1           2       3  
const frutas = ['Laranja', 'Melancia', 'Morango', 'Uva'];

frutas.unshift('Maçã'); // A função unshift() adiciona ao inicio do array, e realoca todos os indices ao mais uma posição no array

frutas.push('Goiaba'); // A função push() adiciona ao final do array o valor repassado

const remove = frutas.pop(); // A função pop() remove o ultimo indice do array.

const removeFruta = frutas.shift(); // A função sifht remove o primeiro indice do array.

console.log(remove);





