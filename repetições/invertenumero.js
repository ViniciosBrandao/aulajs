function inverterNumero(numero) {
    let valor = numero; // guarda o valor do número para extração. pode ser chamado para verificações, como palíndromo
    let numeroI = 0;

    while (valor > 0) { // trunc(0.1) ==> 0
        numeroI = numeroI * 10 + valor % 10; // desloca o dígito extraído e adiciona o próximo. 5 * 10 + 1234 % 10 = 54
        valor = Math.trunc(valor / 10); // remove o último dígito. trunc remove a parte decimal. 12345 ==> 1234
    }

    return numeroI;
}
// Entrada de Dados
const prompt = require("prompt-sync")();

// Processamento e Saída da Informação
let opcao = "";
do{
    const numero = Number(prompt("Número: "));
    const numeroInvertido = inverterNumero(numero);
    console.log(`Número invertido: ${numeroInvertido}`);
    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");