/* Aula 25 - SetInterval e setTimeout */

/* A função setInterval, ela seta um parametro de tempo em milessegundos para a execução do codigo dentro do bloco, ela nunca terminará se não usarmos o clearInterval */


function mostraHora () {
    let date = new Date();
    return date.toLocaleTimeString('pt-BR', {
        hours12: false
    })
}
 
const timer = setInterval(() => {
    console.log(mostraHora());
}, 1000);


setTimeout (() => {
    clearInterval(timer);
}, 5000);