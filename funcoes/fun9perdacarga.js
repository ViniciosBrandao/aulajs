function calcularPerdaCargaJ(vazaoQ, diameD, coefiRugoC){
    const perdaCargaJ = (vazaoQ ** 1.85) * 10.643 * (diameD ** 4.87) * (coefiRugoC ** (-1.85));
    return perdaCargaJ
}

// Entrada de dados
const prompt = require("prompt-sync")();
const vazaoQ = Number(prompt("Qual o valor da vazão? "));
const diameD = Number(prompt("Qual o diametro do tubo? "));
const coefiRugoC = Number(prompt("Qual o coeficiente de rugosidade? "));

// Processamento
const perdaCargaJ = calcularPerdaCargaJ(vazaoQ, diameD, coefiRugoC);

// Saída da Informação
console.log(`A perda de carga é: ${perdaCargaJ.toFixed(2)}`);