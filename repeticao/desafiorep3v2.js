function imprimirMultiplos() {
    const limite = 500;
    let produto = 3;
    let saida = "";

    for (let multiplo = 3; multiplo <= limite; multiplo++) {
        if (multiplo % produto === 0) saida = saida + ` ${multiplo},`
    }
    return saida;
}

// Entrada de Dados
const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    const resposta = imprimirMultiplos();
    console.log(resposta);

    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");