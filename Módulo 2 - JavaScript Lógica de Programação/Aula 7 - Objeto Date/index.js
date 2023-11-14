/* Aula 7 - Objeto Date */

/* 
    A função Date é uma função construtora, toda função construtora começa com letra maiuscula.
    O Objeto Date está sempre em Milessegundos
        Exemplo:
*/
const tresHoras = 60 * 60 * 3 * 1000;

const data = new Date(0 + tresHoras); // 01/01/1970 Timesstamp unix ou época unix

console.log (data.toString());

const date = new Date(2022, 10, 24, 15, 0, 59); // ANO / MES / DIA / HORA / MINUTOS / MILESSEGUNDOS

console.log(date.toString());

const novaData = new Date('2023-11-13 20:55:50');
console.log(novaData.toString()); // Podemos passar a data como string 

const newDate = new Date();

console.log('Para dia', newDate.getDate());// A função getDate() obtem o numero do dia do mês.
console.log('Para mês', newDate.getMonth() + 1); // A função getMonth() obtem o numero do mês, lembrando sempre que em javascript o mes 1 começa na posição zero então para obtermos os valores reais devemos somar 1.
console.log('Para ano', newDate.getFullYear()); // A função getFullYear() obtem o numero do ano atual;
console.log('Para hora', newDate.getHours()); // A função getHours() obtem o numero da hora atual.
console.log('Para minutos', newDate.getMinutes()); // A função getMinutes() obtem o numero de minutos atuais.
console.log('Para milessegundos', newDate.getMilliseconds()); // A função getMilliseconds() obtem os milésimos de secundos.

console.log('Para dia da semana', newDate.getDay()); // A função getDay() obtem o dia da semana (Segunda á Domingo).

