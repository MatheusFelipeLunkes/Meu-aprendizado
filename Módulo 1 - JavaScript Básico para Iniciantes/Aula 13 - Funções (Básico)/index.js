/* Aula 13 - Funções (Básico) */

/* 
    Oque são funções? 
        Funções são um conjuto de instruções que realizam uma tarefa, considerando os parametros definidos e a  regra do negocio.
            Exemplo:
*/

function somar(num1 = 0, num2 = 0){

    console.log(num1 + num2);
    return 'Conta Feita!'
}

const resultado = somar();

console.log(resultado);

/*
    OBS: Todas a funções devem ser incializadas.
Funções podem retornar valores para variaveis fora do escopo do bloco da função. 

*/

const raiz = function (x) {
    return x ** 0.5;
}; // Função Anonima

console.log(raiz(25));


const subtração = (n) => {
    return n - 1;
} // Arrow Function

console.log(subtração(10));