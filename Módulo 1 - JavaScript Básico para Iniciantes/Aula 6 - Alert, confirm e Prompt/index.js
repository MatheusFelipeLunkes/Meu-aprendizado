/* Aula 6 - Alert, Confirm e Prompt */

/* 
    Oque é o alert, ou window.alert() em Javascript?

        Alert em Javascript é apenas um método que mostra uma caixa de diálogo de aviso com conteúdo especificado e um botão OK.
            Exemplo: 
*/

alert("ERROR NOT FOUND!");

/*
    Oque é window.confirm()?
        É um método que nos mostra uma caixa de mensagem com dois botões, CANCELAR e OK;
            Exemplo: 
*/

confirm("Você é maior de 18 anos?");

/*
    Oque é window.prompt()?
        É um método que exibe uma caixa de mensagem solicitando ao usuário uma entrada de algum texto.
        OBS: Quando trabalhamos com Prompt devemos criar uma variavel para salvar seus valores. Todos os valores retornam como string. 
            Exemplo:
*/
const userCity = prompt("Qual cidade você mora?");

console.log(userCity);

