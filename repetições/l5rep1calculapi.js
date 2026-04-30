/*
Fazer um programa para calcular e escrever o valor do número π, com
precisão de 0,0001, usando a série:

Para obter a precisão desejada, adicionar apenas os termos cujo valor
absoluto seja maior ou igual a 0,0001.
*/
function calcularPi(precisao) {
    let soma = 0;
    let i    = 0;

    while (1 / (2 * i + 1) >= precisao) {
        const termo = 1 / (2 * i + 1);
        const sinal = (-1) ** i;
        soma = soma + termo * sinal;
        i++;
    }

    return 4 * soma;
}

const precisao = 0.0001;
const pi = calcularPi(precisao);
console.log(`π calculado: ${pi.toFixed(6)}`);
console.log(`π real:      ${Math.PI.toFixed(6)}`);


