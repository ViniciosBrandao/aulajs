/*
 * Triângulo de Pascal sem arrays
 *
 * C(n, k) calculado por recorrência multiplicativa:
 * C(n, 0) = 1
 * C(n, k) = C(n, k-1) × (n - k + 1) / k
 *
 * Evita fatorial — mais eficiente e sem risco de overflow precoce
 */
function calcularCombinacao(n, k) {
    let resultado = 1; // para k = 0

    for (let i = 1; i <= k; i++) {
        resultado = resultado * (n - i + 1) / i;
    }

    return resultado;
}

function imprimirTrianguloPascal(limite) {
    let saida = "";

    for (let linha = 0; linha <= limite; linha++) {
        const recuo = " ".repeat((limite - linha) * 2);
        saida += recuo;

        for (let coluna = 0; coluna <= linha; coluna++) {
            const elemento = calcularCombinacao(linha, coluna);
            saida += coluna === 0 ? `${elemento}` : `   ${elemento}`; // se a coluna for 0, então imprima o elemento sem espaço anterior, se nao, imprima com dois espaços anteriores. 
        }

        saida += "\n"; // depois de imprimir a linha pula
    }

    return saida;
}

const prompt = require("prompt-sync")();

do {
    const linha = Number(prompt("Imprimir até qual linha: "));

    if (!Number.isInteger(linha) || linha < 0) {
        console.log("Digite um inteiro positivo.");
        continue;
    }

    console.log(imprimirTrianguloPascal(linha));

} while (prompt("Continuar? (S/N) ").toUpperCase() === "S");