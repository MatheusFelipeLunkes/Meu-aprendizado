function escopoGlobal() {
     const data = new Date();
     formataData(data);
 
     function formataData (data) {
 
         let diaSemana = data.getDay();
         const diaSemanaNumero = data.getDate();
         let mes = data.getMonth(); 
         const ano = data.getFullYear();
         const hora = data.getHours();
         const minutos = data.getMinutes();
        
         switch(diaSemana){
             case 0:
                  diaSemana = 'Domingo';
                  break;
             case 1:
                  diaSemana = 'Segunda-feira';
                  break;
             case 2:
                  diaSemana = 'Terça-feira';
                  break;
             case 3:
                  diaSemana = 'Quarta-feira';
                  break;
             case 4:
                  diaSemana = 'Quinta-feira';
                  break;
             case 5: 
                  diaSemana = 'Sexta-feira';
                  break;
             case 6:
                  diaSemana = 'Sabado';
                  break;
         }
         switch(mes){
             case 0:
                  mes = 'Janeiro';
                  break;
             case 1:
                  mes = 'Fevereiro';
                  break;
             case 2:
                  mes = 'Março';
                  break;
             case 3:
                  mes = 'Abril';
                  break;
             case 4:
                  mes = 'Maio';
                  break;
             case 5: 
                  mes = 'Junho';
                  break;
             case 6:
                 mes = 'Julho';
                  break;        
             case 7:
                  mes = 'Agosto';
                  break;
             case 8:
                  mes = 'Setembro';
                  break;
             case 9:
                  mes = 'Outubro';
                  break;
             case 10:
                  mes = 'Novembro';
                  break;
             case 11:
                  mes = 'Dezembro';
                  break;
                 }
         return {
             diaSemana: diaSemana,
             diaSemanaNumero: diaSemanaNumero,
             mes: mes,
             ano: ano,
             hora: hora,
             minutos: minutos
         };
     }
     const container = document.querySelector(".container h1");
     const objDate = formataData(data);
 
     function exibeData() {
         container.innerHTML = `${objDate.diaSemana}, ${objDate.diaSemanaNumero} de ${objDate.mes} de ${objDate.ano}, ${objDate.hora}:${objDate.minutos}`;
     }
     exibeData();
 }   
 
 escopoGlobal();