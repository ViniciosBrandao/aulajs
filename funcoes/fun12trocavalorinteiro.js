function trocarValores(a, b){

    a = a + b
    b = a - b
    a = a - b

    return {a, b}
}

// Entrada de dados
const prompt = require("prompt-sync")();
let a = Number(prompt("Digite um número inteiro A: "));
let b = Number(prompt("Digite um número inteiro B: "));

// Processamento
const {a: novoA, b: novoB} = trocarValores(a, b);

// Saída
console.log(`O valor de A agora é ${novoA} e o valor de B é ${novoB}`);