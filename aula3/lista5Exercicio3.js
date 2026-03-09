// Entrada de dados
const prompt = require("prompt-sync")();
const raio = Number(prompt("Qual o raio do cilindro? "));
const altura = Number(prompt("Qual a altura da altura do cilindro? "));


// Processamento
const area = (2 * Math.PI * raio * (altura + raio));
const volume = (Math.PI * raio ** 2 * altura);

// Saída da Informação
console.log(`Um cilindro de raio ${raio} e altura ${altura} tem área ${area.toFixed(2)} e volume ${volume.toFixed(2)}`);