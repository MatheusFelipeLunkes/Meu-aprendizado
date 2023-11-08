/* Exercicio com variaveis */

/*
    Dado as variaveis abaixo você deve imprimir a seguinte sequencia:  B C A
        OBS: você não pode redeclarar as váriaveis.

    let varA = "A";
    let varB = "B";
    let varC = "C";

*/
    //Valor que deve ser impresso: B C A
let varA = "A";
let varB = "B";
let varC = "C";

console.log(varA, varB, varC);

//Decidi criar uma variavel temporaria para não perder o valor da variavel varA, e depois apontei cada uma das variaveis para as outras seguindo a sequencia.

let varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp; 

console.log(varA, varB, varC);

// Outra maneira de resolver o exercico sem precisar criar uma nova variavel;

[varA, varB, varC] = [varB, varC, varA]; 

console.log(varA, varB, varC); 


