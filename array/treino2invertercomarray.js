/*
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example (Input => Output):
35231 => [1,3,2,5,3]
0     => [0]
*/
// Entrada de Dados
const prompt = require("prompt-sync")();

function digitize(n) { // mais rápida, só funciona para números, mais fácil debugar
    const digitos = [];
    let resto = n;
// do while absorve casos em que o n é 0, executando pelo menos uma vez
    do { 
        digitos.push(resto % 10); // inserir no array em ordem invertida
        resto = Math.trunc(resto / 10); // / 1 > 0 (0.1 com math trunc, pois remove tudo a direita da virgula, logo, vira 0)
    } while (resto > 0);

    return digitos;
}
function digitizeString(n) { // mais lenta pois tem conversao (string>array>números), mais legível, é utilizável para qualquer parsing de string
  return String(n).split('').map(Number).reverse()
}
// Processamento e Saída da Informação
let opcao = "";
do {
    const n = Number(prompt("Número positivo: "));
    
    console.log(digitize(n));

    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");