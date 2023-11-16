/* Aula 14 - Exercicios com For */

/* Enunciado do Exercicio
    Você deve desestruturar um array de objetos usando um laço de repetição e exibi-los no seu html.
*/

const elementos = [ 
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

function desestruturaArray() {
    for (let i = 0; i < elementos.length; i++) {
        const tag = elementos[i].tag;
        const texto = elementos[i].texto;
        console.log(elementos[i]);
        exibeElementos (tag, texto);
    }
}

function exibeElementos(tag, texto) {

    const container = document.querySelector('.container h1');
    const elemento = document.createElement(tag);

    console.log(elemento, texto);
    
    container.appendChild(elemento);
    elemento.innerHTML = texto;
}

desestruturaArray();