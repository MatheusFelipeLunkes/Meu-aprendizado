/* Aula 11 - Exercicios com Numbers e Math */

/* Receba a entrada que o usuario digitar, e imprima os seguintes resultados:
    - Mostre o numero digitado pelo usuario;
    - A raiz quadrada do numero;
    - Verifique se o numero é inteiro;
    - Verifique se o numero é um NaN;
    - Arredonde o numero para baixo;
    - Arredonde o Numero para cima;
    - Mostre o numero com apenas 2 casas decimais.

*/


const numeroDigitado = Number(prompt('Digite um número:')); // Recebendo e tratando o numero

const resultadoRaizQuadrada = Math.sqrt(numeroDigitado); //Raiz quadrada

const numeroInteiro = Number.isInteger(numeroDigitado); //Numero Inteiro

const isNan = Number.isNaN(numeroDigitado); //IsNaN

const numCima = Math.ceil(numeroDigitado); //Arredondando para cima

const numBaixo = Math.floor(numeroDigitado); //Arrendondando para baixo

const numArredondado = numeroDigitado.toFixed(2); // 2 Casas decimais

document.body.innerHTML = `Seu número é: ${numeroDigitado}; <br />`;

document.body.innerHTML += `Raiz quadrada: ${resultadoRaizQuadrada} <br />`;

document.body.innerHTML += `É NaN: ${isNan} <br />`;

document.body.innerHTML += `Arredondado para baixo: ${numBaixo} <br />`;

document.body.innerHTML += `Arredondado para cima: ${numCima} <br />`;

document.body.innerHTML += `Com duas casas decimais: ${numArredondado}`;
