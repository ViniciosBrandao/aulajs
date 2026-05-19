/*
Decomposição em fatores primos
entrada: 360
saída:   2 × 2 × 2 × 3 × 3 × 5
*/
function decomporPrimo(numero) {
    let saida = "";
    let divisor = 2;
    let resto = numero;

    while (resto > 1) {
        while (resto % divisor === 0) {
            if (saida !== "") saida = saida + " x ";
            saida = saida + `${divisor}`; 
            resto = resto / divisor;
        }
        divisor++;

        if (divisor * divisor > resto) { // se divisor > √resto
            if (resto > 1) {             // o resto que sobrou é primo
                if (saida !== "") saida += " × ";
                saida += resto;
            }
            break;
        }
    }

    return saida;
}

// Entrada de Dados
const prompt = require("prompt-sync")();

// Processamento e Saída da Informação
do {
    const numero = Number(prompt("Número: "));

    console.log(decomporPrimo(numero));

} while (prompt("Deseja continuar? (S/N) ").toUpperCase() === "S");

