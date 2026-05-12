// Entrada de dados
const prompt = require("prompt-sync")();
const chuvaPolegada = Number(prompt("Qual a quantidade de chuva em polegadas? "));

// Processamento
const chuvaMilimetro = chuvaPolegada * 25.4;

// Saída da Informação
console.log(`Uma chuva de ${chuvaPolegada} polegada(s) equivale a ${chuvaMilimetro.toFixed(1)} em milímetros.`);