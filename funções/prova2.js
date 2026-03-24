function calculaPesoJupiter(nome, peso){
    const pesoJupiter = (peso * 2.64) / 9.87;
    console.log(`${nome} seu peso em Júpiter é ${pesoJupiter.toFixed(4)}`);
}

// Entrada de dados
const prompt = require("prompt-sync")();
const nome = prompt("Digite seu nome: ");
const peso = Number(prompt("Digite seu peso em kg: "));

// Processamento e Saída da Informação
calculaPesoJupiter(nome, peso);



