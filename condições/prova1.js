function verificarEmprestimo(salarioBruto, valorPrestacao) {
    if (salarioBruto * 30 / 100 >= valorPrestacao) return "Empréstimo Concedido";
    return "Empréstimo Negado"
}
// Entrada de Dados
const prompt = require("prompt-sync")();

// Processamento e Saída da Informação
let opcao = "";
do{
    const salarioBruto = Number(prompt("Salário bruto: "));
    const valorPrestacao = Number(prompt("Valor da prestação: "));
    const resposta = verificarEmprestimo(salarioBruto, valorPrestacao);
    console.log(resposta);
    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");