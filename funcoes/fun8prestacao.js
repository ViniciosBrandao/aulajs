function calcularPrestacaoAcumulada(valorPrestacao, taxa, diasAtraso){
    const valorAcumulado = valorPrestacao + (valorPrestacao * taxa * diasAtraso);
    return valorAcumulado
}

// Entrada de dados
const prompt = require("prompt-sync")();
const valorPrestacao = Number(prompt("Qual o valor da prestação? "));
const taxaInput = Number(prompt("Qual a taxa mensal? "));
const taxa = taxaInput / 100 / 30;
const diasAtraso = Number(prompt("Quantos dias de atraso? "));

// Processamento
const valorAcumulado = calcularPrestacaoAcumulada(valorPrestacao, taxa, diasAtraso);

// Saída da Informação
console.log(`O valor de uma prestação de ${valorPrestacao} reais acumulada por ${diasAtraso} dia(s) com uma taxa de ${taxaInput}% ao mês é igual a R$ ${valorAcumulado.toFixed(2)} reais`);