/*
Fazer um programa que calcule o valor de x através da série:

de modo que o mesmo difira do valor calculado através da função EXP de,
no máximo, 0,0001. O valor de x deve ser lido de uma unidade de entrada.
O algoritmo deverá escrever o valor de x, o valor calculado através da
série, o valor dado pela função EXP e o número de termos utilizados da
série.
*/
function calcularSerieX(x) {
    let soma  = 1;      // termo n=0: x⁰/0! = 1
    let termo = 1;      // recorrência parte do termo 0 da série dada pelo exercício
    let n     = 1;      // próximo termo a calcular
    const referencia = Math.exp(x);
/*
o limitador para este exercício "difira no máximo 0,0001" exige erro absoluto para x unitario grande:
x =  1 → Math.exp(1)  ≈ 2.71         → diferença mínima ≈ 6e-16  → funciona
x = 10 → Math.exp(10) ≈ 22026        → diferença mínima ≈ 4e-12  → funciona
x = 20 → Math.exp(20) ≈ 4.8e8        → diferença mínima ≈ 1e-7   → funciona
x = 30 → Math.exp(30) ≈ 1.06e13      → diferença mínima ≈ 2e-3   → quase
x = 50 → Math.exp(50) ≈ 5.18e21      → diferença mínima ≈ 1e6    → nunca
*/
    while (Math.abs(soma - referencia) >= 0.0001) {
        termo = termo * x / n;
        soma = soma + termo;
        n++;
    }
    
    return `Série:       ${soma.toFixed(6)}
Math.exp(x): ${referencia.toFixed(6)}
Termos usados:  ${n}`;
}

const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    const numero = Number(prompt("Número: "));

    console.log(calcularSerieX(numero));
    opcao = prompt("Deseja continuar? (S/N) ");

} while (opcao.toUpperCase() === "S");
