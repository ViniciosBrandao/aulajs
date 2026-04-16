function obterPrecoUnitario(codigoProduto) {
    let precoUnitario = 0;

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

    return precoUnitario;
}

function obterPercentualDesconto(total) {
    if (total > 950) return 0.25;
    if (total > 650) return 0.20;
    if (total > 350) return 0.15;
    return 0.08;
}

function calcularNota(codigoProduto, quantidade) {
    const precoUnitario = obterPrecoUnitario(codigoProduto);

    const totalSemDesconto = precoUnitario * quantidade;

    const percentual = obterPercentualDesconto(totalSemDesconto);
    const valorDesconto = totalSemDesconto * percentual;

    const totalFinal = totalSemDesconto - valorDesconto;

    return `Preço unitário: R$ ${precoUnitario.toFixed(2)} 
Total sem desconto: R$ ${totalSemDesconto.toFixed(2)} 
Desconto: ${(percentual * 100).toFixed(0)}% 
Valor do desconto: R$ ${valorDesconto.toFixed(2)} 
Total final: R$ ${totalFinal.toFixed(2)}`;  
}

// Entrada de Dados
const prompt = require("prompt-sync")();

// Loop principal
let opcao = "";

do {
    // Entrada de Dados
    console.log("Código Produtos: ");
    console.log("1 ou 2 - R$ 15,00");
    console.log("3 ou 4 ou 5 - R$ 25,00");
    console.log("6 ou 7 - R$ 40,00");
    console.log("8 ou 9 - R$ 50,00");
    const codigoProduto = Number(prompt("Código: "));
    const quantidade = Number(prompt("Quantidade: "));
    // Processamento
    const resultado = calcularNota(codigoProduto, quantidade);
    // Saída da Informação
    console.log(resultado);
    // loop
    opcao = prompt("Deseja continuar? (S/N) ");
    
} while (opcao.toUpperCase() === "S");