/*
Elabore um algoritmo que leia dois números inteiros e a operação
aritmética desejada; calcule, então, a resposta adequada. Utilize os
símbolos da tabela a seguir para saber qual a operação aritmética
escolhida.

Símbolo Operação Aritmética
+ Adição
- Subtração
* Multiplicação
/ Divisão
*/
function calcularOperacao(tipoOperacao, numero1, numero2) {
    const adicao = "+";
    const subtracao = "-";
    const multiplicacao = "*";
    const divisao = "/";

    switch (tipoOperacao) {
        case adicao:
            return numero1 + numero2;
        
        case subtracao:
            return numero1 - numero2;
        
        case multiplicacao:
            return numero1 * numero2;
        
        case divisao:
            return numero1 / numero2;
        
        default: 
            return null
    }
}
// Entrada de Dados
const prompt = require("prompt-sync")();

// Processamento e Saída da Informação
let opcao = "";
do{
    console.log("MENU DE OPÇÕES: ");
    console.log("+ Adição");
    console.log("- Subtração"); 
    console.log("* Multiplicação"); 
    console.log("/ Divisão"); 
    const tipoOperacao = prompt("Operação arimtética: ")
    const numero1 = Number(prompt("Número um: "));
    const numero2 = Number(prompt("Número dois: "));
    const resultado = calcularOperacao(tipoOperacao, numero1, numero2);
    console.log(`Resultado: ${resultado}`);
    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");