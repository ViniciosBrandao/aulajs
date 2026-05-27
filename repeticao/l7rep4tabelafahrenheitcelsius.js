/*
Criar um programa que imprima a tabela de conversão de
graus Celsius e Fahrenheit para o intervalo desejado pelo
usuário. O algoritmo deve solicitar ao usuário o limite superior,
o limite inferior do intervalo e o decremento. Fórmula de
conversão: C = 5 (F - 32) / 9.
*/
function imprimirTabelaConversaoCelsiusFahrenheit(limiteInferior, limiteSuperior, decremento) {
    let tabela = "";

    for (let fahrenheit = limiteSuperior; fahrenheit >= limiteInferior; fahrenheit = fahrenheit - decremento) {
        const celsius = (fahrenheit - 32) * 5 / 9;
        tabela += `${fahrenheit}ºF equivale a ${celsius.toFixed(2)}ºC` + `\n`;
        console.log(tabela);
    }
    
    return tabela;
}

// Entrada de dados
const prompt = require("prompt-sync")();
const limiteSuperior = Number(prompt("Limite superior (Fahrenheit): "));
const limiteInferior = Number(prompt("Limite inferior (Fahrenheit): "));
const decremento = Number(prompt("Decremento: "));

let opcao = "";
// Processamento e Saída da Informação
do {
    const resposta = imprimirTabelaConversaoCelsiusFahrenheit(limiteInferior, limiteSuperior, decremento);
    console.log(resposta);

    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");