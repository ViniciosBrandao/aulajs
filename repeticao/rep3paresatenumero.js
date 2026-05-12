/* 
Fazer um programa que imprima na tela todos os números inteiros
positivos pares de 1 a n, onde n e fornecido pelo usuário.
*/
const prompt = require("prompt-sync")();
const numero = Number(prompt("Número: "));
let valor = 1;

do {
    if (valor % 2 === 0) {
        console.log(valor);
    }
    valor = valor + 1;
} while (valor <= numero);

console.log(`Valor: ${valor}`);
valor = 1;
while (valor <= numero) {
    if (valor % 2 === 0) {
        console.log(valor);
    }
    valor = valor + 1;
}

console.log(`Valor: ${valor}`);
for (valor = 1; valor <= numero; valor++) {
    if (valor % 2 === 0) {
        console.log(valor);
    }
}