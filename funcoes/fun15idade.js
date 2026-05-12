function calculaIdadePorDias(anos, meses, dias){
    const anosEmDias = 365 * anos
    const mesesEmDias = 30 * meses
    const idadeEmDias = anosEmDias + mesesEmDias + dias
    return idadeEmDias
}

// Entrada de dados
const prompt = require("prompt-sync")();
const anos = Number(prompt("Quantos anos você tem? "));
const meses = Number(prompt("Quantos meses você tem? "));
const dias = Number(prompt("Quantos dias você tem? "));

// Processamento
const idadeEmDias = calculaIdadePorDias(anos, meses, dias);

// Saída da Informação
console.log(`Uma pessoa com ${anos} anos, ${meses} meses e ${dias} dias tem ${idadeEmDias} dias de idade`);