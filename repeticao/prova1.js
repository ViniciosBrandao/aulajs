function calcularPotencia(numero, potencia) {
    let produto = 1;

    for (let contador = 1; contador <= potencia; contador++) {
        produto = produto * numero;
    }

    return produto;
}

// Entrada de Dados
const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    const numero = Number(prompt("Valor X: "));
    const potencia = Number(prompt("Valor Y: "));

    const resposta = calcularPotencia(numero, potencia);
    console.log(resposta);

    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");