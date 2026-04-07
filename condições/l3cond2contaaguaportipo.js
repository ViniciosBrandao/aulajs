/*
Desenvolver um programa para calcular a conta de água para a
SANEAGO. O custo da água varia dependendo do tipo do consumidor
- residencial, comercial ou industrial.
A regra para calcular a conta é:
a. Residencial: R$ 5,00 de taxa mais R$ 0,55 por m3 gastos;
b. Comercial: R$ 150,00 de taxa mais R$ 1,25 por m3 gastos;
c. Industrial: R$ 280,00 de taxa mais R$ 2,54 por m3 gastos;

O programa deverá ler o número da conta do cliente, seu tipo
(residencial, comercial e industrial) e o seu consumo de água em
metros cubos. Como resultado imprimir a conta do cliente e o valor em
real a ser pago pelo mesmo.
*/
function calcularContaSaneago(consumidorTipo){
    const tipoFormatado = consumidorTipo.toUpperCase()
    const residencial = "A";
    const comercial = "B";
    const industrial = "C";

    if (consumidorTipo === bebe) return 600;
    if (consumidorTipo === adolescente) return 1600;
    if (consumidorTipo === adulto) return 4600;
    if (consumidorTipo === idoso) return 2450;
}
function calcularGotas(dosagemMg){
    const medicamentoMgPorMl = 400;
    const gotasPorMl = 14;

    return (dosagemMg / medicamentoMgPorMl) * gotasPorMl;
}

// Entrada de Dados
const prompt = require("prompt-sync")();
const conta = Number(prompt("Número da conta: "));
console.log("MENU DE OPÇÕES: ");
console.log("a - Residencial");
console.log("b - Comercial");
console.log("c - Industrial");
const consumidorTipo = Number(prompt("Tipo do consumidor: "));
const consumoM3 = Number(prompt("Consumo de água em metro cúbico: "));

// Processamento
const dosagemMg = calcularContaSaneago(consumidorTipo);
const gotas = calcularGotas(dosagemMg);

// Saída da Informação
console.log(`Conta:${dosagemMg} mg equivalente a ${Math.trunc(gotas)} gotas`);