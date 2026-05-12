function calcularMediaPonderada(nota1, nota2, nota3){
    const media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;
    return media;
}

// Entrada de dados
const prompt = require("prompt-sync")();
const nota1 = Number(prompt("Digite a nota nº 1: "));
const nota2 = Number(prompt("Digite a nota nº 2: "));
const nota3 = Number(prompt("Digite a nota nº 3: ")); 

// Processamento
const mediaPonderada = calcularMediaPonderada(nota1, nota2, nota3);

// Saída da Informação
console.log(`A média ponderada é igual a ${mediaPonderada}`);
