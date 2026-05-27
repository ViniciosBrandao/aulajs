/*
Fazer um programa para entrar com nome, nota da Prova1 e
nota da Prova2 de 15 alunos. Imprimir uma listagem,
contendo: nome, nota da Prova1, nota da Prova2 e a média
arredondada de cada aluno. Ao final, calcule e imprima a
média geral da turma.
*/
function imprimirListagem() {
    const limite = 15;
    let soma = 0;
    let saida = "";

    for (let contador = 1; contador <= limite; contador++) {
        const nome = prompt("Nome: ");
        const valorNota1 = Number(prompt("Nota da Prova 1: "));
        const valorNota2 = Number(prompt("Nota da Prova 2: "));

        const mediaAluno = Math.trunc((valorNota1 + valorNota2) / 2);
        soma = soma + mediaAluno;
        saida += `Nome: ${nome}, N1: ${valorNota1}, N2: ${valorNota2}, Média: ${mediaAluno}` + `\n`;
    }
    const mediaGeral = soma / limite;
    saida += `Média geral da turma: ${Math.trunc(mediaGeral)}`;
    return saida;
}


// Entrada de Dados
const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    const resposta = imprimirListagem();
    console.log(resposta);

    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");