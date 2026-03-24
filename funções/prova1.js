function calcularCustoQuilowatt(salarioMinimo, quantidadeQuilowatts){
    const custoQuilowatts = salarioMinimo / 5;
    const valorConsumidor = custoQuilowatts * quantidadeQuilowatts;
    const valor15Desconto = valorConsumidor * 0.85;

    console.log(`Valor do quilowatt: R$ ${custoQuilowatts.toFixed(2)}`);
    console.log(`Valor a ser pago pelo consumidor: R$ ${valorConsumidor.toFixed(2)}`);
    console.log(`Valor com 15% de desconto: R$ ${valor15Desconto.toFixed(2)}`);
}

// Entrada de dados
const prompt = require("prompt-sync")();
const salarioMinimo = Number(prompt("Digite o salário mínimo: "));
const quantidadeQuilowatts = Number(prompt("Digite a quantidade de Quilowatts: "));

// Processamento e Saída
calcularCustoQuilowatt(salarioMinimo,quantidadeQuilowatts);

