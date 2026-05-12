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
function raizQuadrada(numero) {
    let raiz = 0;
    let subtracao = numero;

    while (subtracao > 0) {
        const impar = 2 * raiz + 1;
        subtracao = subtracao - impar; 
        raiz++;
    }
    
    if (subtracao === 0) return raiz;  
    else return `Aproxidamente: ${raiz - 1}`;
}     

const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    const numero = Number(prompt("Número: "));
  
    const resposta = raizQuadrada(numero);
    console.log(resposta)

    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");