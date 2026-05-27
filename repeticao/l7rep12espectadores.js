/*
No dia da estréia do filme "Senhor dos Anéis” uma grande
emissora de TV realizou uma pesquisa logo após o
encerramento do filme. Cada espectador respondeu a um
questionário no qual constava sua idade e a sua opinião em
relação ao filme: excelente - 3; bom - 2; regular - 1. Criar um
algoritmo que receba a idade e a opinião de 20 espectadores,
calcule e imprima:
● a média das idades das pessoas que responderam
excelente;
● a quantidade de pessoas que responderam regular;
● a percentagem de pessoas que responderam bom entre
todos os espectadores analisados.
*/
// Entrada de Dados
const prompt = require("prompt-sync")();

function obterInformacoesEspectadores() {
    const limite = 20;
    let regular = 0;
    let bom = 0;
    let excelente = 0;
    let somaIdade = 0;
   
    for (let contador = 1; contador <= limite; contador++) {
        const idade = Number(prompt("Idade: "));
        const opiniao = Number(prompt("O que achou do filme Senhor dos anéis? excelente - 3; bom - 2; regular - 1: "));

        switch (opiniao) {
            case 1:
                regular++;
                break;

            case 2:
                bom++;
                break;

            case 3:
                excelente++;
                somaIdade += idade;
                break;
        }
    }   

    return `
Média da idade das pessoas que responderam excelente: ${(Math.trunc(somaIdade/excelente))} anos.
Quantidade de pessoas que responderam regular: ${regular}.
A percentagem de pessoas que responderam bom: ${(bom / limite * 100).toFixed(2)}%.
    `;
}

let opcao = "";
// Processamento e Saída da Informação
do {
    const resposta = obterInformacoesEspectadores();
    console.log(resposta);

    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");