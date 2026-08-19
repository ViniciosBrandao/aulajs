/* Usuario fornece tamanho do vetor
criar o vetor com números aleatórios de 1 a 1000
mostrar o vetor
*/
function preencherVetorAleatorio(tamanhoVetor) {
    const arrayAleatorio = [];

    for (let pos = 0; pos < tamanhoVetor; pos++) {
        arrayAleatorio[pos] = Math.floor(Math.random() * 1000) + 1;
    }

    return arrayAleatorio;
}

const prompt = require('prompt-sync')();

let opcao = "";
do {
    const tamanhoVetor = Number(prompt("Qual o tamanho do vetor? "));

    console.log(preencherVetorAleatorio(tamanhoVetor));

    opcao = prompt("Deseja continuar? S/N ");
} while (opcao.toUpperCase() === 'S');