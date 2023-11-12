/* Aula 2 - Operadores de comparação */

/* 
    Oque são operadores de comparação?
        Operadores de comparação são responsaveis por comparar valores, sejam eles numéricos booleans etc.
        Eles são: 

            > maior que
            >= maior ou igual a
            < menor que 
            <= menor ou igual a
            == igualdade (valor)
            === igualdade estrita (valor e tipo)
            != diferente (valor)
            !== difrente estrito (valor e tipo)
                Exemplos:
*/
 
console.log(10 > 5); // Operador > maior que checa se 10 é maior que 5, retornando um valor boolean "True".

console.log (10 >= 5) // Operador >= maior ou igual, no caso se uma das duas comparações for true a comparação retorna true da mesma forma.

console.log(10 < 5); // Operador < menor que, retorna false assim como os operadores maior que ou maior igual.

console.log(10 == '10'); /* Operador == compara diretamente o valor (variaveis), e retorna um valor boolean (true/false).
OBS: Não usamos este operador em Javascript.
*/
console.log (10 === 10); // Operador === Compara os valores e seus tipos. OBS: Usar sempre esse comparador para igualdades.

console.log('10'!= 10); // Assim como o operador de igualdade não usamos este  operador de diferente.

console.log( 10 !== 10 ); // Operador !== compara valores estritos e tipos. (Sempre utilizar este);

