// Entrada de dados
const prompt = require("prompt-sync")();
const anos = Number(prompt("Quantos anos você tem? "));
const meses = Number(prompt("Quantos meses você tem? "));
const dias = Number(prompt("Quantos dias você tem? "));

// Constantes
const anosEmDias = 365 * anos
const mesesEmDias = 30 * meses

// Processamento
const idadeEmDias = anosEmDias + mesesEmDias + dias

// Saída da Informação
console.log(`Uma pessoa com ${anos} anos, ${meses} meses e ${dias} dias tem ${idadeEmDias} dias de idade`);