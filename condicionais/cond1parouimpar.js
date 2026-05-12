function calcularParImpar(valor){
    const resto = valor % 2;
    if (resto === 0){
        return "Par";
    }
    if (resto === 1){
        return "Ímpar"
    }
}

// Entrada de dados
const prompt = require("prompt-sync")();
const numero = Number(prompt("Número: "));

// Processamento
const resposta = calcularParImpar(numero);

// Saída da Informação
console.log(`O número ${numero} é ${resposta}`)

