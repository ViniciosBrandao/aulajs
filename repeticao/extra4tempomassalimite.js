/*
Um determinado material radioativo perde metade de sua massa a cada 50 segundos.
Dada a massa inicial, em gramas, fazer um algoritmo que determine o tempo necessário para que
essa massa se torne menor do que 0,5 grama. Escreva a massa inicial, a massa final e o tempo
calculado em horas, minutos e segundos.
*/
function calcularTempoMassaLimite(massaInicial) {
    const massaLimite = 0.5;
    const segundosCiclo = 50;
    let contadorCiclos = 0;
    let massaFinal = massaInicial;

    while (massaFinal >= massaLimite) {
        massaFinal /= 2;
        contadorCiclos++;
    }

    const totalSegundos = contadorCiclos * segundosCiclo; 
    const horas = Math.trunc(totalSegundos / 3600); 
    let restante = totalSegundos % 3600; 
    const minutos = Math.trunc(restante / 60); 
    const segundos = restante % 60; 

    return `Massa inicial: ${massaInicial}gr. Massa final: ${massaFinal.toFixed(2)}gr. Tempo: ${horas} hora(s), ${minutos} minuto(s), ${segundos} segundo(s).`;
}

// Entrada de Dados
const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    const massaInicial = Number(prompt("Massa inicial (gramas): "));

    const resposta = calcularTempoMassaLimite(massaInicial);
    console.log(resposta);

    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");