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

        default:
            return null;
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

    if (precoUnitario === null) return null;

    const totalSemDesconto = precoUnitario * quantidade;

    const percentual = obterPercentualDesconto(totalSemDesconto);
    const valorDesconto = totalSemDesconto * percentual;

    const totalFinal = totalSemDesconto - valorDesconto;

    return {
        precoUnitario,
        totalSemDesconto,
        percentual,
        valorDesconto,
        totalFinal
    };
}

function escreverNota(dados) {
    console.log(`Preço unitário: R$ ${dados.precoUnitario.toFixed(2)}`);
    console.log(`Total sem desconto: R$ ${dados.totalSemDesconto.toFixed(2)}`);
    console.log(`Desconto: ${(dados.percentual * 100).toFixed(0)}%`);
    console.log(`Valor do desconto: R$ ${dados.valorDesconto.toFixed(2)}`);
    console.log(`Total final: R$ ${dados.totalFinal.toFixed(2)}`);
}

// Entrada de Dados
const prompt = require("prompt-sync")();

// Loop principal
let opcao = "";

do {
    console.log("Código Produtos: ");
    console.log("1 ou 2 - R$ 15,00");
    console.log("3 ou 4 ou 5 - R$ 25,00");
    console.log("6 ou 7 - R$ 40,00");
    console.log("8 ou 9 - R$ 50,00");

    const codigoProduto = Number(prompt("Código: "));
    const quantidade = Number(prompt("Quantidade: "));

    const resultado = calcularNota(codigoProduto, quantidade);

    if (resultado === null) {
        console.log("Código inválido");
    } else {
        escreverNota(resultado);
    }

    opcao = prompt("Deseja continuar? (S/N) ");

} while (opcao.toUpperCase() === "S");