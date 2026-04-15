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
function calcularLocacaoFilme(precoFilme, categoriaFilme, diaLocacao) {
    const categoriaFormatada = categoriaFilme.toUpperCase()
    const lancamento = "L";
    let descontoDia = 0;
    let acrescimoCategoria = 0;

    if (diaLocacao === 2 || diaLocacao === 3 || diaLocacao === 5) {
            descontoDia = precoFilme * 0.4;
    }

    if (categoriaFormatada === lancamento) acrescimoCategoria = precoFilme *  0.15;
    return precoFilme - descontoDia + acrescimoCategoria;
}

// Entrada de Dados
const prompt = require("prompt-sync")();
const precoFilme = Number(prompt("Preço do filme: "));
console.log("Dia da locação: ");
console.log("2,3 e 5 - Às segundas, terças e quintas: desconto de 40% em relação ao preço normal");
console.log("4,6,7 e 1 - Às quartas, sextas, sábados e domingos: preço normal");
const diaLocacao = Number(prompt("Dia Locação: "));
console.log("Categoria de filmes(C/L):  ");
console.log("C - Comum");
console.log("L - Lançamento");
const categoriaFilme = prompt("Categoria: ");

// Processamento
const totalLocacao = calcularLocacaoFilme(precoFilme, categoriaFilme, diaLocacao);

// Saída da Informação
console.log(`Valor a pagar: R$ ${totalLocacao.toFixed(2)} reais`);