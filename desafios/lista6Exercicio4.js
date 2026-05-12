// Entrada de dados
const prompt = require("prompt-sync")();
const l1 = Number(prompt("Digite o valor de L1:"));
const l2 = Number(prompt("Digite o valor de L2:"));
const l3 = Number(prompt("Digite o valor de L3:"));

// Processamento
const t = (l1 + l2 + l3) / 2;
const area = Math.sqrt(t * (t - l1) * (t - l2) * (t - l3));

// Saída da Informação
console.log(`A área de um triângulo de lados ${l1}, ${l2} e ${l3} é igual a ${area.toFixed(2)}`);