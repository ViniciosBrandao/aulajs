function lerNotas(arrayNotas, quantidadeAlunos) { 
    for (let pos = 0; pos < quantidadeAlunos; pos++) {
        const nota = Number(prompt(`Nota[${pos}] = `));
        arrayNotas[pos] = nota;
    }
}
function calcularMedia(arrayNotas) {
    let soma = 0;

    for(const valor of arrayNotas) {
        soma = soma + valor;
    }

    const media = soma / arrayNotas.length;
    return media;
}
function obterMaiorNota(arrayNotas) {
    let maiorNota = arrayNotas[0];

    for(const elemento of arrayNotas) {
        if(elemento > maiorNota) maiorNota = elemento;
    }

    return maiorNota;
}
function obterMenorNota(arrayNotas) {
    let menorNota = arrayNotas[0];

    for(const elemento of arrayNotas) {
        if(elemento < menorNota) menorNota = elemento;
    }

    return menorNota;
}
// Entrada de Dados
const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    const tamanhoDaTurma = Number(prompt("Tamanho da turma: "));
    const arrayNotas = [];

    lerNotas(arrayNotas, tamanhoDaTurma);
    console.log(arrayNotas);
    console.log(calcularMedia(arrayNotas));
    console.log(obterMaiorNota(arrayNotas));
    console.log(obterMenorNota(arrayNotas));

    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");