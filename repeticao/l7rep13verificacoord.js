/*
Escreva um programa que leia várias coordenadas de um
ponto P(x,y), fornecido pelo usuário, o usuário deve dizer
quando para de ler os dados. O seu programa deverá
escrever “INTERIOR” se o ponto estiver dentro da região
formada pelas retas, como mostra a figura, ou “EXTERIOR”
caso contrário.
*/
// Entrada de Dados
const prompt = require("prompt-sync")();

function verificarCoordenada() {
    let opcao = "";

    do {
        const coordX = Number(prompt("Digite as coordenadas x: "));
        const coordY = Number(prompt("Digite as coordenadas y: "));

        if (Math.abs(coordX) + Math.abs(coordY) <= 15) {
            console.log("Interior");
        } else {
            console.log("Exterior");
        }

        opcao = prompt("Deseja continuar? (S/N) ");
    } while (opcao.toUpperCase() === "S");  
}
// Processamento e Saída da Informação
verificarCoordenada();


