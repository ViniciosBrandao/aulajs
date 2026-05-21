function imprimirAstericos() {
    let saida = "";

    for (let i = 1; i <= 10; i++) {
        saida = saida + `*`;
        console.log(saida)
    }
}

// Entrada de Dados
const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    imprimirAstericos();

    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");