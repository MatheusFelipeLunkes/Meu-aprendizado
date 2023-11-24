/*  EXERCICIO 2 - Crie uma função que pegue a idade em anos e retorne a idade em dias.

Exemplos:

calcAge(65) ➞ 23725

calcAge(0) ➞ 0

calcAge(20) ➞ 7300

Notas:

Use 365 dias como a duração de um ano para este desafio.

Ignore os anos e dias bissextos entre o último aniversário e agora.
Espere apenas entradas inteiras positivas.

 */

function calcAge(age) {
    const calcAge = parseInt(age) * 365;
    console.log(calcAge);
}
calcAge(65); // 23725
calcAge(0);  // 0
calcAge(20); // 7300