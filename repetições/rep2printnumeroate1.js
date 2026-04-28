/* 
Fazer um programa que imprima na tela todos os números inteiros
positivos de n a 1, onde n e fornecido pelo usuário.
*/
const prompt = require("prompt-sync")();
const numero = Number(prompt("Número: "));
let valor = numero;

do {
    console.log(valor);
    valor = valor - 1;
} while (valor >= 1);

console.log(`Valor: ${valor}`);
valor = numero;
while (valor >= 1) {
    console.log(valor);
    valor = valor - 1;
}

console.log(`Valor: ${valor}`);
for (valor = numero; valor >= 1; valor--) {
    console.log(valor);
}
