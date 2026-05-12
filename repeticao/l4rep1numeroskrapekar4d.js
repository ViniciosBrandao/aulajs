/*
O número 3025 possui a seguinte característica:
30 + 25 = 55
55 ** 2 = 3025
Fazer um programa que pesquise e imprima todos os números de
quatro algarismos que apresentam tal característica.
*/
function obterNumerosCaracteristicos4d() {
    let numero = 1000;
    let saida = "";

    while (numero <= 9999) {
        const doisPrimeiros = Math.trunc(numero / 100);
        const doisUltimos = numero % 100;
        const soma = doisPrimeiros + doisUltimos;

        if (soma ** 2 === numero) {
            saida += `${numero}\n`;
        }

        numero++;
    }

    return saida;
}

const listaNumeros = obterNumerosCaracteristicos4d();

console.log(`Números de 4 dígitos onde (primeiros 2 + últimos 2)² = número:\n${listaNumeros}`);