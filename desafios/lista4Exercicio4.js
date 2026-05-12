// Entrada de dados
const prompt = require("prompt-sync")();
let a = Number(prompt("Digite um número inteiro A: "));
let b = Number(prompt("Digite um número inteiro B: "));

/*
[a, b] = [b, a]; em JavaScript moderno essa sintaxe chamada de destructuring assignment faz a troca
de valores de duas variáveis sem a necessidade de uso de uma terceira (como o temp no exercício)
*/
// Processamento
let temp = a
a = b;
b = temp;

// Saída da Informação
console.log(`O valor de A é ${a} e de B ${b}`);