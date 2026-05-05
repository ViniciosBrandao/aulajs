/*
Um número inteiro positivo é triangular se este for o resultado do
produto de três números naturais consecutivos.
Por exemplo, o número 120 é triangular porque 120 = 4*5*6.
Fazer um programa que:
● leia um número inteiro;
● verifique se o número é ou não triangular. Se for imprimir:
“Número Triangular” senão imprimir: “Número não Triangular”.
*/
function obterNumeroTriangular(numero) {
    let saida   = "";
    let produto = 1;
    let i       = 1;

    while (produto <= numero) {
        produto = produto * i;
        if (produto === numero) return "Número Triangular";
        i++;
    }

    return "Número não Triangular";
}

// Entrada de Dados
const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    const numero = Number(prompt("Número: "));
    const resposta = obterNumeroTriangular(numero);
    console.log(resposta)
    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");
