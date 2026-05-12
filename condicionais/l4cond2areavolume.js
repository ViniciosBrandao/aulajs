/*
Desenvolver um programa com as opções de calcular e imprimir o
volume e a área da superfície de um cone reto, de um cilindro ou de
uma esfera. O programa deverá ler a opção da figura desejada:
(1- cone reto; 2 - cilindro ou 3 - esfera) e de acordo com a opção
escolhida calcular e escrever o volume e a área da superfície da figura
pedida.

Fórmulas:

Cone Reto :

Cilindro:

Esfera:
*/
function calcularArea(tipoEscolhido, raio, altura) {
    const coneReto = 1;
    const cilindro = 2;
    const esfera = 3;

    switch (tipoEscolhido) {
        case coneReto:
            return Math.PI * raio * Math.sqrt((raio ** 2 + altura ** 2));
        
        case cilindro:
            return 2 * Math.PI * raio * altura;

        case esfera:
            return 4 * Math.PI * raio ** 2;    

        default: 
            return null;     
    }
}
function calcularVolume(tipoEscolhido, raio, altura) {
    const coneReto = 1;
    const cilindro = 2;
    const esfera = 3;
    
    switch (tipoEscolhido) {
        case coneReto:
            return (Math.PI * raio ** 2 * altura) / 3;
        
        case cilindro:
            return Math.PI * raio ** 2 * altura;

        case esfera:
            return 4/3 * Math.PI * raio ** 3;    

        default: 
            return null;     
    }
}
// Entrada de Dados
const prompt = require("prompt-sync")();

// Processamento e Saída da Informação
let opcao = "";
do{
    console.log("MENU DE OPÇÕES: ");
    console.log("1 - Cone Reto");
    console.log("2 - Cilindro ");
    console.log("3 - Esfera ");
    const tipoEscolhido = Number(prompt("Qual opção: "));
    const raio = Number(prompt("Raio: "));
    const altura = Number(prompt("Altura: "));

    const area = calcularArea(tipoEscolhido, raio, altura);
    const volume = calcularVolume(tipoEscolhido, raio, altura);
    console.log(`Área: ${area.toFixed(3)}, Volume: ${volume.toFixed(3)}`);
    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");