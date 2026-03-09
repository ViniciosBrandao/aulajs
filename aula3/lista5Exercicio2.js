// Entrada de dados
const prompt = require("prompt-sync")();
const evento = Number(prompt("Quantos segundos o evento dura? "));

// Constantes
const segundosPorHora = 3600;
const segundosPorMinuto = 60;

// Processamento
const eventoHoras = Math.floor(evento / segundosPorHora); 
const restoHoras = evento % segundosPorHora;
const eventoMinutos = Math.floor(restoHoras / segundosPorMinuto);
const eventoSegundos = restoHoras % segundosPorMinuto;

// Saída da Informação
console.log(`Um evento de ${evento} segundos tem a duração de ${eventoHoras} hora(s), ${eventoMinutos} minuto(s) e ${eventoSegundos} segundos`);