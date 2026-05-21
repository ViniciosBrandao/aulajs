function imprimirMultiplos() {
    const limite = 500;
    const produto = 3;

    let saida = "";

    for (let multiplo = 1; multiplo <= Math.trunc(limite / produto); multiplo++) {
        const resultado = multiplo * produto;

        if (multiplo > 1) {
            saida += ", ";
        }

        saida += resultado;
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