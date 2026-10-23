/*
Neste problema você deverá ler 15 valores colocá-los em 2 vetores conforme estes valores forem pares ou ímpares. Só que o tamanho de cada um dos dois vetores é de 5 posições. Então, cada vez que um dos dois vetores encher, você deverá imprimir todo o vetor e utilizá-lo novamente para os próximos números que forem lidos. Terminada a leitura, deve-se imprimir o conteúdo que restou em cada um dos dois vetores, imprimindo primeiro os valores do vetor impar. Cada vetor pode ser preenchido tantas vezes quantas for necessário.
*/
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var numeros = input.trim().split('\n').map(Number);

//console.error(JSON.stringify(lines)); 

let par = [];      // guarda LINHAS já formatadas, não números
let impar = [];
const blocos = []; // cada elemento é um balde cheio, já em texto

for (let i = 0; i < numeros.length; i++) {
    const n = numeros[i];

    if (n % 2 === 0) {
        // par.length ANTES do push é a posição desta linha
        par.push('par[' + par.length + '] = ' + n);
        if (par.length === 5) {
            blocos.push(par.join('\n'));   // encheu: guarda o bloco pronto
            par = [];
        }
    } else {
        impar.push('impar[' + impar.length + '] = ' + n);
        if (impar.length === 5) {
            blocos.push(impar.join('\n'));
            impar = [];
        }
    }
}

// sobras: ímpar primeiro. O if evita um bloco vazio, que viraria linha em branco
if (impar.length > 0) {
    blocos.push(impar.join('\n'));
}
if (par.length > 0) {
    blocos.push(par.join('\n'));
}

console.log(blocos.join('\n'));