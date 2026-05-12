/* 
Fazer um programa que leia um número inteiro n qualquer fornecido
pelo usuário e imprima a tabuada de multiplicação de n.
*/
const prompt = require("prompt-sync")();
const numero = Number(prompt("Número: "));

let i = 1;

do {
    console.log(`${i} x ${numero} = ${numero * i}`);
    i = i + 1;
} while (i <= 10);

i = 1;
while (i <= 10) {
    console.log(`${i} x ${numero} = ${numero * i}`);
    i = i + 1;
}

for (i = 1; i <= 10; i++) {
    console.log(`${i} x ${numero} = ${numero * i}`);
}