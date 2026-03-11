// Entrada de dados
const prompt = require("prompt-sync")();
const raio = Number(prompt("Qual o raio da lata em metros? "));
const altura = Number(prompt("Qual a altura da lata em metros? "));
const custo = 155;

// Processamento
const areaBase = (Math.PI * raio ** 2 * 2);
const areaLado = (2 * Math.PI * raio * altura);
const areaLata = areaBase + areaLado
const valorTotal = areaLata * custo

// Saída da Informação
console.log(`O valor total da lata é de R$ ${valorTotal.toFixed(2)} reais`);