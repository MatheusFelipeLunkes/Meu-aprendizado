/* Exercicio com strings */


/* Questão: 

    Você deve solicitar ao usuário o seu nome completo.

    Responda as seguintes perguntas:

    O seu nome é:
    Quantas letras tem o seu nome?
    A segunda letra do seu nome é:
    Qual é o primeiro indice da letra do seu nome?
    As ultima 3 letras do seu nome são? 
    As palavras do seu nome são? 
    Seu nome com letras maiúsculas:
    Seu nome com letras minúsculas:

*/

const nomeCompleto = String(prompt('Digite seu nome completo:'));

document.body.innerHTML = `O seu nome é: ${nomeCompleto} <br/ >`;

document.body.innerHTML += `Quantas letras teu o seu nome? ${nomeCompleto.length} <br />`;

document.body.innerHtml += `A segunda letra do seu nome é: ${nomeCompleto.indexOf(1)} <br />`;

document.body.innerHTML += `Qual é o primeiro indice da letra do seu nome? ${nomeCompleto.indexOf(0)} <br />`;

document.body.innerHTML += `As ultima 3 letras do seu nome são: ${nomeCompleto.slice(18, 21)} <br /> `;

document.body.innerHTML += `As palavras do seu nome são: ${nomeCompleto.split(' ')} <br />`;

document.body.innerHTML += `Seu nome com letras Maisuculas fica: ${nomeCompleto.toLocaleUpperCase()} <br />`;

document.body.innerHTML += `Seu nome com letras Minusculas fica: ${nomeCompleto.toLowerCase()}`;


