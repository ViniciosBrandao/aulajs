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
function rowSumOddNumbers2(n) { // minha primeira tentativa
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
    /* The rows' start numbers are Hogben's centered polygonal numbers:
     1, 3, 7, 13, 21, 31, 43 = b[n] = n^2 - n + 1.
     <https://oeis.org/A002061>
     
     The sum of one row is given by:
     s[n] = n^2 + n(b[n] - 1).
     <https://www.quora.com/What-is-the-sum-of-n-consecutive-odd-integers/answer/Xavier-Dectot>
     
     Inline b[n]:
     s[n] = n^2 + n(n^2 - n + 1 - 1)
          = n^2 + n(n^2 - n)
          = n^2 + n^3 - n^2
          = n^3
     ... oh. */
    return n ** 3;
}

console.log(`A soma da linha é: ${rowSumOddNumbers(1)}`);
console.log(`A soma da linha é: ${rowSumOddNumbers(2)}`);
console.log(`A soma da linha é: ${rowSumOddNumbers(3)}`);
