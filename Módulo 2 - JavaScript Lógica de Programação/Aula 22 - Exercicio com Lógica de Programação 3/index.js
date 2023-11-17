/* Aula 22 - Exercicio com lógica de programação 3  */

/* 
    Escreva uma função que recebe um numero e retorne o seguinte:
    - Numero é divisivel por 3 = Fizz
    - Numero é divisivel por 5 = Buzz
    - Numero é divisivel por 3 e 5 = FizzBuzz
    - Numero Não é divisivel por 3 e 5 = Retorna o próprio numero 
    - Checar se o numero é realmente um numero = retornar o próprio numero;
    - Use a função com numeros de 0 a 100;
*/

function fizzBuzz (numero) {
    if (typeof numero === 'number') {
        console.log('É um Number');
    }if(numero % 3 === 0 && numero % 5 === 0) {
        return 'FizzBuzz';
    }if (numero % 3 === 0) {
        return 'Fizz';
    }if(numero % 5 === 0) {
        return 'Buzz';
    }else {
        return numero;
    }


}

for ( let i = 0; i <= 100; i++) {
    console.log(fizzBuzz(i));
}
