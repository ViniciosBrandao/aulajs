/*
Escrever um programa que leia o peso de uma pessoa na terra e o número do planeta, de acordo com a tabela abaixo:

1 - jupiter - gravidade relativa 2.64
2 - saturno - gravidade relativa 1.15
3 - urano - gravidade relativa 1.17

calcular e escrever o nome do planeta e o peso da pessoa no planeta escolhido através da fórmula abaixo: 
peso no planeta = (peso da pessoa na terra * gravidade relativa) / 10
*/

function calcularPesoPlaneta(peso, planeta) {
    const jupiter = 1;
    const saturno = 2;
    const urano = 3;
    let gravidadeRelativa = 0;
    let nomePlaneta = "";
    
    switch (planeta) {
        case jupiter:
            gravidadeRelativa = 2.64;
            nomePlaneta = "Júpiter";
            break;

        case saturno:
            gravidadeRelativa = 1.15;
            nomePlaneta = "Saturno";
            break;
        
        case urano:
            gravidadeRelativa = 1.17;
            nomePlaneta = "Urano";
            break;
        
        default:
            return "Planeta inválido!"
    }

    const pesoPlaneta = (peso * gravidadeRelativa) / 10;
    return `Planeta: ${nomePlaneta}. Peso: ${pesoPlaneta.toFixed(2)} Kg.`;
}
// Entrada de Dados
const prompt = require("prompt-sync")();

// Processamento e Saída da Informação
let opcao = "";
do {
    const peso = Number(prompt("Peso: "));
    console.log("Nome do Planeta: ");
    console.log("1 - Jupiter");
    console.log("2 - Saturno");
    console.log("3 - Urano");
    const planeta = Number(prompt("Planeta: "));
    const resultado = calcularPesoPlaneta(peso, planeta);
    console.log(resultado);
    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");