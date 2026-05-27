/*
Fazer um programa para ler o salário bruto de vários
funcionários da empresa GynSoftware, para cada um destes
funcionários calcular e escrever o valor o valor final do INSS
em conformidade com a tabela abaixo:

Salário Bruto Alíquota
Até R$ 1.412,00 7,5%
De R$ 1.412,01 até R$ 2.666,68 9,0%
De R$ 2.666,69 até R$ 4.000,03 12,0%
Acima de R$ 4.000,04 14,0%
*/
// Entrada de Dados
const prompt = require("prompt-sync")();

function calcularInss(salario) {
    if (salario > 4000.04) return salario * 14 / 100;
    if (salario >= 2666.69) return salario * 12 / 100;
    if (salario >= 1412.01) return salario * 9 / 100;
    
    return salario * 7.5 / 100; // ate 1412
}
function imprimirInssFuncionarios(quantidadeFuncionarios) {
    for (let i = 1; i <= quantidadeFuncionarios; i++) {
        const salarioBruto = Number(prompt("Salário: "));
        const valorInss = calcularInss(salarioBruto);
        console.log(`Valor Inss: R$ ${valorInss.toFixed(2)} reais.`)
    }
}

let opcao = "";
// Processamento e Saída da Informação
do {
    const quantidadeFuncionarios = Number(prompt("Quantos funcionários: "));
    imprimirInssFuncionarios(quantidadeFuncionarios);
    
    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");