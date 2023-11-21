/* Aula 26 - Criando um timer com setInterval */
function timer() {

    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    
    function criaHoraDosSegundos(segundos){
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }
    
    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(()=> {
            segundos++
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }

    iniciar.addEventListener('click', function(e){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    });

    pausar.addEventListener('click', function(e){
        relogio.classList.add('pausado')
        clearInterval(timer);
    });
    
    zerar.addEventListener('click', function(e){
        clearInterval(timer);
        relogio.classList.remove('pausado');
        relogio.innerHTML = '00:00:00';
        segundos = 0;

    });

}

timer(); 