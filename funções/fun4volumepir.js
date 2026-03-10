function calcularVolumePiramide(base, altura){
    const volume = base * altura * 1/3
    return volume
}

// Entrada de dados
const prompt = require("prompt-sync")();
const base = prompt("Digite a base: ");
const altura = prompt("Digite a altura: ");
 
// Processamento
const volume = calcularVolumePiramide(base, altura);

// Saída da Informação
console.log(`O volume da pirâmide é ${volume.toFixed(2)} m3`);
