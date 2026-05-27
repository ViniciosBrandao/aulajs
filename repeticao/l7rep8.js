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
function obterQuantidadePareImpar() {
    const limite = 200;
    let quantidadePar = 0;
    let quantidadeImpar = 0;

    for (let i = 1; i <= limite; i++) {
        const numero = Number(prompt("Número: "));

        if (numero % 2 === 0) {
            quantidadePar++;
        } else {
            quantidadeImpar++;
        }
    }

    return `Quantidade de números par: ${quantidadePar}. Quantidade de ímpares ${quantidadeImpar}`;
}


// Entrada de Dados
const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    const resposta = obterQuantidadePareImpar();
    console.log(resposta);

    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");