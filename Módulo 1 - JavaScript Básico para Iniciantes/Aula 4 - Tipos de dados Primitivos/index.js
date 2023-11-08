/* Aula 4 - Tipos de dados Primitivos */

/* 
    Oque são dados primitivos? 
        Dados primitivos são dados que NÃO são representados atraves de um Objeto e por isso não possuem métodos.

    Quais são os dados primitivos no Javascript? 
        Existem 6 tipos de dados primitivos no Javascript, são eles: 

        # String;
        # Number;
        # Boolean; 
        # Null;
        # Udefined;
        # Symbol; 

    Exemplos:    
*/

const nome = 'Matheus'; // Dado primitivo do tipo # String;
console.log(typeof nome);

const numero = 1;// Dado primitivo do tipo Number;
console.log(typeof numero);

let nomeAluno; // Dado primitivo do tipo # undefined, não aponta para nenhum local da memória;
console.log(typeof nomeAluno);

let sobrenomeAluno = null; // Dado primitivo do tipo # Null, não aponta para nenhum local na memória;
console.log(typeof sobrenomeAluno);

const boolean = true; // Dado primitivo do tipo # Boolean, true/false (dado de operação lógica);
console.log(typeof boolean);

