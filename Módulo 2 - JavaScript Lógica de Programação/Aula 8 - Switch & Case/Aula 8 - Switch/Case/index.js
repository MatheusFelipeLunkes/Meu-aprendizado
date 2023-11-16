/* Aula 8 - Switch/Case */

/* Switch/Case funciona de uma forma muito parecida ao if, usado especificamente para controlar o fluxo quando temos apenas um tipo de checagem a ser feita, como no explo abaixo. A variavel diaSemana é checada pelo switch e cada case representa uma ação caso o condição seja verdadeira. */

const data = new Date('1987-04-23 00:00:00');

const diaSemana = data.getDay();

let diaSemanaTexto;

switch (diaSemana) {
    case 0:

        diaSemanaTexto = 'Domingo';
        break;
    case 1:

        diaSemanaTexto = 'Segunda-feira';
        break;
    case 2:

        diaSemanaTexto = 'Terça-feira';
        break;
    case 3:

        diaSemanaTexto = 'Quarta-feira';
        break;
    case 4:

        diaSemanaTexto = 'Quinta-feira';
        break;
    case 5:

        diaSemanaTexto = 'Sexta-feira';
        break;
    case 6:

        diaSemanaTexto = 'Sabado';
        break;
};

console.log(diaSemanaTexto);