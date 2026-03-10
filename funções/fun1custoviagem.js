function calcularCustoViagem(tempo, velocidade){
    const distancia = tempo * velocidade;
    const quantidadeLitros = distancia / 12.5;
    const custo = quantidadeLitros * 6.20;
    return custo;
}

// Entrada de dados
const prompt = require("prompt-sync")();
const tempoDeViagem = prompt("Digite o tempo de viagem:");
const velocidadeMedia = prompt("Digite a velocidade média:");

// Processamento
const custoTotalViagem = calcularCustoViagem(tempoDeViagem,velocidadeMedia);

// Saída da Informação
console.log(`Sua viagem custou R$ ${custoTotalViagem.toFixed(2)} reais`);