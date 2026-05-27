/*
Um comerciante deseja fazer o levantamento do lucro das
mercadorias que ele comercializa. Para isto, mandou digitar
uma linha para cada mercadoria com nome, preço de compra
e preço de venda das mesmas. Fazer um programa que:
determine e escreva quantas mercadorias proporcionam:

lucro < 10%
10% ≤ lucro ≤ 20%
lucro > 20%

Determine e escreva também o valor total de compras e de
vendas de todas as mercadorias, assim como o lucro total.
Observação: o aluno deve adotar um flag.
*/
// Entrada de Dados
const prompt = require("prompt-sync")();

function imprimirQtdePorFaixaDeLucro() {
    let lucromenor10 = 0;
    let lucro10a20 = 0;
    let lucro21mais = 0;
    let valorCompras = 0;
    let valorVendas = 0;
    let lucroTotal = 0;

    do {
        const nome = prompt("Nome da mercadoria: ");
        const precoCompra = Number(prompt("Preço de compra: "));
        const precoVenda = Number(prompt("Preço de venda: "));

        const lucroBruto = precoVenda - precoCompra;
        valorCompras += precoCompra;
        valorVendas += precoVenda;
        lucroTotal += lucroBruto;

        const porcentagemLucro = ((lucroBruto) / precoCompra) * 100;

        if (porcentagemLucro > 20) {
        lucro21mais++;

        } else if (porcentagemLucro >= 10) {
        lucro10a20++;

        } else if (porcentagemLucro < 10) {
        lucromenor10++;
        } 

        opcao = prompt("Deseja continuar? (S/N) ");
    } while (opcao.toUpperCase() === "S");  

    return `
Mercadorias com lucro abaixo de 10%: ${lucromenor10}.
Mercadorias com lucro entre 10% e 20%: ${lucro10a20}.
Mercadorias com lucro acima de 20%: ${lucro21mais}.
Valor total de compras: R$ ${valorCompras.toFixed(2)} reais.
Valor total de vendas: R$ ${valorVendas.toFixed(2)} reais.
Valor lucro total: R$ ${lucroTotal.toFixed(2)} reais.
    `;
}
// Processamento e Saída da Informação
const resposta = imprimirQtdePorFaixaDeLucro();
console.log(resposta);
