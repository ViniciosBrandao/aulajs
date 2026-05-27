/*
Fazer um programa para ler o salário bruto de vários
funcionários da empresa GynSoftware, para cada um destes
funcionários calcular e escrever o valor o valor final do IRPF
em conformidade com a tabela abaixo:

Salário Bruto Alíquota
Até R$ 2.259,20 Isento
De R$ 2.259,21 até R$ 2.826,65 7,5%
De R$ 2.826,66 até R$ 3.751,05 15%
De R$ 3.751,06 até R$ 4.664,68 22,5%
Acima de R$ 4.664,68 27,5%
*/
// Entrada de Dados
const prompt = require("prompt-sync")();

function calcularIrpf(salario) {
    if (salario > 4664.68) return salario * 0.275;
    if (salario >= 3751.06) return salario * 0.225;
    if (salario >= 2826.66) return salario * 0.15;
    if (salario >= 2259.21) return salario * 0.075;
    
    return 0; // ate 2259,2 é isento
}
function imprimirIrpfFuncionarios(quantidadeFuncionarios) {
    for (let i = 1; i <= quantidadeFuncionarios; i++) {
        const salarioBruto = Number(prompt("Salário: "));
        const valorIrpf = calcularIrpf(salarioBruto);
        console.log(`Valor IRPF: ${valorIrpf ? "R$ " + valorIrpf.toFixed(2) + " reais." : "isento."}`);
    }
}

let opcao = "";
// Processamento e Saída da Informação
do {
    const quantidadeFuncionarios = Number(prompt("Quantos funcionários: "));
    imprimirIrpfFuncionarios(quantidadeFuncionarios);
    
    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");