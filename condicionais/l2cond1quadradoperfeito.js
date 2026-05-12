/*
1. Números quadrados perfeitos são aqueles cuja raiz quadrada é um
número inteiro. Exemplo 144. Fazer um algoritmo que dado um
número inteiro positivo, calcule e escreva se este é ou não quadrado
perfeito.
Obs.: Usuário ideal - ele não irá digitar valores incorretos.
*/

function calcularQuadradoPerfeito(numero){
    const raizQuadrada = Math.sqrt(numero);
    if (raizQuadrada * raizQuadrada === numero) return "é quadrado perfeito";
    else return "não é quadrado perfeito"
}

// Entrada de dados
const prompt = require("prompt-sync")();
const numero = Number(prompt("Número inteiro: "));

// Processamento  
const resposta = calcularQuadradoPerfeito(numero);

// Saída da Informação
console.log(`O número ${numero} ${resposta}`)
