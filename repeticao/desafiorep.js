function imprimirTriangulo1a9() {
    let linha = 1;
    let saida = "1\n";

    for (let i = 2; i <= 9; i++) {
        linha = linha * 10 + i;
        saida = saida + linha + `\n`;
    }
    
    return saida
}


// Entrada de Dados
const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    
    const resposta = imprimirTriangulo1a9();
    console.log(resposta);

    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");