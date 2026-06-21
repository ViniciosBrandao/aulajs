/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.
*/
const binaryArrayToNumber = arr => {  // versao didática demonstrando a potencia de 2
    let n = 0;
    let potencia = arr.length - 1;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === 1) {
            n = n + 2 ** (potencia);
        }
        potencia--;
    }

    return n;
};
const binaryArrayToNumberDeclarativo = arr => parseInt(arr.join(""), 2); // versao profisional, usando ferramenta nativa do javaScript, mais legível, quase mesma performance
// Decompondo:arr.join("") — transforma [1, 0, 1, 1] em string "1011". join concatena elementos do array com o separador dado (aqui, vazio).
// parseInt(string, base) — converte string para número, interpretando-a na base indicada. parseInt("1011", 2) lê "1011" como número binário (base 2) e retorna seu valor em decimal: 11.
const binaryArrayToNumberBitWise = arr => arr.reduce((n, bit) => (n << 1) | bit, 0); // versao mais rápida para manipulacao de bits, << desloca os bits de n uma posição à esquerda (multiplica por 2), | (OR bit a bit) insere o novo dígito na posição vazia. Dificil leitura.
// Entrada de dados
const arr = [1, 0, 1, 1];
// Processamento e Saída da Informação
console.log(binaryArrayToNumber(arr));