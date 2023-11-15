/* Aula 12 - Atribuição via desestruturação (Objetos) */

const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Lunkes',
    idade: 30,
    endereco: {
        rua: 'Av dos bobos',
        numero: 0
    }
}
// Atribuição via desestruturação de Objetos.
// Assim como arrays, os objetos tratamos praticamente da mesma forma.

const {nome, sobrenome, ... restoObjeto} = pessoa;

console.log(nome, sobrenome, restoObjeto);
// A variavel restoObjeto foi desestruturada mas para as duas variaveis rua, numero mas não perdeu seu valor original;
const {endereco: {rua, numero}} = restoObjeto;
console.log(rua, numero);
