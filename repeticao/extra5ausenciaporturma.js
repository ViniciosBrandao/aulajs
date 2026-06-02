/*
Deseja-se fazer um levantamento a respeito da ausência de alunos `a primeira prova de
Programação de Computadores para cada uma das 14 turmas existentes. Para cada turma, é
fornecido um conjunto de valores, sendo que os dois primeiros valores do conjunto corresponde a
identificação da turma (A, ou B, ou C,...) e ao número de alunos matriculados, e os demais valores
deste conjunto contêm o número de matrícula do aluno e a letra A ou P para o caso de o aluno
estar ausente ou presente, respectivamente. Fazer um algoritmo que:
- para cada turma, calcule a porcentagem de ausência e escreva a identificação da
turma e a porcentagem calculada;
- determine e escreva quantas turmas tiveram porcentagem de ausência superior a 5%.
*/
// Entrada de Dados
const prompt = require("prompt-sync")();

function calcularPorcentagemAusencia() {
    const totalTurmas = 14;
    const limiteAusencia = 5;
    let contadorTurmaAusente = 0;
    let saida = "";

    for (let turma = 1; turma <= totalTurmas; turma++) {
        const identificacaoTurma = prompt("Identificação da turma (A, ou B, ou C,...): ");
        const totalAlunos = Number(prompt("Número de alunos: "));
        let alunosAusentes = 0;

        for (let aluno = 1; aluno <= totalAlunos; aluno++) {
            const matricula = Number(prompt("Matrícula: "));
            const presenca = prompt("A ou P (para o caso de o aluno estar ausente ou presente): ");

            if (presenca.toUpperCase() === "A") {
                alunosAusentes++;
            }
        }

        const porcentagemAusencia = (alunosAusentes / totalAlunos) * 100;
        if (porcentagemAusencia > limiteAusencia) contadorTurmaAusente++;

        saida = saida + `Turma: ${identificacaoTurma}. Porcentagem de ausência: ${porcentagemAusencia.toFixed(2)}%. \n`;
    }

    saida = saida + `Turmas que tiveram porcentagem de ausência superior a 5%: ${contadorTurmaAusente}.`
    return saida;
}

let opcao = "";
// Processamento e Saída da Informação
do {
    const resposta = calcularPorcentagemAusencia();
    console.log(resposta);

    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");