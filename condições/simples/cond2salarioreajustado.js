/*
Fazer um algoritmo que calcule e imprima o salário reajustado de um
funcionário de acordo com as seguintes regras:
● Salários de até R$ 1412,00 reajuste de 50%;
● Salários maiores que R$ 1412,00 reajuste de 40%.
*/

function calcularSalarioReajustado(salario){
    if (salario <= 1412) return salario * 1.5;
    if (salario > 1412) return salario * 1.4;
}

// Entrada de dados
const prompt = require("prompt-sync")();
const salario = Number(prompt("Salário: "));

// Processamento
const resultado = calcularSalarioReajustado(salario);

// Saída da Informação
console.log(`O salário R$ ${salario.toFixed(2)} reais reajustado é: R$ ${resultado.toFixed(2)} reais`);