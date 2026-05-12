function inverterNumero(valor){
    let numeroI = valor % 10; // extrai último dígito. Ex: 123> 3
    valor = Math.trunc(valor / 10); // remove o último dígito. trunc remove a parte decimal. 123> 12
    numeroI = numeroI * 10 + valor % 10; // desloca o dígito extraído e adiciona o próximo. 3 * 10 + 12 % 10 = 32
    valor = Math.trunc(valor / 10); // remove o último dígito. 12 /10 = 1
    numeroI = numeroI * 10 + valor; // adiciona o último dígito, recompondo os 3 dígitos em forma invertida.
    return numeroI // retorna o número invertido
}

// Entrada de Dados
const prompt = require("prompt-sync")();
const numero = Number(prompt("Digite um número de 3 dígitos: "));
let auxiliar = numero;

// Processamento
let numeroInvertido = inverterNumero(auxiliar);

// Saída da Informação
console.log(`O número ${numero} invertido fica assim: ${numeroInvertido}`);
