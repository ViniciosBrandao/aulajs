/*
Números palíndromos são aqueles que escritos da direita para
esquerda ou da esquerda para direita tem o mesmo valor. Exemplo
929, 44, 97379. Fazer um algoritmo que dado um número de 5 dígitos;
calcule e escreva se este é ou não palíndromo.
*/
function inverterNumero(numero5D) {
    let valor = numero5D; // guarda o valor do número 5 dígitos para extração.
    let numeroI = numero5D % 10; // extrai último dígito. Ex: 12345> 5
    valor = Math.trunc(valor / 10); // remove o último dígito. trunc remove a parte decimal. 12345 ==> 1234
    numeroI = numeroI * 10 + valor % 10; // desloca o dígito extraído e adiciona o próximo. 5 * 10 + 1234 % 10 = 54
    valor = Math.trunc(valor / 10); // remove o último dígito. trunc remove a parte decimal. 1234 ==>  123
    numeroI = numeroI * 10 + valor % 10; // desloca o dígito extraído e adiciona o próximo. 54 * 10 + 1234 % 10 = 543
    valor = Math.trunc(valor / 10); // remove o último dígito. trunc remove a parte decimal. 123 ==> 12
    numeroI = numeroI * 10 + valor % 10; // desloca o dígito extraído e adiciona o próximo. 543 * 10 + 12 % 10 = 5432
    valor = Math.trunc(valor / 10); // remove o último dígito. trunc remove a parte decimal. 12 ==> 1
    numeroI = numeroI * 10 + valor % 10; // desloca o dígito extraído e adiciona o próximo. 5432 * 10 + 1 % 10 = 54321. para 5 dígitos o laço termina aqui.
    
    return numeroI
}
function verificarPalindromo(numero, numeroInvertido) {
    if (numero === numeroInvertido) return "Palíndromo";
    else return "Não é Palíndromo";
}
// Entrada de Dados
const prompt = require("prompt-sync")();

// Processamento e Saída da Informação
let opcao = "";
do{
    const numero5D = Number(prompt("Número de 5 dígitos: "));
    const numeroInvertido = inverterNumero(numero5D);
    const palindromo = verificarPalindromo(numero5D, numeroInvertido);
    console.log(`${palindromo}. Número invertido: ${numeroInvertido}`);
    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");