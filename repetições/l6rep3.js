/*
Uma das maneiras de se conseguir a raiz quadrada de um número é
subtrair do número os ímpares consecutivos a partir de 1, até que o
resultado da subtração seja menor ou igual a zero. O número de vezes que
se conseguir fazer a subtração é a raiz quadrada exata(resultado 0) ou
aproximado do número(resultado negativo).
Exemplo: Raiz quadrada de 16 → 16 – 1 =15; → 1
15 – 3 = 12; → 2
12 – 5 = 7; → 3
7 – 7 = 0 ; → 4
A raiz de 16 é 4.
*/
function calcularQuocienteRestoPorAdicaoSubtracao(numero1, numero2) {
    let quociente = 0;
    let resto = numero1;

    while (resto >= numero2) {
        resto = resto - numero2; 
        quociente++;
    }

    return `Quociente: ${quociente}. Resto: ${resto}`;  
}     

const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    const numero1 = Number(prompt("Número 1: "));
    const numero2 = Number(prompt("Número 2: "));
  
    const resposta = calcularQuocienteRestoPorAdicaoSubtracao(numero1, numero2);
    console.log(resposta)

    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");