/*
Soma dos dígitos
entrada: 1234
saída:   10  (1+2+3+4)
*/
/*
 * Soma dos dígitos de um número inteiro positivo
 * Extração sucessiva por % 10 e Math.trunc
 */

function somarDigitos(numero) {
    let soma = 0;

    while (numero > 0) {    
        soma   += numero % 10; // 1 % 10 = 1; quando o numero não for divisivel retorna o numero 
        numero  = Math.trunc(numero / 10); // remove o ultimo digito do numero. 1234 => 123
    }

    return soma;
}

const prompt = require("prompt-sync")();

do {
    const numero = Number(prompt("Número: "));

    console.log(`Soma dos dígitos: ${somarDigitos(numero)}`);

} while (prompt("Continuar? (S/N) ").toUpperCase() === "S");


