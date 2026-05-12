function calcularDelta(cA, cB, cC){
    const delta = cB * cB - 4 * cA * cC;
    return delta
}

// Entrada de Dados
const prompt = require("prompt-sync")();
const coeficienteA = Number(prompt("Coeficiente A: "));
const coeficienteB = Number(prompt("Coeficiente B: "));
const coeficienteC = Number(prompt("Coeficiente C: "));

// Processamento
const delta = calcularDelta(coeficienteA, coeficienteB, coeficienteC);

// Saída da Informação
console.log(`Valor do Delta é = ${delta}`);
