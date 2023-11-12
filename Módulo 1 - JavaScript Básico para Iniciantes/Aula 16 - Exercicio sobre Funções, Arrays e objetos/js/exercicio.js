/* Aula 16 - Exercicio sobre Funções, Arrays e Objetos */


/* 
    Você deve criar um formulário, capturar os dados passados pelo usuário, adicioná-los em uma função que cria objetos e adicionar todo novo objeto a um array.

*/

function escopoGlobal () {

    const form = document.querySelector(".form"); // Capturando formulário
    
    const resultado = document.querySelector('.exibe-dados'); //capturando div, que exibe dados recolhidos

    const pessoas = []; // criando array



        function recebeDadosForm(e){
            e.preventDefault(); // prevenindo evento default no submit

            const nome = form.querySelector('.nome'); 

            const sobrenome = form.querySelector('.sobrenome');

            const peso = form.querySelector('.peso');

            const altura = form.querySelector('.altura');

            const pessoa = {
                nome: nome.value,
                sobrenome: sobrenome.value, 
                peso: peso.value,
                altura: altura.value
            } //criando objetoPessoa

                pessoas.push(pessoa); // inserindo no array 
                
        resultado.innerHTML += `Nome: ${nome.value} sobrenome: ${sobrenome.value} Peso: ${peso.value} Altura: ${altura.value} <br />`;
      
    }

    form.addEventListener ('submit', recebeDadosForm);

    console.log(pessoas);
}
escopoGlobal();
