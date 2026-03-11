// Entrada de dados
const prompt = require("prompt-sync")();
const idade = Number(prompt("Quantos anos você tem? "));

// Constantes
const batidaPorSegundo = 1;
const diasPorAno = 365.25;
const horasPorDia = 24;
const minutosPorHora = 60
const segundosPorMinuto = 60;

// Processamento
const segundosPorAno = diasPorAno * horasPorDia * minutosPorHora * segundosPorMinuto;
const batidasTotal = idade * segundosPorAno * batidaPorSegundo;

// Saída da Informação
console.log(`O coração de uma pessoa com ${idade} anos bateu em média ${batidasTotal.toLocaleString("pt-BR")} vezes`);
