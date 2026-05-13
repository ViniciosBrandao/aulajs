/*
 * Números perfeitos entre 1 e 1000
 *
 * Número perfeito: soma dos divisores próprios = ele mesmo
 * Exemplos: 6 (1+2+3), 28 (1+2+4+7+14), 496, 8128
 */

function somarDivisores(numero) {
    let soma = 1; // 1 é sempre divisor de qualquer número > 1, logo, já adiconamos na soma e inicamos o divisor em 2.

    for (let divisor = 2; divisor <= Math.sqrt(numero); divisor++) { // basta testar os divisores até a raiz do número e coletar os pares. Exemplo 28: divisores de 28: 1×28, 2×14, 4×7, basta testar até √28 ≈ 5.29 e coletar os pares
        if (numero % divisor === 0) {
            soma += divisor;
            if (divisor !== numero / divisor) soma += numero / divisor; // Coleta os pares dos divisores. Exemplo 28: 2 é diferente de (28/2)=>14, entao adiciona à soma 14, o par do divisor 2 para numero=28.
        }
    }

    return soma;
}

function imprimirPerfeitosAte(limite) {
    for (let numero = 2; numero <= limite; numero++) {
        if (somarDivisores(numero) === numero) {
            console.log(numero);
        }
    }
}

imprimirPerfeitosAte(1000);