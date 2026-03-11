function calcularDistanciaAb(coordX1, coordY1, coordX2, coordY2){
    const distancia = Math.sqrt((coordX2 - coordX1) ** 2 + ((coordY2 - coordY1) ** 2));
    return distancia;
}

// Entrada de dados
const prompt = require("prompt-sync")();
const coordX1 = prompt("Digite as coordenadas x1: ");
const coordY1 = prompt("Digite as coordenadas y1: ");
const coordX2 = prompt("Digite as coordenadas x2: ");
const coordY2 = prompt("Digite as coordenadas y2: ");

// Processamento
const distancia = calcularDistanciaAb(coordX1, coordY1, coordX2, coordY2);

// Saída da Informação
console.log(`A distância entre A e B é igual a ${distancia.toFixed(2)}`);