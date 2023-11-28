/*EXERCICIO 5 - Escreva uma função que receba um número e retorne o perímetro de um círculo ou de um quadrado. A entrada estará no formato (letra l, número num), onde a letra será "s"para quadrado ou "c"para círculo , e o número será o lado do quadrado ou o raio do círculo. */

/*
Use as seguintes fórmulas:

Perimeter of a square: 4 * side.
Perimeter of a circle: 6.28 * radius.
O problema é que você só pode usar operadores aritméticos ou de comparação , o que significa:

Não declarações if...else.
Sem objetos.
Sem matrizes.
Sem métodos de formatação, etc.
O objetivo é escrever um código curto e sem ramificações .

Exemplos
perimeter("s", 7) ➞ 28

perimeter("c", 4) ➞ 25.12

perimeter("c", 9) ➞ 56.52
Notas
Nenhum arredondamento é necessário.
*/

function perimeter(letra, num) {
    const resultPerimeter = letra === "c" ? 6.28 * num : letra === "s" ? 4 * num : 'Nenhum do parametros encontrados.';
    return console.log(resultPerimeter);
}
perimeter("s", 7) 

perimeter("c", 4) 

perimeter("c", 9) 