/* Aula 8 - Aprofundando em Strings */

/* 
    Strings são indexadas como no exemplo:
                   012345689 
    let umTexto = "Olá Mundo";

*/

const nome = "Matheus";

console.log(nome.charAt(2)); // charAt é uma função que busca um caractere na exata posição passada pelo usuário;

console.log(nome.concat(' Felipe Lunkes')); //concat é uma função de concatenação de strings.

console.log(nome.indexOf('eus', 3 )); //indexOf é uma função para localizar em qual indice a palavra buscada pelo usuário começa.

console.log(nome.replace('Matheus', 'Felipe')); // replace é um função que aceita expressôes regulares, mas pode substituir uma palavra por outra dentro de uma string.

console.log(nome.length); // length método usado para saber o tamanho da string contando com os espaços.

console.log(nome.slice(3, 7)); // A função slice serve para separar trechos determinados pelo index da string.

console.log(nome.split('')); //split usado para separar palavras dentro da string, podendo receber parametros especificos.

console.log(nome.toLocaleUpperCase()); // função que tranforma toda a string em letras Maiusculas;

console.log(nome.toLocaleLowerCase()); // função que transforma toda a string em letras Minusculas;

