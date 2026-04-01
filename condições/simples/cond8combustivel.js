/*
Um posto de combustível vende três tipos de combustível : álcool,
diesel e gasolina. O preço por litro de combustível é apresentado na
tabela a seguir. Faça um algoritmo que leia uma opção que representa
o tipo de combustível comprado (1, 2 ou 3) e a quantidade em litros. O
programa deve imprimir o valor em reais a ser pago pelo combustível.

Combustível Preço por Litro
1 – Álcool R$ 4,805
2 – Diesel R$ 5,953
3 – Gasolina R$ 6,565
*/

function calcularValorCombustivel(tipoCombustivel, quantidadeLitros){
    const precoAlcool = 4.805;
    const precoDiesel = 5.953;
    const precoGasolina = 6.565;
    const codigoAlcool  = 1;
    const codigoDiesel = 2;
    const codigoGasolina = 3;
    if (tipoCombustivel === codigoAlcool) return quantidadeLitros * precoAlcool;
    if (tipoCombustivel === codigoDiesel) return quantidadeLitros * precoDiesel;
    if (tipoCombustivel === codigoGasolina) return quantidadeLitros * precoGasolina;
}

// Entrada de Dados
const prompt = require("prompt-sync")();
const quantidadeLitros = Number(prompt("Quantidade de Litros: "));
console.log("MENU OPCOES: ");
console.log("1 - Álcool");
console.log("2 - Diesel");
console.log("3 - Gasolina");
const tipoCombustivel = Number(prompt("Código do combustível: "));

// Processamento
const valorPagamento = calcularValorCombustivel(tipoCombustivel, quantidadeLitros);

// Saída da Informação
console.log(`Valor a pagar é R$ ${valorPagamento.toFixed(2)}`)