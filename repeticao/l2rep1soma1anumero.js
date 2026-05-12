/* 
Fazer um programa que calcule e imprima o valor do somatório ( Σ )
de todos os números inteiros positivos de 1 a n, onde n e fornecido
pelo usuário.
*/
const prompt = require("prompt-sync")();
const numero = Number(prompt("Número: "));

const gauss = (numero * (numero + 1)) / 2; // Gauss descobriu isso aos 10 anos. Em vez de um loop inteiro, uma linha resolve em tempo constante. Vale conhecer — programar bem envolve pensar matematicamente também.
console.log(gauss)

let contador = 1;
let somatorio = 0;

do {
    somatorio = somatorio + contador;
    contador = contador + 1;
} while (contador <= numero);

console.log(`Somatório de 1 a ${numero}: ${somatorio}`);

contador = 1;
somatorio = 0;
while (contador <= numero) {
    somatorio = somatorio + contador;
    contador = contador + 1;
}

console.log(`Somatório de 1 a ${numero}: ${somatorio}`);

somatorio = 0;
for (contador = 1; contador <= numero; contador++) {
     somatorio = somatorio + contador;
}
console.log(`Somatório de 1 a ${numero}: ${somatorio}`);

