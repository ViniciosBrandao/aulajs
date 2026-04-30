/*
O valor aproximado de π pode ser calculado usando-se a série:

sendo

Fazer um programa para calcular e escrever o valor de π com 1000
termos.
*/
function calcularPi(passos) {
    let soma = 0;

    for (let i = 0; i < passos; i++) {
        const termo = 1 / (2 * i + 1) ** 3;
        const sinal = (-1) ** i;
        soma = soma + termo * sinal;
    }
    
    return Math.cbrt(soma * 32);
}

const passos = 1000;
const pi = calcularPi(passos);
console.log(`π calculado: ${pi.toFixed(6)}`);
console.log(`π real:      ${Math.PI.toFixed(6)}`);
console.log(`erro:        ${Math.abs(Math.PI - pi).toFixed(10)}`);