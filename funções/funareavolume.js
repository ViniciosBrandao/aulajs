function calcularArea(raio, altura){
    return (2 * Math.PI * raio * (raio + altura));
}
function calcularVolume(raio, altura){
    return (Math.PI * raio * raio * altura);
}

// Entrada de Dados
const prompt = require("prompt-sync")();
const raio = Number(prompt("Digite o raio: "));
const altura = Number(prompt("Digite a altura: "));

//Saida
const area = calcularArea(raio,altura);
const volume = calcularVolume(raio, altura);
console.log(`Area do Cilindo = ${area.toFixed(5)}`);
console.log(`Volume do Cilindro = ${volume.toFixed(3)}`);