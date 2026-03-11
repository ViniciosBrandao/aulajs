// Entrada de dados
const prompt = require("prompt-sync")();
const reais = Number(prompt("Qual o valor em reais? "));

// Processamento
const nota100 = Math.floor(reais / 100);
let resto = reais % 100;

const nota50 = Math.floor(resto / 50);
resto = resto % 50;

const nota10 = Math.floor(resto / 10);
resto = resto % 10;

const nota5 = Math.floor(resto / 5);
resto = resto % 5;

const nota1 = resto;

// Saída da Informação
console.log(`${reais} reais no menor número possível de notas:  ${nota100} de 100,  ${nota50} de 50,  ${nota10} de 10,  ${nota5} de 5,  ${nota1} de 1`);