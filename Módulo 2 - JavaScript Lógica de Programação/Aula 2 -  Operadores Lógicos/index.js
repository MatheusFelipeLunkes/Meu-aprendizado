/* Aula 2 - Operadores Lógicos */

/* 
    Oque são comparadores Logicos? 
        Comparadores logicos servem para comparar mais de uma condição. Sendo eles: 

        && -> AND -> E
        || -> OR  -> OU
        !  -> NOT -> NÃO

        Exemplos:
*/
console.log(true && true); // Usando && todas as expressões precisam ser verdadeiras para retornar true.

console.log(true || false); // Usando || apenas uma expressão precisa ser verdadeira para retornar true, mas no caso se todas forem false, toda checagem retorna false.

console.log (!true); // Negação inverte o valor boolean. (Não é muito usado).

//Exemplo:

const usuario = "Matheus";
const senha = '1234';

console.log(usuario === 'Matheus' && senha === '1234'); //True
