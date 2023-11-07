/* Exercicios com const e let */

/* Imprima a seguinte frase criando váriaveis para cada um dos dados descritos na frase abaixo:

     "Matheus Felipe Lunkes tem 23 anos, nasceu em 1999, pesa 100 kg, tem 1.81 de altura e seu IMC é de 30.52409877598364. "


*/


const nome = "Matheus felipe";

const sobrenome = "Lunkes";

const anoDeNascimento = 1999;

const peso = 100;

const alturaEmM = 1.81;

let anoAtual = 2023;

const idade = anoAtual - anoDeNascimento;

const imcCalc = peso / (alturaEmM * alturaEmM); //Calculo do idice de massa corporal

console.log(`${nome} ${sobrenome} tem ${idade} anos, nasceu em ${anoDeNascimento}, pesa ${peso} kg, tem ${alturaEmM} e seu IMC é de ${imcCalc}.`);

// Matheus Felipe Lunkes tem 23 anos, nasceu em 1999, pesa 100 kg, tem 1.81 de altura e seu IMC é de 30.52409877598364.

