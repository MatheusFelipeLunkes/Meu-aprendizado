/* Aula 14 - Objetos (Básico) */

/*
    Oque é um objeto?
        Um objeto é uma entidade independente, que contem propriedades, atributos e tipos.
            Exemplo:
*/

const pessoa = {
    nome: "Matheus",
    sobrenome: "Lunkes",
    idade: 23
} // Criando um objeto com propriedades relacionadas

// Criando uma função que cria objetos ou Factory
 function criaCarro (nome, modelo, ano) {
    return {
        nome: nome,
        modelo: modelo,
        ano: Number(ano)
    }

 }
const carro =  criaCarro('Fusca', 'Semi-novo', 1986);

 console.log(carro);


 // Podemos guardar funções dentro de um objeto e acessar os valores por meio das chaves. 
 
 const calc = {
   soma(x, y) {
        return x + y
    },
    subtração(x, y) {
        return x - y
    }

 }

 console.log(calc.soma(2, 7), calc.subtração(7,2)); 