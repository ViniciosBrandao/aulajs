/*
Criar um algoritmo que receba a idade e o peso de 20
pessoas. Calcular e imprimir as médias dos pesos das
pessoas da mesma faixa etária. As faixas etárias são: de 1 a
10 anos, de 11 a 20 anos, de 21 a 30 anos e maiores de 30
anos.
*/
// Entrada de Dados
const prompt = require("prompt-sync")();

function imprimirPesoPorFaixaEtaria() {
    const limite = 20;
    let faixa1a10 = 0;
    let soma1 = 0;
    let faixa11a20 = 0;
    let soma2 = 0;
    let faixa21a30 = 0;
    let soma3 = 0;
    let faixa30mais = 0;
    let soma4 = 0;
   

    for (let contador = 1; contador <= limite; contador++) {
        const idade = Number(prompt("Idade: "));
        const peso = Number(prompt("Peso (Kg): "));

        if (idade > 30) {
        faixa30mais++;
        soma4 += peso;

        } else if (idade > 20) {
        faixa21a30++;
        soma3 += peso;

        } else if (idade > 10) {
        faixa11a20++;
        soma2 += peso;

        } else if (idade > 0) {
        faixa1a10++;
        soma1 += peso;
        }
    }   

    return `
Média de peso de 01 a 10 anos: ${(soma1/faixa1a10).toFixed(1)}Kg.
Média de peso de 11 a 20 anos: ${(soma2/faixa11a20).toFixed(1)}Kg.
Média de peso de 21 a 30 anos: ${(soma3/faixa21a30).toFixed(1)}Kg.
Média de peso maiores de 30 anos: ${(soma4/faixa30mais).toFixed(1)}Kg.
    `;
}

let opcao = "";
// Processamento e Saída da Informação
do {
    const resposta = imprimirPesoPorFaixaEtaria();
    console.log(resposta);

    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");