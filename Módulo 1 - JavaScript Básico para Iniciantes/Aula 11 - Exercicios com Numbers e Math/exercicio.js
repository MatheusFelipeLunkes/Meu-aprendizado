const numeroDigitado = Number(prompt('Digite um número:'));

const resultadoRaizQuadrada = Math.sqrt(numeroDigitado);

const numeroInteiro = Number.isInteger(numeroDigitado);

const isNan = Number.isNaN(numeroDigitado);

const numCima = Math.ceil(numeroDigitado);

const numBaixo = Math.floor(numeroDigitado);

const numArredondado = numeroDigitado.toFixed(2);

document.body.innerHTML = `Seu número é: ${numeroDigitado}; <br />`;

document.body.innerHTML += `Raiz quadrada: ${resultadoRaizQuadrada} <br />`;

document.body.innerHTML += `É NaN: ${isNan} <br />`;

document.body.innerHTML += `Arredondado para baixo: ${numBaixo} <br />`;

document.body.innerHTML += `Arredondado para cima: ${numCima} <br />`;

document.body.innerHTML += `Com duas casas decimais: ${numArredondado}`;
