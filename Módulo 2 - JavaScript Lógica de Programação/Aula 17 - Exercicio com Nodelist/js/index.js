/* Aula 17 - Exercicios com Nodelist */


const paragrafos = document.querySelector('.paragrafos');
const elementsP = document.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColor = estilosBody.backgroundColor;
const colorText = estilosBody.color;

for (let p of elementsP) {
    p.style.backgroundColor = backgroundColor;

    p.style.color = colorText;
}