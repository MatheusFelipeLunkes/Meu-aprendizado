/* Aula 10 - Objeto Math */

/* O objeto Math é usado para trabalhar com expressões numéricas, é um recurso disponibilizado da própria linguagem.
 */

let num1 = 1.952333434;
let num2 = Math.floor(num1); // A função Mat.floor() arredonda o numero sempre para baixo.
console.log(num2); 

let num3 = Math.ceil(num1); // A função Math.ceil() arredonda o numero sempre para cima.
console.log(num3);

console.log(Math.round(num1)); // A função Math.round() arredonda o numero para cima se as casas decimais for maiores que .5, e se forem menores arredonda pra baixo.

console.log(Math.max(1, 2, 11, 453, 5, 10,)); // A função Math.max() retorna o maior valor da da sequencia;

console.log(Math.min(1, 2, 11, 453, 5, 10,)); // A função Mathe.min() retorna o menor valor da sequencia.

console.log(Math.random()); // A função Math.random() cria um numero aleatorio entre 0 e 0.9.