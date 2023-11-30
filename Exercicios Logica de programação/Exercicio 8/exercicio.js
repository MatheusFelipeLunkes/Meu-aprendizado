/* EXERCICIO 8 - Crie uma função que receba números B e M como argumentos e retorne a derivada da função f(x)=x^b em relação a x avaliada em x=m, onde b e m são constantes. */

/*
Exemplos
derivative(1, 4) ➞ 1

derivative(3, -2) ➞ 12

derivative(4, -3) ➞ -108
Notas
^ no contexto deste desafio significa "à potência de", também conhecido como operador "expoente".
*/

function derivative(b, m) {
const resultado = ( (m**b) * b ) / m;
console.log(resultado);

}

derivative(1, 4)

derivative(3, -2)

derivative(4, -3)