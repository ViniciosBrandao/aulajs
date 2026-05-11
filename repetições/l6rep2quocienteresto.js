/*
Fazer um algoritmo que:
● Leia dois números inteiros positivos (N1, N2);
● Calcule e escreva para este par de números (N1, N2), o quociente e
o resto da divisão de N1 por N2.
Obs.: A máquina que irá calcular o quociente e o resto desta divisão,
somente sabe adicionar e subtrair. Portanto, não é possível o uso das
funções quociente e resto.
Exemplo: N1=14 e N2= 4 => Quociente(14,4) = 3 e o Resto(14,4)= 2;
Procedendo 14 – 4 = 10, 10 – 4 = 6, 6 – 4 = 2, o resto é 2.
Como ocorreram 3 subtrações sucessivas, o quociente é 3.
*/
function calcularQuocienteRestoPorAdicaoSubtracao(numero1, numero2) {
    let quociente = 0;
    let resto = numero1;

    while (resto >= numero2) {
        resto = resto - numero2; 
        quociente++;
    }

    return `Quociente: ${quociente}. Resto: ${resto}`;  
}     

const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    const numero1 = Number(prompt("Número 1: "));
    const numero2 = Number(prompt("Número 2: "));
  
    const resposta = calcularQuocienteRestoPorAdicaoSubtracao(numero1, numero2);
    console.log(resposta)

    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");