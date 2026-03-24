function calculaDiasPorAnoMesesDias(diasSemAcidente){
    const ano = Math.trunc(diasSemAcidente / 365);
    let dias = diasSemAcidente % 365;
    const meses = Math.trunc(dias / 30);
    dias = dias % 30;
    console.log(`${ano} anos, ${meses} meses e ${dias} dias`);
    
}

// Entrada de dados
const prompt = require("prompt-sync")();
const diasSemAcidente = Number(prompt("Quantos dias sem acidente? "));

// Processamento e Saída da Informação
calculaDiasPorAnoMesesDias(diasSemAcidente);

