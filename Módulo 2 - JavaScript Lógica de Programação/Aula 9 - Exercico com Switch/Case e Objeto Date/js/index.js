// Refatorando Codigo
const h1 = document.querySelector('.container h1');
const date = new Date();
h1.innerHTML = date.toLocaleDateString('pt-BR', {dateStyle: 'full'});