function calculaDiasPorAnoMesesDias(diasSemAcidente){
    const ano = Math.trunc(diasSemAcidente / 365);
    let resto = diasSemAcidente % 365;
    const meses = Math.trunc(resto / 30);
    const dias = resto % 30;
    console.log(`${ano} anos, ${meses} meses e ${dias} dias`);
    
}

// Entrada de dados
const prompt = require("prompt-sync")();
const diasSemAcidente = Number(prompt("Quantos dias sem acidente? "));

// Processamento e Saída da Informação
calculaDiasPorAnoMesesDias(diasSemAcidente);

