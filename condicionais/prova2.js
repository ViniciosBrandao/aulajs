function obterAlunoVencedor(nota1, nota2, nota3, aluno1, aluno2, aluno3) {
    let maior = nota1;
    let alunoVencedor = aluno1;

    if (nota2 > maior) {
        maior = nota2;
        alunoVencedor = aluno2;
    }

    if (nota3 > maior) {
        alunoVencedor = aluno3;
    }

    return alunoVencedor;
}

// Entrada de Dados
const prompt = require("prompt-sync")();

// Processamento e Saída da Informação
let opcao = "";
do{
    const aluno1 = prompt("Nome do aluno: ");
    const nota1 = Number(prompt("Nota 1: "));
    const aluno2 = prompt("Nome do aluno: ");
    const nota2 = Number(prompt("Nota 2: "));
    const aluno3 = prompt("Nome do aluno: ");
    const nota3 = Number(prompt("Nota 3: "));
 
    const resultado = obterAlunoVencedor(nota1, nota2, nota3, aluno1, aluno2, aluno3);
    console.log(resultado);
    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");