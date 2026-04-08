/*
Uma locadora de filmes tem as seguintes regras para o aluguel
destes:
● Às segundas, terças e quintas (2,3 e 5) : desconto de 40% em
relação ao preço normal;
● Às quartas , sextas, sábados e domingos (4,6 ,7 e 1): preço
normal;
● Aluguel de fitas comuns: preço normal;
● Aluguel de lançamentos: acréscimo de 15% em relação ao preço
normal.
Desenvolver um programa para ler o preço normal do filme alugado
(em R$) e sua categoria (comum ou lançamento). Calcular e imprimir
o preço final que será pago pela locação do filme.
*/
function calcularLocacaoFilme(precoFilme, categoriaFilme, diaLocacao){
    const tipoFormatado = consumidorTipo.toUpperCase()
    const residencial = "A";
    const comercial = "B";
    const industrial = "C";

    if (tipoFormatado === residencial) return 5 + (0.55 * consumoM3);
    if (tipoFormatado === comercial) return 150 + (1.25 * consumoM3);
    if (tipoFormatado === industrial) return 280 + (2.54 * consumoM3);
}

// Entrada de Dados
const prompt = require("prompt-sync")();
const precoFilme = Number(prompt("Preço do filme: "));
console.log("Dia da locação: ");
console.log("2,3 e 5 - Às segundas, terças e quintas: desconto de 40% em relação ao preço normal");
console.log("4,6 ,7 e 1 - Às quartas , sextas, sábados e domingos: preço normal");
const diaLocacao = Number(prompt("Dia Locação: "));
console.log("Categoria de filmes: ");
console.log("1 - Comum");
console.log("2 - Lançamento");
const categoriaFilme = Number(prompt("Categoria: "));

// Processamento
const valorFaturaAgua = calcularLocacaoFilme(precoFilme, categoriaFilme, diaLocacao);

// Saída da Informação
console.log(`${precoFilme} Total: R$ ${valorFaturaAgua.toFixed(2)} reais`);