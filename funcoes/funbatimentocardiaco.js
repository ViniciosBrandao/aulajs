function calcularBatimentoCardiaco(idade){
    const tempoVida = idade * 365.25 * 24 * 60 * 60;
    return tempoVida;
}

// Entrada de Dados
const prompt = require("prompt-sync")();
const idade = Number(prompt("Digite sua idade: "));

// processamento e saida
const tempoDeVida = calcularBatimentoCardiaco(idade);
console.log("Quantidade de batimentos cardiacos: " + tempoDeVida);
console.log(`Quantidade de batimentos cardiacos ${tempoDeVida}`);