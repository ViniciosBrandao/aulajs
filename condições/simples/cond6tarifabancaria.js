/*
Criar um algoritmo que leia o nome, o número da conta e o saldo
bancário total semestral de uma pessoa e calcule a tarifa bancária em
que a mesma se enquadra:
● Básica (saldo médio mensal inferior a R$ 1.000,00) tarifa de R$
25,00;
● Prata (saldo médio mensal entre R$ 1.000,01 e R$ 2.000,00)
tarifa de R$ 20,00;
● Ouro (saldo médio mensal entre R$ 2.000,01 e R$ 3.500,00)
tarifa de R$ 13,00;
● Prêmio (saldo médio mensal superior a R$ 3.500,00) tarifa
isenta.
Obs.: Usuário ideal - ele não irá digitar valores incorretos.
*/

function calcularTarifaBancaria(saldoBancario){
    const saldoMedioMensal = saldoBancario / 6;
    if (saldoMedioMensal <= 1000) return "Básica (saldo médio mensal inferior a R$ 1.000,00) tarifa de R$25,00 reais";
    if (saldoMedioMensal > 1000 && saldoMedioMensal <= 2000) return "Prata (saldo médio mensal entre R$ 1.000,01 e R$ 2.000,00) tarifa de R$ 20,00";
    if (saldoMedioMensal > 2000 && saldoMedioMensal <= 3500) return "Ouro (saldo médio mensal entre R$ 2.000,01 e R$ 3.500,00)tarifa de R$ 13,00";
    if (saldoMedioMensal > 3500) return "Prêmio (saldo médio mensal superior a R$ 3.500,00) tarifa isenta.";
}

// Entrada de dados
const prompt = require("prompt-sync")();
const nome = prompt("Nome: ");
const numeroConta = Number(prompt("Número da conta: "));
const saldoBancario = Number(prompt("Saldo bancário semestral: "));

// Processamento  
const resposta = calcularTarifaBancaria(saldoBancario);

// Saída da Informação
console.log(`${nome} dono da conta número ${numeroConta} tem tarifa: ${resposta}`);