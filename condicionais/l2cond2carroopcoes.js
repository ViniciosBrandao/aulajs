/*
 Desenvolver um algoritmo para calcular e imprimir o preço final de um
carro. O valor do preço inicial de fábrica é fornecido por um meio de
entrada. O carro pode ter as seguintes opções:
● (S,N) Ar condicionado: R$ 1750,00
● (S,N) Pintura Metálica: R$ 800,00
● (S,N) Vidro Elétrico: R$ 1200,00
● (S,N) Direção Hidráulica: R$ 2000,00.
Obs.: Usuário ideal - ele não irá digitar valores incorretos.
*/
function calcularPrecoCarro(precoBase, arcondicionado, pinturaMetalica, vidroEletrico, direcaoHidraulica){
    let precoFinal = precoBase;
    if (arcondicionado === "S" || arcondicionado === "s") precoFinal = precoFinal + 1750;
    if (pinturaMetalica === "S" || pinturaMetalica === "s")  precoFinal = precoFinal + 800;
    if (vidroEletrico === "S" || vidroEletrico === "s") precoFinal = precoFinal + 1200;
    if (direcaoHidraulica === "S" || direcaoHidraulica === "s") precoFinal = precoFinal + 2000;
    return precoFinal;
}

// Entrada de Dados
const prompt = require("prompt-sync")();
const precoBase = Number(prompt("Preço base do carro: "));
const arcondicionado = prompt("Deseja adicionar Ar Condicionado? S/N ");
const pinturaMetalica = prompt("Deseja adicionar Pitura Metálica? S/N ");
const vidroEletrico = prompt("Deseja adicionar Vidro Elétrico? S/N ");
const direcaoHidraulica = prompt("Deseja adicionar Direção Hidráulica? S/N ");

// Processamento
const valorPagamento = calcularPrecoCarro(
    precoBase, arcondicionado, pinturaMetalica, 
    vidroEletrico, direcaoHidraulica
);

// Saída da Informação
console.log(`O preço final do carro é: R$ ${valorPagamento.toFixed(2)} reais`);