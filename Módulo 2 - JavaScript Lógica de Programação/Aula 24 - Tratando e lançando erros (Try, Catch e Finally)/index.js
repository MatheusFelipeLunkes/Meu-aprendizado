/* Aula 24 - Trantando e lançado erros (Try, Catch e Finally) */

// Finally sempre é executado.

try {
    // Bloco executado quando NÃO há erros;
}catch (e) {
    // Bloco executado quando há erros;
}finally {
    // Bloco executado em qualquer circustancia.
}

function retornaHora (data) {
    if ( data && !(data instanceof Date)) {
        throw new TypeError ('Esperando instancia de Date.');
    }if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {hour12: false});
}
const data = new Date('11-24-1999 20:00:00');
const hora = retornaHora(data);

console.log(hora);
