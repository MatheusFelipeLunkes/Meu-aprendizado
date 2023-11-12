/* Aula 3 - Avaliação de curto-circuito */

/*
    && AND -> todas as expressoes precisam ser verdadeiras para retornar true, em caso de de uma das expressoes retornar false, retorna o proprio valor de false.
*/
   
   /* Quais são os valores que retornam falsy:
   0 = ZERO retorna em false
   ' ' " " ` ` = Strings vazias retornam false
   null / undefined = Null e undefined tambem retornam false
   NaN = Not a Number tambem retorna false
        Exemplo:
*/

console.log("Matheus" && 0 && "Marcos"); // Retorna em false e o proprio valor sendo o ZERO, e não continua o restante da expressão.

/*
    || OR -> Apenas uma expressão precisam avaliar como verdadeira, para retornar o valor verdadeiro e o próprio verdadeiro.
        Exemplo:
*/

console.log(0 || '' || NaN || 'True'); // Retorna o valor 'True', pois uma das condicionas avaliou como verdadeiro. Se todas as expressoes retornarem false, retorna o ultimo valor false.



