/*
Criar um algoritmo que leia a idade de uma pessoa e que mostre a
sua classe eleitoral:
● Não-eleitor (abaixo de 16 anos);
● Eleitor Obrigatório (entre 18 e 65 anos);
● Eleitor facultativo (entre 16 e 18 anos e maior de 65 anos).
Obs.: Usuário ideal - ele não irá digitar valores incorretos.
*/

function classeEleitoral(idade){
    if (idade < 16) return "Não-eleitor (abaixo de 16 anos)";
    if (idade < 18) return "Eleitor facultativo (entre 16 e 18 anos)";
    if (idade <= 65) return "Eleitor obrigatório";
    return "Eleitor facultativo (maior de 65 anos)";
}

// Entrada de dados
const prompt = require("prompt-sync")();
const idade = Number(prompt("Idade: "));

// Processamento  
const resposta = classeEleitoral(idade);

// Saída da Informação
console.log(resposta)