/*
Um endocrinologista deseja controlar a saúde de seus pacientes e,
para isso, ele utiliza o índice de massa corporal (IMC). Sabe-se que o
IMC é calculado através da seguinte fórmula:

onde: peso é dado em Kg e altura é dada em metros.
Criar um programa que apresente o nome do paciente, seu IMC e sua
faixa de risco, baseando-se na seguinte tabela:

IMC Faixa de Risco
abaixo de 20 abaixo do peso ideal
a partir de 20 até 25 peso normal
acima de 25 até 30 excesso de peso
acima de 30 até 35 obesidade
acima de 35 obesidade mórbida
*/
function calcularImc(peso, altura) {
    return  peso / altura ** 2;
}
function obterFaixaDeRisco(imc) {
    if (imc > 35) return "obesidade mórbida";
    if (imc > 30) return "obesidade";
    if (imc > 25) return "excesso de peso";
    if (imc >= 20) return "peso normal";
    
    return "abaixo do peso ideal";
}
// Entrada de Dados
const prompt = require("prompt-sync")();

// Processamento e Saída da Informação
let opcao = "";
do{
    const nome = prompt("Nome: ");
    const peso = Number(prompt("Peso (KG): "));
    const altura = Number(prompt("Altura (ex: 1.75): "));

    const imc = calcularImc(peso, altura);
    const faixaRisco = obterFaixaDeRisco(imc);
    console.log(`${nome}: Imc ${imc.toFixed(2)}, ${faixaRisco}.`);
    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");