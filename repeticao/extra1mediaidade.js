/*
Fazer um algoritmo que:
- Leia um número indeterminado de linhas contendo cada uma a idade de um indivíduo.
A última linha que não entrará nos cálculos, contém o valor da idade igual a zero.
- Calcule e escreva a idade média deste grupo de indivíduos.
*/
// Entrada de Dados
const prompt = require("prompt-sync")();

function calcularMediaIdade() {
    let somaIdades = 0;
    let contador = 0;

    while (true) {
        const idade = Number(prompt("Idade (0 para encerrar): "));

        if (idade === 0) break;

        somaIdades += idade;
        contador++;
    }

    if (contador === 0) return null; // guard clause: evita divisão por zero

    return somaIdades / contador;
}

const media = calcularMediaIdade();

if (media === null) {
    console.log("Nenhuma idade informada.");
} else {
    console.log(`Idade média do grupo: ${Math.trunc(media)} anos.`);
}
