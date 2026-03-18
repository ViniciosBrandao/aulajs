function calcularTempo(evento){
    const segundosPorHora = 3600;
    const segundosPorMinuto = 60;
    const eventoHoras = Math.trunc(evento / segundosPorHora); 
    const restoHoras = evento % segundosPorHora;
    const eventoMinutos = Math.trunc(restoHoras / segundosPorMinuto);
    const eventoSegundos = restoHoras % segundosPorMinuto;
    console.log(`Um evento de ${evento} segundos tem a duração de ${eventoHoras} hora(s), ${eventoMinutos} minuto(s) e ${eventoSegundos} segundos`);
}

// Entrada de dados
const prompt = require("prompt-sync")();
const evento = Number(prompt("Quantos segundos o evento dura? "));

// Processamento
calcularTempo(evento);

