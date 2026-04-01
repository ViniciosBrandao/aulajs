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
function calcularPagamento(opcao, valorProduto){
    if(opcao === 1){
        const valor = valorProduto * 0.90;
        return `Valor a vista com desconto 10% R$ ${valor.toFixed(2)}`;
    }
    if(opcao === 2){
        const valor = valorProduto * 0.95;
        return `Valor a vista com desconto 5% R$ ${valor.toFixed(2)}`;
    }
    if(opcao === 3){
        const valorParcela = valorProduto / 2;
        return `Valor em 2 parcelas de R$ ${valorParcela.toFixed(2)}`;
    }
    if(opcao === 4){
        const valorParcela = (valorProduto * 1.10) / 3;
        return `Valor em 3 parcelas de R$ ${valorParcela.toFixed(2)}`;
    }
    return "Código Inválido"
}

// Entrada de Dados
const prompt = require("prompt-sync")();
const valorProduto = Number(prompt("Valor do Produto: "));
console.log("MENU OPCOES: ");
console.log("1 - À vista, dinheiro ou cheque, 10% de desconto");
console.log("2 - À vista, cartão de crédito, 5% de desconto");
console.log("3 - Em 2 vezes, preço normal da etiqueta sem juros");
console.log("4 - Em 3 vezes, preço normal da etiqueta + 10% de juros");
const codigo = Number(prompt("Opção:  "));
//processamento
const resposta = calcularPagamento(codigo, valorProduto);
console.log(`Pagamento: ${resposta}`);