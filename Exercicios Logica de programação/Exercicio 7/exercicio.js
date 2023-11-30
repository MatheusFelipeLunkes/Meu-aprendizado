/* EXERCICIO 7 - Escreva uma função que calcule as horas extras e o pagamento associado às horas extras. */

/*
Trabalhando das 9h às 17h: horário normal
Depois das 17h é hora extra
Sua função obtém um array com 4 valores:

Início do dia útil, em formato decimal, (notação de dia de 24 horas)
Fim do dia útil. (Mesmo formato)
Taxa horária
Multiplicador de horas extras
Sua função deve cuspir:

$+ ganho naquele dia (arredondado para o centésimo mais próximo)
Exemplos
overTime([9, 17, 30, 1.5]) ➞ "$240.00"

overTime([16, 18, 30, 1.8]) ➞ "$84.00"

overTime([13.25, 15, 30, 1.5]) ➞ "$52.50"
2º exemplo explicado:

De 16 a 17 é regular, então 1 * 30 = 30
De 17 a 18 é hora extra, então 1 * 30 * 1.8= 54
30 + 54= $ 84,00
*/

function overTime(cargaHorariaFuncionario) {

    const horaEntrada = cargaHorariaFuncionario[0];
    const horaSaida = cargaHorariaFuncionario[1];
    let resultDay;
    if (horaSaida > 17) {
        const horaExtra = (horaSaida - 17) * cargaHorariaFuncionario[2] * cargaHorariaFuncionario[3];
        resultDay = (17 - horaEntrada) * cargaHorariaFuncionario[2] + horaExtra;
    } else resultDay = (horaSaida - horaEntrada) * cargaHorariaFuncionario[2];


    console.log(`R$ ${resultDay.toFixed(2)}`);

}


overTime([9, 17, 30, 1.5]);

overTime([16, 18, 30, 1.8]);

overTime([13.25, 15, 30, 1.5]);

overTime([7, 19, 16, 1.5]);