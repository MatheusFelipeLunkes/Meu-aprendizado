/* Aula 13 - For Classico (Estrutura de repetição) */


/* Oque é uma estrutura de repetição?
        Uma estrutura de repetição nada mais é, que, uma função que nos permite executar um comando repetidas vezes ou repetir um processo até que suas condicionais sejam atingidas.
            Exemplo:
*/
/* No for classico usamos a seguinte estrutura começamos criando uma variavel de controle (geralmente a variavel i), precisamos logo em seguida passar um condição para checar se o laço deve continuar, e por ultimo atualizamos nosssa variavel de controle, para que ela possa cessar quando as condições forem atingidas*/

for (let i = 400; i <= 410; i++){
        console.log(`Estamos na linha ${i}`);
}
// Podemos inverter e decrementar tambem

const frutas = ['Maça', 'Uva', 'Morangos', 'Laranjas'];

for (let i = 0; i < frutas.length; i++){
    console.log (frutas[i]);
}
