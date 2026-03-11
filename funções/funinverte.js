function inverterNumero(valor){
    let numeroI = valor % 10;
    valor = Math.trunc(valor / 10);
    numeroI = numeroI * 10 + valor % 10;
    valor = Math.trunc(valor / 10);
    numeroI = numeroI * 10 + valor;
    return numeroI
}

// Entrada de Dados
const prompt = require("prompt-sync")();
const numero = Number(prompt("Digite um número de 3 dígitos: "));
let auxiliar = numero;

// Processamento
let numeroInvertido = inverterNumero(auxiliar);

// Saída da Informação
console.log(`O número ${numero} invertido fica assim: ${numeroInvertido}`);
