/* Aula 2 - Parametros da Função */

// Em funções declaradas com 'Function' do jeito classico elas tem um parametro chamado 'Arguments', que recebe todos os orgumentos recebidos da função mesmo que não foram utilizados.

function funcaoVazia () {
    console.log(arguments);
    // Podemos manipular 'Arguments' como uma forma de objeto pois possui seus indices.
}

funcaoVazia('a', 'b', 1, 2, 3, 4, {nome: 'Matheus', sobrenome: 'Lunkes', idade: 24});



// Nos parametros da função podemos atribuir valores padroes para casos quando não recebemos valores reais.

function funcaoDeNumeros (a = 0, b = 0, c = 0) {
    console.log(a + b + c); 
}
funcaoDeNumeros(2, 3);


// Podemos desestruturar objetos diratamente dentro dos parametros da função.

function recebeObjetos ({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade); 
}

recebeObjetos({nome: 'Matheus', sobrenome: 'Lunkes', idade: 24});
// NOTA: Arrows Functions, não podemos usar 'Arguments' para manipular parametros. 