/* Aula 6 - Operação Ternária */

/*
    Operadores ternários: 
        Operadores ternarios servem para simplificar e diminuir o numero de IFs no codigo, são usados para pequenas checagens que precisam de apenas um if e else.
    ? -> Para booleans verdadeiros
    : -> Para booleans falsos
        Exemplo:
*/

const pontuacaoUsuario = 999;

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';




if (pontuacaoUsuario >= 1000) {
    console.log("Usuário vip");
}else {
    console.log('Usuário Normal');
}