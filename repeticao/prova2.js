function imprimirMultiplos(numero) {
    const limite = 20;
    let soma = 0;
    let saida = "";

    for (let contador = 1; contador <= limite; contador++) {
        soma = soma + numero;
        saida = saida + ` ${soma},`;
    }

    return saida;
}

// Entrada de Dados
const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    const numero = Number(prompt("Número: "));
    
    const resposta = imprimirMultiplos(numero);
    console.log(resposta);

    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");