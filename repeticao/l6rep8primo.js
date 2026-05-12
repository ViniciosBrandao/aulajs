/*
O número primo é aquele que somente é divisível por ele mesmo e pela
unidade. Fazer um algoritmo que imprima todos os números primos entre 1
e 100.
*/
function imprimirPrimo(limite) { 
    for (let numero = 2; numero <= limite; numero++) {
        let ehPrimo = true;

        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                ehPrimo = false;
                break; // achou divisor para o loop, nao é primo, nao precisa continuar.
            }
        } 

        if (ehPrimo) console.log(numero);
    }
}

// Entrada de Dados
const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    const limite = Number(prompt("Até que número: "));

    imprimirPrimo(limite);

    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");