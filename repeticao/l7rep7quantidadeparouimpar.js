/*
Ler 200 números inteiros e imprimir quantos são pares e
quantos são ímpares.
*/
function obterQuantidadePareImpar() {
    const limite = 200;
    let quantidadePar = 0;
    let quantidadeImpar = 0;

    for (let i = 1; i <= limite; i++) {
        const numero = Number(prompt("Número: "));

        if (numero % 2 === 0) {
            quantidadePar++;
        } else {
            quantidadeImpar++;
        }
    }

    return `Quantidade de números par: ${quantidadePar}. Quantidade de ímpares ${quantidadeImpar}`;
}


// Entrada de Dados
const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    const resposta = obterQuantidadePareImpar();
    console.log(resposta);

    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");