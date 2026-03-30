/* 
3. Fazer um algoritmo que leia três valores valorA, valorB, e valorC. O
programa deve verificar se estes valores formam um triângulo ou não
forma. Formando um triângulo para dizer se ele é equilátero, isósceles
ou escaleno.
Obs.: Usuário ideal - ele não irá digitar valores incorretos.
*/
function classificarTriangulo(valorA, valorB, valorC){
    if (valorA + valorB > valorC && valorA + valorC > valorB && valorB + valorC > valorA){
        if (valorA === valorB && valorB === valorC) return "Triângulo Equilátero";
        if (valorA === valorB || valorA === valorC || valorB === valorC) return "Triângulo Isósceles"
        return "Triângulo Escaleno"
    }
    return "Não é um triângulo";
    
}

// Entrada de dados
const prompt = require("prompt-sync")();
const valorA = Number(prompt("valor A: "));
const valorB = Number(prompt("valor B: "));
const valorC = Number(prompt("valor C: "));

// Processamento  
const resposta = classificarTriangulo(valorA, valorB, valorC);

// Saída da Informação
console.log(resposta)