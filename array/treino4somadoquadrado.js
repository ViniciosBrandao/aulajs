/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 (1+4+4)
*/
// Entrada de dados
const prompt = require('prompt-sync')();

function squareSumcomFor(numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total = total + (numbers[i] ** 2);
    }
    
    return total;
}
function squareSumDeclaratorio(numbers) {
    return numbers.reduce((acumulador, elemento) => acumulador + elemento ** 2, 0); 
}
// Processamento e Saída da Informação
let opcao = "";
do {
    let input = prompt("Lista de números (ex: 2, 4, -10): ");
    const meuArray = input.split(",").map(elemento => Number(elemento.trim()));
    
    console.log(squareSumcomFor(meuArray));
    console.log(squareSumDeclaratorio(meuArray));

    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");