// Entrada de Dados
const prompt = require("prompt-sync")();
const numero3Digitos = Number(prompt("Digite um número de 3 dígitos: "));


// calcula o dígito em cada casa decimal para depois inverter o numero e o transforma em string (texto) por meio da 
// template string `${}` que ja converte o tipo para string assim como String(), implicitamente
// Processamento
const centena = Math.floor(numero3Digitos / 100);
const dezena = Math.floor(numero3Digitos / 10) % 10;
const unidade = numero3Digitos % 10;
const numeroInvertido = `${unidade}${dezena}${centena}`;

// Saída da Informação
console.log(`O número ${numero3Digitos} invertido fica assim: ${numeroInvertido}`);


