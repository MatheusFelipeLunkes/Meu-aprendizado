/* Aula 6 - Funções de Callback */

/*
    Funções de Callback, nos ajudam a ordenar o fluxo que queremos que nossas funções sigam, como no exemplo abaixo.
*/

function funcao1 (callback) {
    if(callback) callback();
    console.log('Função 1');
        
}

function funcao2 (callback) {
    if(callback) callback();
    console.log('Função 2');
}

function funcao3 (callback) {
    if(callback) callback();
    console.log('Função 3');
}

funcao1(funcao1Callback);

function funcao1Callback() {
    funcao2(funcao2Callback);
}
function funcao2Callback () {
    funcao3();
}
