/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/
function rowSumOddNumbers(n) { // minha primeira tentativa
    let soma = 0;
    let termo = 1;
    let arr = [];

    if (n === 1) return 1;

    for (let linha = 2; linha <= n; linha++) {
        arr = [];

        for (let coluna = 1; coluna <= linha; coluna++) {
            termo = termo + 2; 
            arr.push(termo);
        }
    }

    return arr.reduce((acumulador, elemento) => acumulador + elemento, 0);
}
function rowSumOddNumbers(n) { // versao otimizada, utilizando progressao aritmética
    const totalNumerosAntes = (n * (n - 1)) / 2; // quantos números vêm antes da linha n
    const primeiroDaLinha = 2 * totalNumerosAntes + 1;
    const quantidadeNaLinha = n;
    const ultimoDaLinha = primeiroDaLinha + 2 * (quantidadeNaLinha - 1);

    return (quantidadeNaLinha * (primeiroDaLinha + ultimoDaLinha)) / 2; // soma de PA
}
function rowSumOddNumbers(n) { // padrao matematico da soma das linhas dos impares, mais eficiente possível.
    return n ** 3;
}

console.log(`A soma da linha é: ${rowSumOddNumbers(1)}`);
console.log(`A soma da linha é: ${rowSumOddNumbers(2)}`);
console.log(`A soma da linha é: ${rowSumOddNumbers(3)}`);
