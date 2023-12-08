/* Aula 4 - Escopo Léxico */

/*
    Escopo Léxico em outras palavras quer dizer que funções buscam por variaveis primeiro dentro do seu próprio escopo, para em seguida buscarem em seus vizinhos e caso não encontrem nada retornem algum erro. 
    Observe que no codigo abaixo uma função chama outra função mas a variavel NomeCompleto foi reatribuida, antes da função ser chamada, fazendo com que seu valor não fosse mais o mesmo.
*/


let nomeCompleto  = 'Matheus Felipe Lunkes';

function exibeNome() {
    let nome = 'Bruno';
    console.log(nome, nomeCompleto);
}

//Função que chama outra função, mas que pode alterar em valores fora de seu escopo; 
function usaExibeNome () {
    nomeCompleto = 'Felipe Lunkes'; 
    nome = 'Pedro'; // Mas por que neste caso ele não reatribui o valor? Por se tratar de um escopo 'Exclusivo', somente da outra função; 
    exibeNome();
}
usaExibeNome();