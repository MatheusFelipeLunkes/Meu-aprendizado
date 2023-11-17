/* Aula 20 - Exercicio com lógica de programação 1 */

/*
    Escreva uma função que recebe 2 números e retorna o maior deles
 */

const num1 = Number(prompt('Digite um Numero:'));

const num2 = Number(prompt('Digite outro Numero:'));

function numeroMaior (num1, num2) {

    if(num1 > num2 ) {
        alert(`O maior numero entre eles é: ${num1}`);
    }else {
        alert(`O maior numero entre eles é: ${num2}`);
    }
}
numeroMaior(num1, num2);