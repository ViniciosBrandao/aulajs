/* 15 alunos nome do aluno e nota
calcular média geral da turma
maior e menor nota da turma
usar estrutura de repetição For */
const prompt = require("prompt-sync")();
const totalAlunos = 4;

function calcularMediaGeral() {
    let somaNotas = 0;
    
    console.log(`Digite as notas para calcular a média geral dos ${totalAlunos} alunos: `);

    for (let aluno = 1; aluno <= totalAlunos; aluno++) {
        const nota = Number(prompt("Nota: "));

        somaNotas += nota;   
    }

    const mediaGeral = somaNotas / totalAlunos;

    console.log(`Média geral da turma: ${mediaGeral.toFixed(2)}`);
 
    classificarAlunos(mediaGeral);
}
function classificarAlunos(mediaGeral) {
    let maiorNota = -Infinity;
    let menorNota = Infinity;
    let nomeMaiorNota     = "";
    let nomeMenorNota     = "";
    let alunosAcimaMedia  = "";
    let alunosAbaixoMedia = "";
    let alunosNaMedia     = "";
    
    console.log("Para classificação, digite o nome do aluno e sua nota: ");

    for (let aluno = 1; aluno <= totalAlunos; aluno++) {
        const nome = prompt("Nome do aluno: ");
        const nota = Number(prompt("Nota: "));

         if (nota > maiorNota) {
            maiorNota = nota;
            nomeMaiorNota = nome;
        } 
            
        if (nota < menorNota) {
            menorNota = nota;
            nomeMenorNota = nome;
        }      

        if (nota > mediaGeral) {
            if (alunosAcimaMedia !== "") alunosAcimaMedia += ", "; // adiciona ", " somente se já houver um nome na lista

            alunosAcimaMedia = alunosAcimaMedia + nome;
        } else if (nota < mediaGeral) {
            if (alunosAbaixoMedia !== "") alunosAbaixoMedia += ", ";

            alunosAbaixoMedia = alunosAbaixoMedia + nome;
        } else {
            if (alunosNaMedia !== "") alunosNaMedia += ", ";

            alunosNaMedia = alunosNaMedia + nome;
        }
    }

    console.log(`
Média geral da turma: ${mediaGeral.toFixed(2)}
Maior nota: ${maiorNota}. Aluno: ${nomeMaiorNota}
Menor nota: ${menorNota}. Aluno: ${nomeMenorNota}
Alunos acima da média: ${alunosAcimaMedia}
Alunos na média: ${alunosNaMedia}
Alunos abaixo da média: ${alunosAbaixoMedia}
    `)
}

calcularMediaGeral();