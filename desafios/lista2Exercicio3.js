// Entrada de dados
const prompt = require("prompt-sync")();
const nota1 = prompt("Digite a nota nº 1: ");
const nota2 = prompt("Digite a nota nº 2: ");
const nota3 = prompt("Digite a nota nº 3: "); 

// Processamento
const mediaPonderada = (nota1*2 + nota2*3 + nota3*5) / 10

// Saída da Informação
console.log(`A média ponderada é igual a ${mediaPonderada}`);
