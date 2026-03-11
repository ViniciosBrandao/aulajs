// Entrada de dados
const prompt = require("prompt-sync")();
const custoFabrica= Number(prompt("Qual o custo de fábrica do carro? "));
// Constantes
const percentDistribuidor = 0.12
const impostos = 0.30

// Processamento
const valorDistribuidor = percentDistribuidor * custoFabrica;
const valorImpostos = impostos * custoFabrica;
const custoCarro = custoFabrica + valorDistribuidor + valorImpostos;

// Saída da Informação
console.log(`Um carro com custo de fábrica de R$ ${custoFabrica} reais chega ao consumidor no valor de R$ ${custoCarro.toFixed(2)} reais`);