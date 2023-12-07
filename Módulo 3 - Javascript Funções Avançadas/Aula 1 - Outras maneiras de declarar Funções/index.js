/* Aula 1 - Outras maneiras de declarar Funções */


//Jeito classico de declarar funçôes
function funcaoClassica (funcao) {
    funcao();
    console.log('Sou uma Function');
}

// Com function expression - Podemos colocar nossas funçoes dentro de variaveis e passa - las para outras funções.
const umaFuncaoComoVariavel = function() {
    console.log('Posso ser uma variavel com o valor de uma função e quando requisitado trabalho como uma função');
}

funcaoClassica(umaFuncaoComoVariavel);

// Arrow Function
const arrowFunction = () => {
    console.log('Sou uma function Arrow');
}

// Dentro de objetos podemos criar Funções, so precisamos usar a chave do objeto para acessar nossa função.

const calculadora = {
    soma: (num, num2) => { return num + num2; },
    multiplicação: (num, num2) => { return num * num2; }
}
console.log(calculadora.soma(2, 5), calculadora.multiplicação(4, 4));
