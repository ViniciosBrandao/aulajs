/*
Números capicuas, ou palíndromos, são números que permanecem os
mesmos quando lidos de trás para frente, como 33, 121, 5445 ou 82328. A
palavra, de origem catalã "cap i cua" (cabeça e cauda), refere-se a essa
simetria numérica. Eles são comuns em matemática recreativa e datas
calendárias, e existem infinitos números capicuas.Fazer um algoritmo que
dado um número inteiro positivo, calcule e escreva se este é ou não
capicua.
*/
function inverterNumero(numero) {
    let valor   = numero; // guarda o valor do número para extração.
    let numeroI = 0; 
    
    while (valor > 0) {
        numeroI = numeroI * 10 + valor % 10; // desloca o dígito extraído e adiciona o próximo.Segunda iteração > 5 * 10 + 1234 % 10 = 54
        valor = Math.trunc(valor / 10); // remove o último dígito. trunc remove a parte decimal. 12345 ==> 1234
    }
    
    return numeroI
}
function verificarPalindromo(numero) {
    return numero === inverterNumero(numero); 
}   

const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    const numero = Number(prompt("Número: "));
    
    const resposta = verificarPalindromo(numero);
    console.log(resposta ? "Palíndromo." : "Não é palíndromo.");

    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");