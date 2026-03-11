// Entrada de dados
const prompt = require("prompt-sync")();
const ipi = Number(prompt("Qual o valor do IPI? "));
const codigoPeca1 = Number(prompt("Qual o código da peça 1? "));
const valorUnitario1 = Number(prompt("Qual o valor unitário da peça 1? "));
const quantidadePeca1 = Number(prompt("Qual a quantidade de peças 1? "));
const codigoPeca2 = Number(prompt("Qual o código da peça 2? "));
const valorUnitario2 = Number(prompt("Qual o valor unitário da peça 2? "));
const quantidadePeca2 = Number(prompt("Qual a quantidade de peças 2? "));

// Processamento
const totalPeca1 = valorUnitario1 * quantidadePeca1;
const totalPeca2 = valorUnitario2 * quantidadePeca2;

const subtotal = totalPeca1 + totalPeca2;

const total = subtotal * (ipi / 100 + 1);

// Saída da Informação
console.log(`\nPeça 1 (código ${codigoPeca1})`);
console.log(`Quantidade: ${quantidadePeca1}`);
console.log(`Valor unitário: R$ ${valorUnitario1.toFixed(2)}`);
console.log(`Subtotal: R$ ${totalPeca1.toFixed(2)}`);

console.log(`Peça 2 (código ${codigoPeca2})`);
console.log(`Quantidade: ${quantidadePeca2}`);
console.log(`Valor unitário: R$ ${valorUnitario2.toFixed(2)}`);
console.log(`Subtotal: R$ ${totalPeca2.toFixed(2)}`);

console.log(`IPI aplicado: ${ipi}%`);
console.log(`Valor total a pagar: R$ ${total.toFixed(2)}`);