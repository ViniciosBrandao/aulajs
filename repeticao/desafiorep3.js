function imprimirMultiplos() {
    const limite = 500;
    let soma = 0;
    let saida = "";

    while(soma < limite - 3) {
        soma = soma + 3;
        saida = saida + ` ${soma},`;
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