/* Aula 18 - While e Do While (Estrutura de repetição) */

/* 
    A estrutura de repetição While (Enquanto), ela checa as condicionais e depois executa um bloco de codigo, diferente de Do While, que executa as ações de bloco pelo menos uma vez e depois checa as condicionais.
        OBS: Sempre que While e Do while retornarem false a estrutura se encerra.
            Exemplo:
*/

function randomNumber() {
    const randomNumber = Math.random() * (max - min) + min;
    return Math.floor(randomNumber);
}
const min = 1;
const max = 50;
let random = randomNumber(min, max);


while(random !== 10) {
    random = randomNumber(random);
    console.log(random);
}

do {
    random = randomNumber(random);
    console.log(random);
}while (random !== 10);