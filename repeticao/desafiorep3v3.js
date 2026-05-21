function imprimirMultiplos() {
    const limite = 500;
    let produto = 3;
    let saida = "";
    let resultado = 0;

    for (let multiplo = 3; Math.trunc(limite / produto); multiplo++) {
        resultado = multiplo * produto;
        saida = saida + ` ${resultado},`;
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