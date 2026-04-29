/* 
Fazer um programa que calcule e imprima o valor do produtório ( Π )
de todos os números inteiros positivos de 1 a n, onde n e fornecido
pelo usuário.
*/
const prompt = require("prompt-sync")();
const numero = Number(prompt("Número: "));


let i = 1;
let produtorio = 1;

do {
    produtorio = produtorio * i;
    i = i + 1;
} while (i <= numero);

console.log(`Produtório de 1 a ${numero}: ${produtorio}`);

i = 1;
produtorio = 1;
while (i <= numero) {
    produtorio = produtorio * i;
    i = i + 1;
}

console.log(`Produtório de 1 a ${numero}: ${produtorio}`);

produtorio = 1;
for (i = 1; i <= numero; i++) {
     produtorio = produtorio * i;
}
console.log(`Produtório de 1 a ${numero}: ${produtorio}`);