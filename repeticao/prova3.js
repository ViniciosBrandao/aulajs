function calcularNotasFiscais(numero) {
    let soma = 0;
    let saida = "";
    let maiorNota = 0;


    for (let contador = 1; contador <= numero; contador++) {
        const valorNota = Number(prompt("Valor da Nota: "));
        soma = soma + valorNota;
        if (valorNota > maiorNota) {
             maiorNota = valorNota;
        }
    }
    const media = soma / numero;
    return `Total Arrecadado: R$ ${soma.toFixed(2)} - Valor da Maior nota: R$ ${maiorNota} Média: R$ ${(media.toFixed(2))}`;
}


// Entrada de Dados
const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    const qtdeNotasFiscais = Number(prompt("Quantidade Notas Fiscais: "));

    
    const resposta = calcularNotasFiscais(qtdeNotasFiscais);
    console.log(resposta);

    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");