/*
Em um frigorífico existem vários bois em seu curral de
espera. Cada boi traz preso no seu pescoço um cartão
contendo um número de identificação e seu peso em Kg.
Implementar um programa que escreva o número e o peso do
boi mais gordo e do boi mais magro (não é necessário
armazenar os dados de todos os bois). Calcular e escrever
também a média de peso dos 19000 bois.
*/
// Entrada de Dados
const prompt = require("prompt-sync")();

function imprimirInformacoesBois() {
   let somaPeso = 0;
   let contadorBois = 0;
   let maior = 0;
   let menor = Infinity;

    do {
        const numeroId = Number(prompt("Número Identificação: "));
        const peso = Number(prompt("Peso (kg): "));
        
        contadorBois++;
        somaPeso += peso;

        if (peso > maior) {
            maior = peso;
        } 

        if (peso < menor) {
            menor = peso;
        }

        opcao = prompt("Deseja continuar? (S/N) ");
    } while (opcao.toUpperCase() === "S");  

    return `
Maior Boi: ${maior}Kg.
Menor Boi: ${menor}Kg.
Média de peso: ${(somaPeso/contadorBois).toFixed(2)}Kg.
    `;
}
// Processamento e Saída da Informação
const resposta = imprimirInformacoesBois();
console.log(resposta);
