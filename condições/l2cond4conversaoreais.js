/*
4. Fazer um algoritmo que converta uma determinada quantia em Reais
para uma das seguintes moedas de acordo com a opção do usuário:

Moeda Preço por Litro
1 – Euro R$ 5,418
2 – Libra Esterlina R$ 6,336
3 – Dólar R$ 5,189
*/
function conversaoMoedas(reais, codigoConversao) {
    const euro = 1;
    const libra = 2;
    const dolar = 3;

    const cotacaoEuro = 5.418;
    const cotacaoLibra = 6.336;
    const cotacaoDolar = 5.189;

    let valorConvertido = 0;
    let nomeMoeda = "";
    let simbolo = "";

    if (codigoConversao === euro) {
        valorConvertido = reais / cotacaoEuro;
        simbolo = "€";
        nomeMoeda = "euros";
    }

    if (codigoConversao === libra) {
        valorConvertido = reais / cotacaoLibra;
        simbolo = "£";
        nomeMoeda = "libras esterlinas";
    }

    if (codigoConversao === dolar) {
        valorConvertido = reais / cotacaoDolar;
        simbolo = "$";
        nomeMoeda = "dólares";
    }

    if (simbolo === "") {
        return "Código inválido";
    }

    return `${simbolo} ${valorConvertido.toFixed(2)} ${nomeMoeda}`;
}

// Entrada de Dados
const prompt = require("prompt-sync")();
const reais = Number(prompt("Valor em reais: "));
const codigoConversao = Number(prompt("1-Euro | 2-Libra | 3-Dólar:  "));

// Processamento
const valorPagamento = conversaoMoedas(reais, codigoConversao);

// Saída da Informação
console.log(valorPagamento);