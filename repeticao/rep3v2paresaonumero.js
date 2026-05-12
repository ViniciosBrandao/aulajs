/* 
Fazer um programa que imprima na tela todos os números inteiros
positivos pares de 1 a n, onde n e fornecido pelo usuário.
*/
const prompt = require("prompt-sync")();
const numero = Number(prompt("Número: "));
let valor = 2;

do {
    console.log(valor);
    valor = valor + 2;
} while (valor <= numero);

console.log(`Valor: ${valor}`);
valor = 2;
while (valor <= numero) {
    console.log(valor);
    valor = valor + 2;
}

console.log(`Valor: ${valor}`);
for (valor = 2; valor <= numero; valor+=2) {
    console.log(valor);
}