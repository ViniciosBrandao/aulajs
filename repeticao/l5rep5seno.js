/*
Fazer um programa que:
A. calcule o valor do cosseno de x através de 20 termos da série
seguinte:

B. calcule a diferença entre o valor calculado no item a e o valor
fornecido pela função SIN(X);
C. imprima o que foi calculado nos itens a e b.
Observação: o valor de x é fornecido como entrada.
*/
function calcularSeno(x, passos) {
    let soma  = x;      // termo n=0: x¹/1! = x
    let termo = x;      // recorrência parte do termo 0 da série dada pelo exercício
   

    for (let n = 1; n < passos; n++) {
        termo = termo * (- 1) * x * x / ((2 * n + 1) * (2 * n));
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

    const senoCalculado = calcularSeno(x, passos);
    const senoReal = Math.sin(x);
    console.log(`Sen(x) série:      ${senoCalculado.toFixed(6)}`);
    console.log(`Sen(x)  real:      ${senoReal.toFixed(6)}`);
    console.log(`erro:              ${Math.abs(senoReal - senoCalculado).toFixed(10)}`);

    opcao = prompt("Deseja continuar? (S/N) ");

} while (opcao.toUpperCase() === "S");