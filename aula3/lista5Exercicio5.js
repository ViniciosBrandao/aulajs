// Entrada de dados
const prompt = require("prompt-sync")();
const contaCorrente = Number(prompt("Quais os três digitos da conta corrente? "));

// Processamento
let centena = Math.floor(contaCorrente / 100);
let dezena = Math.floor(contaCorrente / 10) % 10;
let unidade = contaCorrente % 10;
const numeroInvertido = Number(`${unidade}${dezena}${centena}`);
const soma = contaCorrente + numeroInvertido;
// Extrai dígitos da soma
centena = Math.floor(soma / 100);
dezena = Math.floor(soma / 10) % 10;
unidade = soma % 10;
// Cálculo posicional
const resultado = 1 * centena + 2 * dezena + 3 * unidade;
// Dígito verificador
const digitoVerificador = resultado % 10;
const contaComDígito = (`${contaCorrente}-${digitoVerificador}`);

// Saída da Informação
console.log(`A conta corrente com seu dígito verificador é ${contaComDígito}`);