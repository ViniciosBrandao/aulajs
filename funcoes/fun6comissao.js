function calcularSalario(tvLcd, tvLed, tvPlasma, salarioFixo){
    const salarioTotal = (tvLcd * 50) + (tvLed * 60) + (tvPlasma * 55) + salarioFixo;
    return salarioTotal

}

// Entrada de dados
const prompt = require("prompt-sync")();
const tvLcd = Number(prompt("Digite quantas TV LCD vendeu: "));
const tvLed = Number(prompt("Digite quantas TV LED vendeu: "));
const tvPlasma = Number(prompt("Digite quantas TV PLASMA vendeu: "));
const salarioFixo = Number(prompt("Digite o salário fixo: "));

// Processamento
const salarioTotal = calcularSalario(tvLcd, tvLed, tvPlasma, salarioFixo);

// Saída da Informação
console.log(`O salário total é igual a R$ ${salarioTotal} reais`);