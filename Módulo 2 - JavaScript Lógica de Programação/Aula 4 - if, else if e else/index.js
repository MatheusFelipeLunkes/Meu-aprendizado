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

// Exercitando if, else if e else:

const numero = Number(20);
console.log(typeof (numero));

if (numero >= 0 &&  numero <= 20) {
    console.log('O numero é maior que zero e menor que 20, tente adivinhar!');
} else {
    console.log("O numero não está entre zero e 20!");
} // O primeiro if retorna false na checagem da expressão, e executa o bloco else.

if (numero !=  Number) {
    console.log('Nosso numero é do tipo Number');
}else {
    console.log('O numero não é um Number');
} 
// Podemos checar os tipos dados, se numero for do tipo Number avalia como verdadeiro. 
