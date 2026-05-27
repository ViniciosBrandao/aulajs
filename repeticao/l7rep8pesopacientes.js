/*
Fazer um programa para ler os seguintes dados de vários
pacientes: nome, peso, altura e sexo. calcule e escreva:
● O IMC do paciente deve ser calculado com a seguinte

fórmula:
● Identificar também a faixa de peso do paciente conforme
critério definido na tabela abaixo:

IMC Faixa de Risco
abaixo de 20 abaixo do peso ideal
a partir de 20 até 25 peso normal
acima de 25 até 30 excesso de peso
acima de 30 até 35 obesidade
acima de 35 obesidade mórbida

● O peso ideal do paciente com base nas fórmulas abaixo:
Peso ideal = ( 72.7 × altura ) − 58 - para os homens;
Peso ideal = ( 62.1 × altura ) − 44.7 - para as mulheres.
*/
// Entrada de Dados
const prompt = require("prompt-sync")();

function imprimirInformacoesPacientes(numeroPacientes) {
    for (let contador = 1; contador <= numeroPacientes; contador++) {
        const nome = prompt("Nome: ");
        const peso = Number(prompt("Peso (KG): "));
        const altura = Number(prompt("Altura (ex: 1.75): "));
        const sexo = prompt("Sexo (H/M): ");
        const cintura = prompt("Cintura (cm): "); // // mantido como string — vazio significa não informado
       
        const imc = calcularImc(peso, altura);
        const faixaRisco = obterFaixaDeRisco(imc);
        const pesoIdeal = calcularPesoIdeal(sexo, altura);
        const massaGorda = calcularMassaGordaRelativa(altura, sexo, cintura);
        
        console.log(`${nome}: Imc ${imc.toFixed(2)}, ${faixaRisco}, Peso ideal: ${pesoIdeal.toFixed(2)} kg, Massa Gorda Relativa: ${massaGorda ? massaGorda.toFixed(2) + "%" : "não informada"}.`);
    }
}
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
function calcularPesoIdeal(sexo, altura){
    if (sexo.toUpperCase() === "H") return 72.7 * altura - 58;
    if (sexo.toUpperCase() === "M")  return 62.1 * altura - 44.7;
}
function calcularMassaGordaRelativa(altura, sexo, cintura) {
    if (cintura === "") return null;
    if (sexo.toUpperCase() === "H") return 64 - (20 * (altura * 100) / cintura);
    if (sexo.toUpperCase() === "M")  return 76 - (20 * (altura * 100) / cintura); 
}
// Processamento e Saída da Informação
let opcao = "";
do{
    const numeroPacientes = Number(prompt("Número pacientes: "));
    imprimirInformacoesPacientes(numeroPacientes);
    
    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");