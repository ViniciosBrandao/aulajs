/*
Escrever um algoritmo que leia o número de identificação, as 3 notas
obtidas por um aluno nas 3 verificações e a nota média dos exercícios
que fazem parte da avaliação. Calcular a média de aproveitamento do
aluno, usando a fórmula:

Calcular o conceito obtido pelo aluno com base na tabela abaixo:

Média Final Conceito
9,1 à 10,0 A
7,6 à 9,0 B
6,1 à 7,5 C
4,1 à 6,0 D
< 4,0 E

O algoritmo deve escrever o número do aluno, suas notas, a média
dos exercícios, a média final, o conceito correspondente e a
mensagem: APROVADO se o conceito for A, B ou C e REPROVADO,
se o conceito for D ou E.
*/
function calcularMediaFinal(nota1, nota2, nota3, mediaExercicios) {
    const mediaFinal = (nota1 + (nota2 * 2) + (nota3 * 3) + mediaExercicios) / 7;
    return mediaFinal;
    }
function calcularConceitoAluno(mediaFinal) {
    let conceitoAluno = null;

    if (mediaFinal >= 0 && mediaFinal <= 10) {
        if (mediaFinal >= 9.1) return "A";
        if (mediaFinal >= 7.6) return "B";
        if (mediaFinal >= 6.1) return "C";
        if (mediaFinal >= 4.1) return "D";
        return "E";
    } 
    
    return conceitoAluno;
}
function mensagemResultadoLetivo(conceitoAluno) {
    switch (conceitoAluno) {
        case "D":
        case "E":
            return "REPROVADO";
        case null:
            return "Erro no cálculo da média";

        default: 
            return "APROVADO";
    }
}

// Entrada de Dados
const prompt = require("prompt-sync")();

// Processamento e Saída da Informação
let opcao = "";
do{
    const numeroIdentificacao = Number(prompt("Número de identificação: "));
    const nota1 = Number(prompt("Nota 1: "));
    const nota2 = Number(prompt("Nota 2: "));
    const nota3 = Number(prompt("Nota 3: "));
    const mediaExercicios = Number(prompt("Nota média dos Exercícios: "));
    const mediaFinal = calcularMediaFinal(nota1, nota2, nota3, mediaExercicios);
    const conceitoAluno = calcularConceitoAluno(mediaFinal);
    const resultadoLetivo = mensagemResultadoLetivo(conceitoAluno);
    console.log(`Aluno número ${numeroIdentificacao}. N1: ${nota1}, N2: ${nota2}, N3: ${nota3} e média dos exercícios: ${mediaExercicios}.`);
    console.log(`Média Final: ${mediaFinal.toFixed(1)} Conceito: ${conceitoAluno}. Situação: ${resultadoLetivo}`);
    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");