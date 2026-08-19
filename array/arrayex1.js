function lerNotas(array, tamanhoDaTurma) {

    for(let pos = 0; pos < tamanhoDaTurma; pos++) {
        array[pos] = Number(prompt("Qual a nota? "));
    }

    return array;
}
function calcularMedia(array) {
    let somaNotas = 0;

    for (let pos = 0; pos < array.length; pos++) {
        somaNotas += array[pos];
    }

    return somaNotas / array.length;
}
function encontrarMaiorNota(array) {
    let maior = array[0];

    for (pos = 1; pos < array.length; pos++) {
        if (array[pos] > maior ) maior = array[pos];
    }

    return maior;
}
function encontrarMenorNota(array) {
    let menor = array[0]

    for (pos = 1; pos < array.length; pos++) {
        if (array[pos] < menor ) menor = array[pos];
    }

    return menor;
}
function mostrarNotas(array, media) {
    for (const nota of array) {
        if (nota > media) {
            console.log(`Nota acima da média: ${nota}`);
        } else {
            console.log(`Nota menor ou igual à média: ${nota}`);
        }
    }
}

const prompt = require("prompt-sync")();

const tamanhoDaTurma = Number(prompt("Qual o tamanho da turma? "));

const notas = [];

console.log(lerNotas(notas, tamanhoDaTurma));

const media = calcularMedia(notas);
console.log(media.toFixed(2));
console.log(encontrarMaiorNota(notas));
console.log(encontrarMenorNota(notas));
mostrarNotas(notas, media);

