/*
O número 3025 possui a seguinte característica:
30 + 25 = 55
55 elevado a 2 = 3025

Fazer um algoritmo que leia um número inteiro de 4 dígitos e calcule
se este tem a característica descrita acima.
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

