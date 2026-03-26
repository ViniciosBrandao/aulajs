/*
Desenvolver um algoritmo que leia os coeficientes (A, B e C) de uma
equação do segundo grau ( Ax2 + Bx + C = 0) e que calcule suas
raízes. O algoritmo deve mostrar, quando possível, o valor das raízes
calculadas e a classificação das mesmas: “RAÍZES IMAGINÁRIAS”,
“RAIZ ÚNICA” ou “RAÍZES DISTINTAS”.
Obs.: Usuário ideal - ele não irá digitar valores incorretos.
*/

function calcularRaizes(coeficienteA, coeficienteB, coeficienteC){
    const delta = coeficienteB ** 2 - 4 * coeficienteA * coeficienteC;
    if (delta < 0) return "Raízes imaginárias";
    if (delta === 0){
        const raizUnica = -coeficienteB  / 2 * coeficienteA;
        return `Raiz Única: ${raizUnica.toFixed(3)}`;
    }
    if (delta > 0){
        const raizSoma = -coeficienteB + Math.sqrt(delta) / 2 * coeficienteA;
        const raizSubtracao = -coeficienteB - Math.sqrt(delta) / 2 * coeficienteA;
        return `As raízes distintas são: ${raizSoma.toFixed(3)} e ${raizSubtracao.toFixed(3)}`;
    }
}

// Entrada de dados
const prompt = require("prompt-sync")();
const coeficienteA = Number(prompt("Coeficiente A: "));
const coeficienteB = Number(prompt("Coeficiente B: "));
const coeficienteC = Number(prompt("Coeficiente C: "));

// Processamento  
const resposta = calcularRaizes(coeficienteA, coeficienteB, coeficienteC);

// Saída da Informação
console.log(resposta)
