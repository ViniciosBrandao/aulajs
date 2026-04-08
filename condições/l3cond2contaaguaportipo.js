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
function calcularContaSaneago(consumidorTipo, consumoM3){
    const tipoFormatado = consumidorTipo.toUpperCase()
    const residencial = "A";
    const comercial = "B";
    const industrial = "C";

    if (tipoFormatado === residencial) return 5 + (0.55 * consumoM3);
    if (tipoFormatado === comercial) return 150 + (1.25 * consumoM3);
    if (tipoFormatado === industrial) return 280 + (2.54 * consumoM3);
}

// Entrada de Dados
const prompt = require("prompt-sync")();
const numeroConta = Number(prompt("Número da conta: "));
console.log("MENU DE OPÇÕES: ");
console.log("a - Residencial");
console.log("b - Comercial");
console.log("c - Industrial");
const consumidorTipo = prompt("Tipo do consumidor: ");
const consumoM3 = Number(prompt("Consumo de água em metro cúbico: "));

// Processamento
const valorFaturaAgua = calcularContaSaneago(consumidorTipo, consumoM3);

// Saída da Informação
console.log(`Conta: ${numeroConta} Total: R$ ${valorFaturaAgua.toFixed(2)} reais`);