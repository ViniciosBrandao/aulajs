function lerArray(array) {
    for (let pos = 0; pos < 5; pos++) {
        const valor = Number(prompt("Número: "));
        array[pos] = valor; 
    }
}

const prompt = require("prompt-sync")();

const vetor1 = [];
lerArray(vetor1);
const vetor2 = [];
lerArray(vetor2);
const vetor3 = [];
lerArray(vetor3);


console.log(vetor1);
console.log(vetor1.length);
console.log(vetor2);
console.log(vetor2.length);
console.log(vetor3);
console.log(vetor3.length);