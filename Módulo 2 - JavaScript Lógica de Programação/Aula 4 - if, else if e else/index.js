/* Aula 4 - if, else if e else */

/*
    if = SE
    else if = SENÃO SE
    else = SENÃO

        Exemplo:
*/
const hora = 16;

if(hora <= 12) {
    console.log("Bom dia");
} /* A expressão if(hora <= 12) avalia a SE o valor da variavel hora é menor ou igual a 12, e executa o restante do bloco. 
*/ 

// Estrutura condicional if, else if e else
if(hora <= 12) {
    console.log('Bom dia');
}else if(hora <= 18){
    console.log('Boa tarde');
}else {
    console.log('Boa noite');
}