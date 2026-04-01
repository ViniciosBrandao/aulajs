/*
5. Tendo como dados de entrada a altura e o sexo de uma pessoa,
construa um algoritmo que calcule seu peso ideal, utilizando as
seguintes expressões:

● Para homens: 72.7 * h −58 ;
● Para mulheres: 62.1* h −44.7.

Obs.: Usuário ideal - ele não irá digitar valores incorretos.
*/
function calcularPesoIdeal(sexo, altura){
    if (sexo.toUpperCase() === "H") return 72.7 * altura - 58;
    if (sexo.toUpperCase() === "M")  return 62.1 * altura - 44.7;
}

// Entrada de Dados
const prompt = require("prompt-sync")();
const altura = Number(prompt("Altura (ex: 1.75): "));
const sexo = prompt("Sexo (H/M): ");

// Processamento
const resposta = calcularPesoIdeal(sexo, altura);

// Saída da Informação
console.log(`Peso ideal: ${resposta.toFixed(2)} kg`);
