/* Aula 9 - Aprofundando em Numbers */

/*
    Tratando dados primitivos do tipo Number.

*/

let numero = 3.5; 
console.log(typeof numero);//Number

numero = numero.toString();//Transformamos a variavel do tipo Number em string.

let numero2 = 10.5634341;
console.log(numero2.toFixed(2)); // A função toFixed() serve para arredondar as casas decimais, lembrando que não se altera o valor real da variavel. Dica: usar apenas no final na hora de exibir os dados para o usuário.

console.log(Number.isInteger(numero2)); // A função isInteger() retorna um valor boolean (true/false), para checar se os  numeros são  inteiros.

console.log(Number.isNaN(numero2)); // A função isNaN(), retornar um valor boolean (true/false), se o dado for um numero.





/* A linguagem Javascript segue o padrão para calculos (IEE 754-2008), oque torna alguns calculos com pequenos números, imprecisos. 
    Exemplo: 

*/

let numb1 = 0.7;
let numb2 = 0.1;

console.log(numb1 + numb2); //0.7999999999999999

console.log(parseFloat(numb1 + numb2).toFixed(2)); // A função parseFloat(), analisa o dado e retorna um numero de ponto flutuante.
