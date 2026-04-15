/*
Fazer um algoritmo que dado os lados de um triângulo A, B e C. Dizer
se os lados dados formam um triângulo: retângulo (A2=B2+C2),
obtusângulo (A2>B2+C2) ou acutângulo (A2<B2+C2).
*/
function obterTipoTriangulo(a, b, c) {
    // verifica se forma triângulo
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Não é um Triângulo";
    }

    // encontra o maior lado
    let maior = a;
    let x = b;
    let y = c;

    if (b > maior) {
        maior = b;
        x = a;
        y = c;
    }

    if (c > maior) {
        maior = c;
        x = a;
        y = b;
    }

    // aplica regra
    if (maior ** 2 === x ** 2 + y ** 2) return "Retângulo";
    if (maior ** 2 > x ** 2 + y ** 2) return "Obtusângulo";
    return "Acutângulo";
}
// Entrada de Dados
const prompt = require("prompt-sync")();

// Processamento e Saída da Informação
let opcao = "";
do{
    const ladoA = Number(prompt("Lado A: "));
    const ladoB = Number(prompt("Lado B: "));
    const ladoC = Number(prompt("Lado C: "));
    const resultado = obterTipoTriangulo(ladoA, ladoB, ladoC);
    console.log(`Resultado: ${resultado}`);
    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");