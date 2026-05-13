/*
Fazer um algoritmo que imprima todos os números perfeitos entre 1 e
1000. Número perfeito é aquele cuja soma de seus divisores, exceto ele
próprio, é igual ao número.
Exemplo: 6 é um número perfeito porque 1 + 2 + 3 = 6.
*/
const limite = 1000;

function imprimirNumeroPerfeito(limite) { 
    let soma = 0;

    for (let numero = 1; numero <= limite; numero++) {

        for (let divisor = 1; divisor < numero; divisor++) {
            if (numero % divisor === 0) {

                soma = soma + divisor;
            } 
        }

        if (soma === numero) console.log(numero);
        soma = 0;
    }
}

imprimirNumeroPerfeito(limite);
