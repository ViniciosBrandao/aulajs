// Entrada de dados
const prompt = require("prompt-sync")();
const vazaoQ = Number(prompt("Qual o valor da vazão? "));
const diameD = Number(prompt("Qual o diametro do tubo? "));
const coefiRugoC = Number(prompt("Qual o coeficiente de rugosidade? "));

// Processamento
const perdaCargaJ = (vazaoQ ** 1.85) * 10.643 * (diameD ** 4.87) * (coefiRugoC ** (-1.85) )

// Saída da Informação
console.log(`O valor é igual a ${perdaCargaJ.toFixed(2)}`);