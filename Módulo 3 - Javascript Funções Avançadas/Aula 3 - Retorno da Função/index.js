/* Aula 3 - Retorno da Função */

/* A palavra return significa que, estamos retornando algo dentro da função, e alem disso, ela encerra a função no determinado momento em que recebe esse return. 
Exemplo:
*/

function soma(a, b) {
    return a + b;
    //Tudo que vem depois do return, não é executado como no caso a variavel abaixo.
    const nome = 'Matheus';
}

console.log(soma(2,3));


/* Basicamente podemos ter funções dentro de funções. Toda função 'child' pode usar parametros da função 'Pai', para iterar ou trabalhar valores. Para forçar valores para fora da funções podemos salva-los em novas variaveis.*/

function criaMultiplicador (multiplicador) {
    return function(num) {
        return num * multiplicador;
    }
}

const duplicador = criaMultiplicador(2);
const dezVezesMais = criaMultiplicador(10);

console.log(duplicador(3), dezVezesMais(5));