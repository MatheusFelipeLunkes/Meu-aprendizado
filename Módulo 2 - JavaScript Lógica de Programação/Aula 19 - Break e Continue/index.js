/* Aula 19 - Break e Continue */

/*
    Para que serve o Break e o Continue? 
        Break e Continue servem para, parar o fluxo do laço ou continuar caso um fluxo tenha sido interrompido por qualquer que seja o motivo.
            Exemplo:
*/

const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8 , 9, 10];
const numArray = [];
for (let numero of numeros) {

    if (numero === 4) {
        continue; // Continue ele pula a sequencia baseada na condição 
    }if (numero >= 8) {
        break; // Break termina a iteração
    }
    numArray.push(numero); // Podemos iterar/dividir arrays

    console.log(numero);
}
console.log(numArray);