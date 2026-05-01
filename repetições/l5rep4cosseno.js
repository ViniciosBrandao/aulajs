/*
Fazer um programa que:
A. calcule o valor do cosseno de x através de 20 termos da série
seguinte:

B. calcule a diferença entre o valor calculado no item a e o valor
fornecido pela função COS(X);
C. imprima o que foi calculado nos itens a e b.
Observação: o valor de x é fornecido como entrada.
*/
function calcularCosseno(x, passos) {
    let soma  = 1;      // termo n=0: x⁰/0! = 1
    let termo = 1;      // recorrência parte do termo 0 da série dada pelo exercício
   

    for (let n = 1; n < passos; n++) {
        termo = termo * (- 1) * x * x / (2 * n * (2 * n - 1));
        soma = soma + termo;
    }
    
    return soma;
}

const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    const x = Number(prompt("x (radianos): "));
    const passos = 20;

    const cossenoCalculado = calcularCosseno(x, passos);
    const cossenoReal = Math.cos(x);
    console.log(`Cos(x) série:      ${cossenoCalculado.toFixed(6)}`);
    console.log(`Cos(x)  real:      ${cossenoReal.toFixed(6)}`);
    console.log(`erro:              ${Math.abs(cossenoReal - cossenoCalculado).toFixed(10)}`);

    opcao = prompt("Deseja continuar? (S/N) ");

} while (opcao.toUpperCase() === "S");