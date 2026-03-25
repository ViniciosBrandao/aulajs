/*
Criar um algoritmo que leia a idade de uma pessoa e que mostre a
sua classe eleitoral:
● Não-eleitor (abaixo de 16 anos);
● Eleitor Obrigatório (entre 18 e 65 anos);
● Eleitor facultativo (entre 16 e 18 anos e maior de 65 anos).
Obs.: Usuário ideal - ele não irá digitar valores incorretos.
*/

function calculaCaracteristica(numero){
    const digitosPrimeiro = Math.trunc(numero / 100);
    const digitosSegundo = numero % 100;
    const soma = digitosPrimeiro + digitosSegundo;
    const dobroSoma = soma * soma;

    if (dobroSoma === numero) return `O número ${numero} tem a característica do 3025`;
    if (dobroSoma !==  numero) return `O número ${numero} não tem a característica do 3025`;
}

// Entrada de dados
const prompt = require("prompt-sync")();
const numero = Number(prompt("Número inteiro de 4 dígitos: "));

// Processamento  
const resposta = calculaCaracteristica(numero);

// Saída da Informação
console.log(`${resposta}`)