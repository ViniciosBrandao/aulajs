/* Prompt-sync. Entrada de dados por teclado via terminal utilizando o pacote prompt-sync.
Prompt-sync. Entrada de dados por teclado via terminal utilizando o pacote prompt-sync.
Entrada de dados */
const prompt = require("prompt-sync")();
const tempoViagem = prompt("Digite o tempo de viagem: ");
const velMedia = prompt("Digite a velocidade média: ");

// Processamento
const distancia = tempoViagem * velMedia
const qtdLitros = distancia / 12.5
const custo = qtdLitros * 6.20

// Saída da Informação
console.log(`Sua viagem custou R$ ${custo} reais`);