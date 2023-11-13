function calculadoraIMC () {
    const form = document.querySelector(".form");
    const exibeResult = document.querySelector(".exibe-resultado");
    
    function coletaDadosInput(e) {
        e.preventDefault();

        const peso = Number(form.querySelector(".peso"));
        const altura = Number(form.querySelector(".altura"));
        
        calcIMC(peso, altura);
    }
    function calcIMC () {
        const resultado = peso.value / (altura.value) ** 2;
        checaTabelaIMC(resultado);
    }
    function checaTabelaIMC (resultado) {
        const tabelaIMC = [
            'Abaixo do peso',
            'Peso normal',
            'Sobrepeso',
            'Obesidade Grau 1',
            'Obesidade Grau 2',
            'Obesidade Grau 3'
        ];

        if(resultado >= 40) {
            exibeResultado(tabelaIMC[5])

        }if(resultado >= 35 && resultado <= 39.9){
            exibeResultado(tabelaIMC[4])

        }if(resultado >= 30 && resultado <= 34.9){
            exibeResultado(tabelaIMC[3])

        }if (resultado >= 25 && resultado <= 29.9){
            exibeResultado(tabelaIMC[2])

        }if (resultado >= 18.5 && resultado <= 24.9){
            exibeResultado(tabelaIMC[1])

        }else if(resultado <= 18.5){
            exibeResultado(tabelaIMC[0]);

        } }

        form.addEventListener('submit', coletaDadosInput);

        function exibeResultado (tabelaIMC) {
            exibeResult.innerHTML = `<p>Você está: ${tabelaIMC}.</p>`
        }
    
    }
  
calculadoraIMC()