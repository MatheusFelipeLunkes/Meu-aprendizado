/* Aula 10 - Mais diferenças entre Var e Let */

// Let tem escopo de bloco {.... bloco} tudo que está dentro do escopo de bloco com Let não pode ser acessado por outras funções ou variaveis
    const verdadeira = true;
    if (verdadeira) {
        let nome = 'Matheus Felipe Lunkes';
        console.log(nome);

    }
    

// Var só tem escopo de função, podendo extrair valores de fora da função e atualiza-los
var nome = 'Matheus';

function falaOi() {
    nome = "Lunkes";
    console.log(nome)
};
falaOi();
console.log(nome);