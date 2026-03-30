/* 
Elabore um algoritmo que calcule o valor a ser pago por um produto
considerando o preço normal de etiqueta e a escolha da condição de
pagamento. Utilize os códigos da tabela a seguir para saber qual a
condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condições de Pagamento
1 À vista, dinheiro ou cheque, 10% de desconto
2 À vista, cartão de crédito, 5% de desconto
3 Em 2 vezes, preço normal da etiqueta sem juros
4 Em 3 vezes, preço normal da etiqueta + 10% de juros 
*/

function calcularCondicaoPagamento(codigo, totalVenda){
    if (codigo === 1) return `À vista, dinheiro ou cheque, 10% de desconto. Valor a ser pago: R$ ${(totalVenda * 0.9).toFixed(2)} reais`;
    if (codigo === 2) return `À vista, cartão de crédito, 5% de desconto. Valor a ser pago: R$ ${(totalVenda * 0.95).toFixed(2)} reais`;
    if (codigo === 3) return `Em 2 vezes, preço normal da etiqueta sem juros. Valor a ser pago: R$ ${(totalVenda).toFixed(2)} reais`;
    if (codigo === 4) return `Em 3 vezes, preço normal da etiqueta + 10% de juros. Valor a ser pago: R$ ${(totalVenda * 1.1).toFixed(2)} reais`;
    return "Código Inválido"
}

// Entrada
const prompt = require("prompt-sync")();
const totalVenda = Number(prompt("Valor dos produtos: "));
const codigo = Number(prompt("Código da condição de pagamento: "));

// Processamento
const valorPagamento = calcularCondicaoPagamento(codigo, totalVenda);

// Saída
console.log(valorPagamento);