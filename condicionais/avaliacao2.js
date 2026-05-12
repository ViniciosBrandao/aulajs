function calcularPrecoFinal(codigoProduto, quantidade) {
    let precoUnitario = 0;
    let totalSemDesconto = 0;
    let precoTotal = 0;
    let desconto = 0;
    let escreverDesconto = "";

    switch (codigoProduto) {
        case 1:
        case 2:
            precoUnitario = 15;
            break;

        case 3:
        case 4:
        case 5:
            precoUnitario = 25;
            break;

        case 6:
        case 7:
            precoUnitario = 40;
            break;

        case 8:
        case 9:
            precoUnitario = 50;
            break;
    }
    totalSemDesconto = quantidade * precoUnitario;

    if (totalSemDesconto <= 350) {
        escreverDesconto = "8%";
        desconto = 0.92;
        precoTotal = totalSemDesconto * desconto;
    }
    
    if (totalSemDesconto > 350 && totalSemDesconto <= 650) {
        escreverDesconto = "15%";
        desconto = 0.85;
        precoTotal = totalSemDesconto * desconto;
    }

    if (totalSemDesconto > 650 && totalSemDesconto <= 950) {
        escreverDesconto = "20%";
        desconto = 0.8;
        precoTotal = totalSemDesconto * desconto;
    }

    if (totalSemDesconto > 950) {
        escreverDesconto = "25%";
        desconto = 0.75;
        precoTotal = totalSemDesconto * desconto;
    }

    return `Preço unitário: ${precoUnitario}. Preço Total da nota: ${totalSemDesconto.toFixed(2)}. Desconto de ${escreverDesconto}: ${precoTotal.toFixed(2)}`
}

// Entrada de Dados
const prompt = require("prompt-sync")();

// Processamento e Saída da Informação
let opcao = "";
do{
    console.log("Código: ");
    console.log("1 ou 2: R$ 15,00");
    console.log("3 ou 4 ou 5: R$ 25,00");
    console.log("6 ou 7: R$ 40,00");
    console.log("8 ou 9: R$ 50,00");
    const codigoProduto = Number(prompt("Código do produto: "));
    const quantidade = Number(prompt("Quantidade: "));
    const resposta = calcularPrecoFinal(codigoProduto, quantidade);
    console.log(resposta);
    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");