/* Aula 5 - Closures */

/*
    Closure basicamente é a habilidade da função em acessar seu escopo Léxico.
    Exemplo:
*/
// A função abaixo recebe um parametro 'nome' na chamada da sua função, que retorna uma nova função, sabendo disso acessa o escopo do seu vizinho para buscar o parametro nescessário para fazer o retorno.  
function criaNome (nome) {
    return function retornaNome () {
        return nome;
    }
}
// Podemos colocar variaveis e funções como parametros.
let name = 'Pedro';

const nome = criaNome(name);
const nome2 = criaNome('Felipe');

console.log(nome(), nome2());