/* Aula 23 - Tratando e lançando erros com (Try, Catch e Throw) */


/*
    O bloco try catch, serve para tratar erros caso ele não consiga executar oque esta dentro do bloco try.
    OBS: Não é interessante mostrar erros para os usuarios, referentes a problemas no software.
        Exemplo:
*/


try {
    console.log('Acessando Servidor', error);
}catch (err) {
    console.log('Servidor não encontrado', err);
}

// throw new Error() cira um novo erro, e podemos tratar dentro das nossas proprias funções;

