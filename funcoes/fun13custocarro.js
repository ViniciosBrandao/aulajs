function calculaCustoCarro(custoFabrica){
    const percentDistribuidor = 0.12;
    const impostos = 0.30;
    const valorDistribuidor = percentDistribuidor * custoFabrica;
    const valorImpostos = impostos * custoFabrica;
    const custoCarro = custoFabrica + valorDistribuidor + valorImpostos;
    return custoCarro
}

// Entrada de dados
const prompt = require("prompt-sync")();
const custoFabrica= Number(prompt("Qual o custo de fábrica do carro? "));

// Processamento
const custoCarro = calculaCustoCarro(custoFabrica);

// Saída da Informação
console.log(`Um carro com custo de fábrica de R$ ${custoFabrica} reais chega ao consumidor no valor de R$ ${custoCarro.toFixed(2)} reais`);