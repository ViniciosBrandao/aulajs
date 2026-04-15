/*
Fazer um algoritmo que dado os lados de um triângulo A, B e C. Dizer
se os lados dados formam um triângulo: retângulo (A2=B2+C2),
obtusângulo (A2>B2+C2) ou acutângulo (A2<B2+C2).
*/
function obterTipoTriangulo(valorA, valorB, valorC) { //valorA tem que ser o maior lado
    if (valorA + valorB > valorC && valorA + valorC > valorB && valorB + valorC > valorA) { // checa se os lados formarm um triangulo
        if (valorA > valorB && valorA > valorC) { // checa se o lado A é o maior
            if (valorA ** 2 === valorB ** 2 + valorC ** 2) return "Retângulo";
            if (valorA ** 2 > valorB ** 2 + valorC ** 2) return "Obtusângulo";
            return "Acutângulo";  
        } else if (valorB > valorC) { // caso o lado B seja o maior
            if (valorB ** 2 === valorA ** 2 + valorC ** 2) return "Retângulo";
            if (valorB ** 2 > valorA ** 2 + valorC ** 2) return "Obtusângulo";
            return "Acutângulo"; 
        } else { // lado C é o maior
            if (valorC ** 2 === valorA ** 2 + valorB ** 2) return "Retângulo";
            if (valorC ** 2 > valorA ** 2 + valorB ** 2) return "Obtusângulo";
            return "Acutângulo"; 
        }
    }
    return "Não é um Triângulo";
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